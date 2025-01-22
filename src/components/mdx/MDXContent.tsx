"use client";

import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export default function MDXContent({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) {
  return (
    <div className="prose prose-slate prose-h1:text-4xl prose-h2:text-3xl max-w-none">
      <MDXRemote {...source} />
    </div>
  );
}
