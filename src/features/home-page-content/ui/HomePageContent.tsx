import { getTags } from "@/shared/lib/tags";
import getAllPosts from "@/shared/api/mdx/getAllPosts";
import TagList from "@/features/tag-list/ui/TagList";
import { HomePageArticleList } from "./HomePageArticleList";

export default async function HomePageContent() {
  const allPosts = await getAllPosts();
  const publishedPosts = allPosts.filter((post) => post.isPublished);
  const tags = getTags(publishedPosts);

  return (
    <div>
      <TagList tags={tags} />
      <article className="w-full flex-grow mb-20">
        <HomePageArticleList posts={publishedPosts} />
      </article>
    </div>
  );
}
