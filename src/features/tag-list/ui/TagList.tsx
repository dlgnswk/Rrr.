"use client";

import { getTagComponent } from "@/shared/model/tags";

export default function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex gap-1 w-[80%] justify-center flex-wrap mb-16 mx-auto">
      {tags.map((tag: string) => {
        const TagComponent = getTagComponent(tag);
        return <TagComponent key={tag} tag={tag} />;
      })}
    </div>
  );
}
