import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";
import { Page } from "@/components/Typography.tsx";
export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <Page className="pt-24">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl px-4 mb-4">Table of contents</h1>
        <ol className="list-decimal px-8 text-2xl">
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ol>
      </div>
      <div class="mt-32 text-2xl w-full text-center">
        <a href="/">Go back</a>
      </div>
    </Page>
  );
}

function PostCard(props: { post: Post }) {
  const { post } = props;

  return (
    <a class="block hover:text-gray-50" href={`rules/${post.slug}`}>
      <h3 class="text-2xl pt-2">
        {post.title}
      </h3>
    </a>
  );
}
