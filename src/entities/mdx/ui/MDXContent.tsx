"use client";

import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { Suspense } from "react";
import MDXImage from "@/shared/ui/mdx/MDXImage";

const components = {
  MDXImage,
};

export default function MDXContent({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <div className="prose prose-h1:text-4xl prose-h2:text-3xl max-w-none mt-[60px]">
        <MDXRemote {...source} components={components} />
      </div>
    </Suspense>
  );
}
