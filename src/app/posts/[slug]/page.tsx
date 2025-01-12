import HomepageTitle from "@/components/homepage/HomepageTitle";
import PostpageLayout from "@/components/posts/PostpageLayout";
import PostContent from "../PostContent";
import { prisma } from "@/lib/prisma";

type Params = Promise<{ slug: string }>;

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;

  return (
    <PostpageLayout>
      <HomepageTitle />
      <PostContent slug={slug} />
    </PostpageLayout>
  );
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      select: {
        title: true,
        description: true,
        keywords: true,
      },
    });

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
  } catch (error) {
    return {
      title: "Error - Rrr.",
    };
  }
}
