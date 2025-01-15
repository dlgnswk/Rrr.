"use client";

import { useState } from "react";
import { Toaster, toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { postCategories, postTags } from "@/constants/posts";
import TinyEditor from "./editor";

interface PostForm {
  title: string;
  titleStyle: {
    bold: string;
    rest: string;
  };
  slug: string;
  description: string;
  content: any;
  category: string;
  tags: string[];
  keywords: string[];
}

export default function WritePage() {
  const [formData, setFormData] = useState<PostForm>({
    title: "",
    titleStyle: {
      bold: "",
      rest: "",
    },
    slug: "",
    description: "",
    content: "",
    category: "",
    tags: [],
    keywords: [],
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title: value,
      titleStyle: {
        bold: value.split(" ")[0] || "",
        rest: value.split(" ").slice(1).join(" "),
      },
    }));
  };

  const handleTagClick = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const onSubmit = async () => {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          publishedAt: new Date(),
        }),
      });

      if (!response.ok) {
        throw new Error("게시물 작성에 실패했습니다.");
      }

      toast.success("게시물이 작성되었습니다.");
    } catch (error) {
      toast.error("게시물 작성에 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col pt-10 mx-auto max-w-[80%] min-h-screen p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          className="text-5xl border-0 w-full font-bold"
          placeholder="제목을 입력해주세요."
          value={formData.title}
          onChange={handleTitleChange}
        />
        <Separator className="my-6 bg-black" />
        <div className="flex flex-col gap-4 mb-4">
          <input
            className="w-full"
            placeholder="슬러그를 입력해주세요."
            value={formData.slug}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, slug: e.target.value }))
            }
          />
          <input
            className="w-full"
            placeholder="설명을 입력해주세요."
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
          />
          <Select
            value={formData.category}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, category: value }))
            }
          >
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="카테고리를 선택해주세요." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>카테고리</SelectLabel>
                {postCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="flex gap-2 w-full h-8 items-center overflow-x-auto">
            {postTags.map((tag) => (
              <Badge
                key={tag}
                variant={formData.tags.includes(tag) ? "default" : "outline"}
                className="h-5 rounded-md p-2 cursor-pointer"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="h-fit mb-4 w-full">
          <TinyEditor
            initialValue={formData.content}
            onChange={(content) =>
              setFormData((prev) => ({ ...prev, content }))
            }
          />
          <Toaster />
        </div>
      </form>
      <Button className="w-[150px] ml-auto font-honerThose pt-3">
        Publish
      </Button>
    </div>
  );
}
