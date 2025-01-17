import { getAllPosts } from "@/app/utils/mdx";
import HomepageTitle from "@/components/homepage/HomepageTitle";
import HomepageLayout from "@/components/homepage/HomepageLayout";
import HomepageFooter from "@/components/homepage/HomepageFooter";
import PostsList from "@/components/homepage/PostsList";

export default async function Homepage() {
  const posts = await getAllPosts();

  return (
    <HomepageLayout>
      <HomepageTitle />
      <PostsList posts={posts} />
      <HomepageFooter />
    </HomepageLayout>
  );
}
