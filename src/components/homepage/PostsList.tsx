import { Post } from "@/types/posts";
import HomepageArticle from "./HomepageArticle";

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div>
      <HomepageArticle posts={posts} />
    </div>
  );
}
