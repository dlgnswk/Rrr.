export const postCategories = ["frontend", "backend", "CS", "network"] as const;
export const postTags = [
  "react",
  "next",
  "typescript",
  "javascript",
  "nodejs",
  "zustand",
  "shadcn",
] as const;

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: (typeof postCategories)[number];
  tags: (typeof postTags)[number][];
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  content: string;
};
