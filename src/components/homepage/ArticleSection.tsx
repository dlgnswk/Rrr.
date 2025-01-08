import { posts } from "@/constants/posts";
import { Separator } from "@/components/ui/separator";
import Arrow from "./arrow";

interface ArticleSectionProps {
  post: (typeof posts)[number];
  index: number;
}

export default function ArticleSection({ post, index }: ArticleSectionProps) {
  return (
    <section className="flex flex-col w-full gap-3 cursor-pointer">
      <div className="flex justify-between items-end gap-8">
        <h1 className="text-5xl break-keep">
          <span className="font-bold">{post.titleStyle.bold}</span>
          {post.titleStyle.rest}
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
