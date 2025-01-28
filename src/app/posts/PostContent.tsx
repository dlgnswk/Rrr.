"use client";

import Profile from "@/components/posts/[slug]/profile";
import { Separator } from "@/components/ui/separator";
import { Post } from "@/types/posts";
import dynamic from "next/dynamic";

const MDXContent = dynamic(() => import("@/components/mdx/MDXContent"), {
  ssr: false,
  loading: () => <div>로딩 중...</div>,
});

export default function PostContent({ post }: { post: Post }) {
  return (
    <article className="flex flex-col w-full gap-3 mb-[100px] mt-[80px]">
      <div className="flex flex-col">
        <h1 className="text-5xl break-keep">
          <span className="font-bold">{post.titleStyle.bold}</span>
          {post.titleStyle.rest}
        </h1>
        <Separator className="my-6 bg-black" />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 text-foreground">
              <Profile />
            </div>
            <span className="font-honerThose text-xl pt-2">Reeraeroon</span>
          </div>
          <div className="flex flex-col gap-1 ml-auto text-xs text-right">
            <span className="font-honerThose">{post.publishedAt}</span>
            <p className="flex gap-1">
              <span>
                {post.category}
                {" | "}
              </span>
              <span>{post.tags.join(", ")}</span>
            </p>
          </div>
        </div>
        <Separator className="my-6 bg-black" />
      </div>
      <MDXContent source={post.content} />
    </article>
  );
}
