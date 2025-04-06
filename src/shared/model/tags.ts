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
  browser: TagSolidCircle,
  CSS: TagLineRectangle,
  "Design Pattern": TagSolidRectangle,
  FSD: TagLineCircle,
  javascript: TagLineRectangle,
  MSW: TagSolidRectangle,
  "Next.js": TagLineRectangle,
  React: TagSolidCircle,
  "React Router": TagLineRectangle,
  Storybook: TagSolidCircle,
};

export const getTagComponent = (tag: string) => {
  return TAG_COMPONENT_MAP[tag] || DEFAULT_TAG_COMPONENT;
};
