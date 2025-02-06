import { Post } from "@/types/posts";
import { Separator } from "@/components/ui/separator";
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
        <h1 className="text-5xl break-keep">
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
      {index !== posts.length - 1 && <Separator className="my-6 bg-black" />}
    </section>
  );
}
