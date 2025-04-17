import {
  TagLineCircle,
  TagLineRectangle,
  TagSolidCircle,
  TagSolidRectangle,
} from "@/shared/ui/tags/Tags";

export const DEFAULT_TAG_COMPONENT = TagLineRectangle;

export const TAG_COMPONENT_MAP: Record<
  string,
  React.ComponentType<{ tag: string }>
> = {
  algorithm: TagLineRectangle,
  browser: TagSolidCircle,
  CSS: TagSolidRectangle,
  "Design Pattern": TagLineCircle,
  FSD: TagSolidRectangle,
  javascript: TagSolidCircle,
  MSW: TagSolidRectangle,
  "Next.js": TagLineRectangle,
  python: TagSolidCircle,
  React: TagSolidRectangle,
  "React Router": TagLineCircle,
  Storybook: TagLineCircle,
};

export const getTagComponent = (tag: string) => {
  return TAG_COMPONENT_MAP[tag] || DEFAULT_TAG_COMPONENT;
};
