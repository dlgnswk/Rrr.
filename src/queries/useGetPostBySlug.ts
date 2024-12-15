import { useQuery } from "@tanstack/react-query";

const getPostBySlug = async (slug: string) => {
  const response = await fetch(`/api/posts/${slug}`);
  return response.json();
};

export const useGetPostBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["getPostBySlug", slug],
    queryFn: () => getPostBySlug(slug),
  });
};
