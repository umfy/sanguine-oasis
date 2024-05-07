import { extract } from "$std/front_matter/yaml.ts";
import { join } from "$std/path/mod.ts";

const DIRECTORY = "./posts";

export interface Post {
  id: number;
  slug: string;
  title: string;
  updated: Date;
  snippet: string;
  content: string;
}

export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir(DIRECTORY);
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => a.id - b.id);
  return posts;
}

export async function getPost(slug: string): Promise<Post | null> {

  const text = await Deno.readTextFile(join(DIRECTORY, `${slug}.md`));
  const { attrs, body } = extract(text);

  return {
    id: Number(attrs.id as string),
    slug,
    title: attrs.title as string,
    updated: new Date(attrs.updated as string),
    content: body,
    snippet: attrs.snippet as string,
  };
}
