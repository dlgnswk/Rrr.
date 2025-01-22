import { MDXRemoteSerializeResult } from "next-mdx-remote";

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

export interface Post {
  slug: string;
  title: string;
  titleStyle: { bold: string; rest: string };
  description: string;
  category: (typeof postCategories)[number];
  tags: (typeof postTags)[number][];
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  content: MDXRemoteSerializeResult;
}
