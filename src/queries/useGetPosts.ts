import { useQuery } from "@tanstack/react-query";

const getPosts = async () => {
  const response = await fetch("/api/posts");
  return response.json();
};

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,
  });
};
