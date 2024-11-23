import PostpageLayout from "@/components/posts/PostpageLayout";
import { Separator } from "@/components/ui/separator";
import posts from "@/constants/posts";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <PostpageLayout>
      <article className="flex flex-col w-full gap-3 cursor-pointer">
        <div className="flex flex-col">
          <h1 className="text-5xl break-keep">
            <span className="font-bold">{post.titleStyle.bold}</span>
            {post.titleStyle.rest}
          </h1>
          <Separator className="my-6 bg-black" />
          <p className="text-2xl font-light">{post.description}</p>
          <Separator className="my-6 bg-black" />
        </div>
      </article>
    </PostpageLayout>
  );
}
