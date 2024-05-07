import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";
import { Navigation, Page } from "@/components/Typography.tsx";
export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;

  return (
    <Page className="pt-4">
      <div class="logo">
        <h1 class="title text-5xl">
          <span class="text-left">Sanguine</span>
          <span class="text-right fancy block text-gray-300 text-[1.8em]">
            Oasis
          </span>
        </h1>
      </div>
      <div class="flex flex-col items-center pt-12">
        <h2 class="text-4xl mb-4">Table of contents</h2>
        <ol className="list-decimal text-2xl">
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ol>
      </div>
      <Navigation href="/">Go back</Navigation>
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
