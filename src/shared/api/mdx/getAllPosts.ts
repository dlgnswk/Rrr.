import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/entities/post/model/types";
import { postsDirectory, serializeMDX } from "./utils";

export default async function getAllPosts(): Promise<Post[]> {
  const slugs = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const fullPath = path.join(postsDirectory, slug, "index.mdx");
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const mdxSource = await serializeMDX(content);

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
