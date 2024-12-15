import HomepageTitle from "@/components/homepage/HomepageTitle";
import PostpageLayout from "@/components/posts/PostpageLayout";
import PostContent from "../PostContent";

interface PropType {
  params: { slug: string };
}

export default function PostPage({ params }: PropType) {
  return (
    <PostpageLayout>
      <HomepageTitle />
      <PostContent slug={params.slug} />
    </PostpageLayout>
  );
}
