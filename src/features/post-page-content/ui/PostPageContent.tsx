"use client";

import dynamic from "next/dynamic";

import { Post } from "@/entities/post/model/types";
import Profile from "@/shared/ui/icons/ProfileIcon";

import GiscusComments from "@/features/giscus-comments/ui/GiscusComments";

const MDXContent = dynamic(() => import("@/entities/mdx/ui/MDXContent"), {
  ssr: false,
  loading: () => <div>로딩 중...</div>,
});

export default function PostPageContent({ post }: { post: Post }) {
  return (
    <>
      <article className="flex flex-col w-full gap-3 mb-[100px] mt-8">
        <div className="flex flex-col w-full">
          <h1 className="text-5xl break-keep">
            {post.titleStyle.map((part, index) => (
              <span key={index} className={part.isBold ? "font-bold" : ""}>
                {part.text}
              </span>
            ))}
          </h1>

          {post.tags && post.tags.length > 0 && (
            <div className="w-full flex gap-2 mt-[20px] mb-[30px]">
              {post.tags.map((tag) => (
                <div
                  key={tag}
                  className="w-fit rounded-full bg-[#D9D9D9] bg-opacity-40 py-0.5 px-2.5 text-[12px] text-[#4F5968]"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}

          <div className="w-full flex items-center gap-2">
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
      </article>
      <GiscusComments />
    </>
  );
}
