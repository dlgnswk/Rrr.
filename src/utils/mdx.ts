"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/posts";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import remarkCallouts from "remark-callouts";

const rehypeOptions = {
  theme: "github-dark",
  keepBackground: true,
};

const postsDirectory = path.join(process.cwd(), "src/posts");

export async function getAllPosts(): Promise<Post[]> {
  const slugs = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const fullPath = path.join(postsDirectory, slug, "index.mdx");
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const mdxSource = await serialize(content, {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkCallouts],
          rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
        },
      });

      return {
        slug,
        ...data,
        content: mdxSource,
      } as Post;
    })
  );

  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  try {
    const fullPath = path.join(postsDirectory, slug, "index.mdx");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const mdxSource = await serialize(content, {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkCallouts],
        rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
      },
    });

    return {
      slug,
      ...data,
      content: mdxSource,
    } as Post;
  } catch {
    return undefined;
  }
}
