"use client";

import { useGetPosts } from "@/queries/useGetPosts";
import HomepageArticle from "./HomepageArticle";

export default function PostsList() {
  const { data: posts, isLoading, error } = useGetPosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return <HomepageArticle posts={posts} />;
}
