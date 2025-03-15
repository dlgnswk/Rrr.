import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/entities/post/model/types";
import { postsDirectory, serializeMDX } from "./utils";

export default async function getPostBySlug(
  slug: string
): Promise<Post | undefined> {
  try {
    const fullPath = path.join(postsDirectory, slug, "index.mdx");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const mdxSource = await serializeMDX(content);

    return {
      slug,
      ...data,
      content: mdxSource,
    } as Post;
  } catch {
    return undefined;
  }
}
