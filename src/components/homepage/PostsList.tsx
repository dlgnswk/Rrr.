import { Post } from "@/types/posts";
import HomepageArticle from "./HomepageArticle";

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div>
      {posts.map((post) => (
        <HomepageArticle key={post.slug} posts={posts} />
      ))}
    </div>
  );
}
