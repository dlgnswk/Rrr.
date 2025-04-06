import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/entities/post/model/types";
import { postsDirectory, serializeMDX } from "./utils";
import { parseKoreanDate } from "@/shared/lib/dates";

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
  console.log(posts);
  return posts.sort(
    (a, b) =>
      new Date(parseKoreanDate(b.updatedAt)).getTime() -
      new Date(parseKoreanDate(a.updatedAt)).getTime()
  );
}
