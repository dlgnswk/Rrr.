import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import remarkCallouts from "remark-callouts";

export const postsDirectory = path.join(process.cwd(), "src/content");

export const rehypeOptions = {
  theme: "github-dark",
  keepBackground: true,
};

export async function serializeMDX(content: string) {
  return serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkCallouts],
      rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
    },
  });
}
