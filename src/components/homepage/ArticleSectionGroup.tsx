import { posts } from "@/constants/posts";
import ArticleSection from "./ArticleSection";
import Link from "next/link";

interface ArticleSectionGroupProps {
  posts: typeof posts;
}

export default function ArticleSectionGroup({
  posts,
}: ArticleSectionGroupProps) {
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <ArticleSection post={post} index={index} />
          </Link>
        ))
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </>
  );
}
