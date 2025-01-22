"use client";

import { Separator } from "@/components/ui/separator";
import { Post } from "@/types/posts";
import dynamic from "next/dynamic";

const MDXContent = dynamic(() => import("@/components/mdx/MDXContent"), {
  ssr: false,
  loading: () => <div>로딩 중...</div>,
});

export default function PostContent({ post }: { post: Post }) {
  return (
    <article className="flex flex-col w-full gap-3">
      <div className="flex flex-col">
        <h1 className="text-5xl break-keep">
          <span className="font-bold">{post.titleStyle.bold}</span>
          {post.titleStyle.rest}
        </h1>
        <Separator className="my-6 bg-black" />
      </div>
      <MDXContent source={post.content} />
    </article>
  );
}
