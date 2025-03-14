import { Post } from "@/types/posts";
import Arrow from "./arrow";

interface ArticleSectionProps {
  post: Post;
  index: number;
  posts: Post[];
}

export default function ArticleSection({
  post,
  index,
  posts,
}: ArticleSectionProps) {
  return (
    <section className="flex flex-col w-full gap-3 cursor-pointer">
      <div className="flex justify-between items-end gap-8">
        <h1 className="text-5xl break-keep leading-[3.5rem]">
          {post.titleStyle.map((part, index) => (
            <span key={index} className={part.isBold ? "font-bold" : ""}>
              {part.text}
            </span>
          ))}
        </h1>
        <div className="text-foreground">
          <Arrow />
        </div>
      </div>
      <p className="text-2xl font-light">{post.description}</p>
      {index !== posts.length - 1 && (
        <div className="shrink-0 w-full h-[1px] my-6 bg-black" />
      )}
    </section>
  );
}
