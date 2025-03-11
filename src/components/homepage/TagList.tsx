"use client";

import {
  TagLineCircle,
  TagLineRectangle,
  TagSolidCircle,
  TagSolidRectangle,
} from "./Tags";
import { useState, useEffect } from "react";

// 가능한 태그 컴포넌트들을 배열로 정의
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
    // 클라이언트 사이드에서만 랜덤 값을 생성
    setComponentIndexes(
      tags.map(() => Math.floor(Math.random() * TAG_COMPONENTS.length))
    );
    setMounted(true);
  }, [tags]);

  if (!mounted) {
    // 초기 서버 렌더링시에는 첫 번째 컴포넌트로 통일
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
