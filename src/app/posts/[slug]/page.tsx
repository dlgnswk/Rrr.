import HomepageTitle from "@/components/homepage/HomepageTitle";
import PostpageLayout from "@/components/posts/PostpageLayout";
import PostContent from "../PostContent";
import { getAllPosts } from "@/app/utils/mdx";

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
      <HomepageTitle />
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
