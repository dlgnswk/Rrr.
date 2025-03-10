import PostpageLayout from "@/components/[slug]/PostpageLayout";
import PostContent from "@/app/[slug]/PostContent";
import { getAllPosts } from "@/utils/mdx";
import MainButton from "@/components/[slug]/MainButton";

type Params = Promise<{ slug: string }>;

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((post) => post.slug === slug);
  console.log(post);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <PostpageLayout>
      <MainButton />
      <PostContent post={post} />
    </PostpageLayout>
  );
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found - Rrr.",
    };
  }

  return {
    title: `${post.title} - Rrr.`,
    description: post.description,
    keywords: post.keywords,
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
