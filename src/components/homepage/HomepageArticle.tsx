"use client";

import ArticleSectionGroup from "./ArticleSectionGroup";
import { posts } from "@/constants/posts";

interface HomepageArticleProps {
  posts: typeof posts;
}

export default function HomepageArticle({ posts }: HomepageArticleProps) {
  return (
    <article className="w-full flex-grow mb-20">
      <ArticleSectionGroup posts={posts} />
    </article>
  );
}
