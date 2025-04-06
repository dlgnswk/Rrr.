import { Post } from "@/entities/post/model/types";

export const getTags = (posts: Post[]) => {
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagSet.add(tag);
    });
  });

  return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
};
