"use client";

import ArticleSectionGroup from "./ArticleSectionGroup";
import { Post } from "@/types/posts";

interface HomepageArticleProps {
  posts: Post[];
}

export default function HomepageArticle({ posts }: HomepageArticleProps) {
  return (
    <article className="w-full flex-grow mb-20">
      <ArticleSectionGroup posts={posts} />
    </article>
  );
}
