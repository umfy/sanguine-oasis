import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";
import { Heading } from "../../components/Typography.tsx";
export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <main class="max-w-screen-md pt-16 mx-auto">
      <Heading title="Rules" />
      <ol className="list-decimal px-8 text-2xl">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ol>
    </main>
  );
}

function PostCard(props: { post: Post }) {
  const { post } = props;

  return (
    <a class="block text-gray-900 hover:text-orange-500" href={`rules/${post.slug}`}>
      <h3 class="text-2xl pt-2">
        {post.title}
      </h3>
    </a>
  );
}
