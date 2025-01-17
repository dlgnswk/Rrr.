"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/posts";

const postsDirectory = path.join(process.cwd(), "src/posts");

export async function getAllPosts(): Promise<Post[]> {
  const slugs = fs.readdirSync(postsDirectory);

  const posts = slugs
    .map((slug) => {
      const fullPath = path.join(postsDirectory, slug, "index.mdx");
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        ...data,
        content,
      } as Post;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  try {
    const fullPath = path.join(postsDirectory, slug, "index.mdx");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    } as Post;
  } catch {
    return undefined;
  }
}
