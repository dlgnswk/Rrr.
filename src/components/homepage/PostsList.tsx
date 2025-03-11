import { Post } from "@/types/posts";
import { getTags } from "@/utils/tags";

import HomepageArticle from "./HomepageArticle";
import TagList from "./TagList";

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div>
      <TagList tags={getTags(posts)} />
      <HomepageArticle posts={posts} />
    </div>
  );
}
