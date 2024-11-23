import posts from "@/constants/posts";

import HomepageTitle from "@/components/homepage/HomepageTitle";
import HomepageLayout from "@/components/homepage/HomepageLayout";
import HomepageArticle from "@/components/homepage/HomepageArticle";
import HomepageFooter from "@/components/homepage/HomepageFooter";

export default function Homepage() {
  return (
    <HomepageLayout>
      <HomepageTitle title="Rrr." />
      <HomepageArticle posts={posts} />
      <HomepageFooter />
    </HomepageLayout>
  );
}
