"use client";

import Profile from "@/components/[slug]/profile";
import { Post } from "@/types/posts";
import dynamic from "next/dynamic";

const MDXContent = dynamic(() => import("@/components/mdx/MDXContent"), {
  ssr: false,
  loading: () => <div>로딩 중...</div>,
});

export default function PostContent({ post }: { post: Post }) {
  return (
    <article className="flex flex-col w-full gap-3 mb-[100px] mt-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl break-keep">
          {post.titleStyle.map((part, index) => (
            <span key={index} className={part.isBold ? "font-bold" : ""}>
              {part.text}
            </span>
          ))}
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-[36px] h-[36px] text-foreground">
            <Profile />
          </div>
          <div className="flex flex-col justify-center text-[16px]">
            <span className="font-semibold">Reeraeroon</span>
            <span className="text-[12px] text-[#4F5968]">
              {post.publishedAt}
            </span>
          </div>
        </div>
      </div>
      <MDXContent source={post.content} />
      {post.tags && post.tags.length > 0 && (
        <div className="w-full flex gap-2 mt-8">
          {post.tags.map((tag) => (
            <div
              key={tag}
              className="w-fit rounded-full bg-[#D9D9D9] bg-opacity-40 py-0.5 px-2.5 text-[12px] font-semibold text-[#4F5968]"
            >
              #{tag}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
