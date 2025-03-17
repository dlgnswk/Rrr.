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
  FSD: TagSolidCircle,
  "Design Pattern": TagLineRectangle,
  MSW: TagSolidRectangle,
  "Next.js": TagSolidCircle,
  Storybook: TagLineRectangle,
  React: TagLineCircle,
  "React Router": TagLineRectangle,
  "React 19": TagSolidCircle,
  useTransition: TagSolidCircle,
  "Vaniila Extract": TagSolidCircle,
  CSS: TagSolidRectangle,
  Story: TagSolidCircle,
};

export const getTagComponent = (tag: string) => {
  return TAG_COMPONENT_MAP[tag] || DEFAULT_TAG_COMPONENT;
};
