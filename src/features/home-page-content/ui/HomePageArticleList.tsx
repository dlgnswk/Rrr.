import { Post } from "@/entities/post/model/types";
import ArticleSection from "@/entities/post/ui/ArticleSection";
import Link from "next/link";

interface HomePageArticleListProps {
  posts: Post[];
}

export function HomePageArticleList({ posts }: HomePageArticleListProps) {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Link href={`/${post.slug}`} key={post.slug}>
            <ArticleSection post={post} index={index} posts={posts} />
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
