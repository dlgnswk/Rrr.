import HomepageTitle from "@/components/homepage/HomepageTitle";
import HomepageLayout from "@/components/homepage/HomepageLayout";
import HomepageArticle from "@/components/homepage/HomepageArticle";
import HomepageFooter from "@/components/homepage/HomepageFooter";
import { useGetPosts } from "@/queries/useGetPosts";
import PostsList from "@/components/homepage/PostsList";

export default async function Homepage() {
  return (
    <HomepageLayout>
      <HomepageTitle />
      <PostsList />
      <HomepageFooter />
    </HomepageLayout>
  );
}
