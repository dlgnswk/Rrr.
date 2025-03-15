import PostPage from "@/views/post-page/ui/PostPage";
import getAllPosts from "@/shared/api/mdx/getAllPosts";
import getPostBySlug from "@/shared/api/mdx/getPostBySlug";

type Params = Promise<{ slug: string }>;

export default async function PostPageContainer({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <PostPage post={post} />;
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - Rrr.",
    };
  }

  return {
    title: `${post.title} - Rrr.`,
    description: post.description,
    tags: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
