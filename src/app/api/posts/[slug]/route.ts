import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: {
    slug: string;
  };
}

export async function GET(_: Request, context: RouteParams) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: context.params.slug,
      },
    });

    if (!post) {
      return Response.json({ error: "Post not found" }, { status: 404 });
    }

    return Response.json(post);
  } catch (error) {
    return Response.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}
