"use client";

import ArticleSectionGroup from "./ArticleSectionGroup";

interface HomepageArticleProps {
  posts: any;
}

export default function HomepageArticle({ posts }: HomepageArticleProps) {
  return (
    <article className="w-full flex-grow mb-20">
      <ArticleSectionGroup posts={posts} />
    </article>
  );
}
