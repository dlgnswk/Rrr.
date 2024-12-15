import HomepageTitle from "@/components/homepage/HomepageTitle";
import PostpageLayout from "@/components/posts/PostpageLayout";
import PostContent from "../PostContent";

interface PropType {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PropType) {
  const resolvedParams = await params;

  return (
    <PostpageLayout>
      <HomepageTitle />
      <PostContent slug={resolvedParams.slug} />
    </PostpageLayout>
  );
}
