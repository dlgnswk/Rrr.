import { Post } from "@/types/posts";
import ArticleSection from "./ArticleSection";
import Link from "next/link";

interface ArticleSectionGroupProps {
  posts: Post[];
}

export default function ArticleSectionGroup({
  posts,
}: ArticleSectionGroupProps) {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map(
          (post, index) =>
            post.isPublished && (
              <Link href={`/posts/${post.slug}`} key={post.slug}>
                <ArticleSection post={post} index={index} posts={posts} />
              </Link>
            )
        )
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </div>
  );
}
