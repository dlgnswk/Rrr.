import { Post } from "@/types/posts";
import ArticleSection from "./ArticleSection";
import Link from "next/link";

interface ArticleSectionGroupProps {
  posts: Post[];
}

export default function ArticleSectionGroup({
  posts,
}: ArticleSectionGroupProps) {
  const publishedPosts = posts.filter((post) => post.isPublished);

  return (
    <div>
      {publishedPosts.length > 0 ? (
        publishedPosts.map((post, index) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <ArticleSection post={post} index={index} posts={publishedPosts} />
          </Link>
        ))
      ) : (
        <div className="w-full text-2xl">
          작성된 글이 없어요, 조금만 기다려주세요!
        </div>
      )}
    </div>
  );
}
