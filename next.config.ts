import createMDX from "@next/mdx";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});

export default withMDX(nextConfig);
