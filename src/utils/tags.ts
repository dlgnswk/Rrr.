import { Post } from "@/types/posts";

export const getTags = (posts: Post[]) => {
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagSet.add(tag);
    });
  });

  return Array.from(tagSet);
};
