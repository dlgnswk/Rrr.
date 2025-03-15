"use client";

import { useState, useEffect } from "react";
import {
  TagLineCircle,
  TagLineRectangle,
  TagSolidCircle,
  TagSolidRectangle,
} from "@/shared/ui/tags/Tags";

const TAG_COMPONENTS = [
  TagLineCircle,
  TagLineRectangle,
  TagSolidCircle,
  TagSolidRectangle,
] as const;

export default function TagList({ tags }: { tags: string[] }) {
  const [mounted, setMounted] = useState(false);
  const [componentIndexes, setComponentIndexes] = useState<number[]>([]);

  useEffect(() => {
    setComponentIndexes(
      tags.map(() => Math.floor(Math.random() * TAG_COMPONENTS.length))
    );
    setMounted(true);
  }, [tags]);

  if (!mounted) {
    return (
      <div className="flex gap-1 w-[80%] justify-center flex-wrap mb-16 mx-auto">
        {tags.map((tag) => (
          <TagLineRectangle key={tag} tag={tag} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-1 w-[80%] justify-center flex-wrap mb-16 mx-auto">
      {tags.map((tag, index) => {
        const TagComponent = TAG_COMPONENTS[componentIndexes[index]];
        return <TagComponent key={tag} tag={tag} />;
      })}
    </div>
  );
}
