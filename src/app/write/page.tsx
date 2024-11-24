"use client";

import { PlateEditor } from "@/components/editor/plate-editor";
import { SettingsProvider } from "@/components/editor/settings";
import { Toaster } from "sonner";

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

export default function WritePage() {
  const onSubmit = () => {};

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
        />
        <Separator className="my-6 bg-black" />
        <div className="flex flex-col gap-4 mb-4">
          <input className="w-full" placeholder="슬러그를 입력해주세요." />
          <input className="w-full" placeholder="설명을 입력해주세요." />
          <Select>
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
                variant="outline"
                className="h-5 rounded-md p-2 cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="h-fit mb-4 w-full" data-registry="plate">
          <SettingsProvider>
            <PlateEditor />
          </SettingsProvider>
          <Toaster />
        </div>
      </form>
      <Button className="w-[150px] ml-auto font-honerThose pt-3">
        Publish
      </Button>
    </div>
  );
}
