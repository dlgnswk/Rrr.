import HomepageTitle from "@/components/homepage/HomepageTitle";
import PostpageLayout from "@/components/posts/PostpageLayout";
import PostContent from "../PostContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <PostpageLayout>
      <HomepageTitle />
      <PostContent slug={slug} />
    </PostpageLayout>
  );
}
