"use client";
import { HtmlReactPlugin } from "@udecode/plate-html/react";
import { useGetPostBySlug } from "@/queries/useGetPostBySlug";
import { Separator } from "@/components/ui/separator";
import { createPlateEditor } from "@udecode/plate-common/react";
import { useEffect, useState } from "react";
import Profile from "@/components/posts/[slug]/profile";

const editor = createPlateEditor({
  plugins: [HtmlReactPlugin],
});

export default function PostContent({ slug }: { slug: string }) {
  const { data: post, isLoading, error } = useGetPostBySlug(slug);
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (!post?.content) {
      setHtml("");
      return;
    }

    Promise.resolve().then(() => {
      try {
        const serialized = editor.api.htmlReact.serialize({
          nodes: post.content,
        });
        setHtml(serialized);
      } catch (e) {
        console.error("Serialization error:", e);
        setHtml("");
      }
    });
  }, [post?.content]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading post</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <article className="flex flex-col w-full gap-3">
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
      <div
        className="prose prose-slate prose-h1:text-4xl prose-h2:text-3xl max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
