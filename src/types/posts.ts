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

interface TitleStyle {
  text: string;
  isBold: boolean;
}

export interface Post {
  slug: string;
  title: string;
  titleStyle: TitleStyle[];
  description: string;
  category: (typeof postCategories)[number];
  tags: (typeof postTags)[number][];
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  content: MDXRemoteSerializeResult;
  isPublished: boolean;
}
