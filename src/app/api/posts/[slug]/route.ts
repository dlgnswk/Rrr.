import { prisma } from "@/lib/prisma";

interface Context {
  params: {
    slug: string;
  };
}

export async function GET(
  request: Request,
  { params }: Context
): Promise<Response> {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: params.slug,
      },
    });

    if (!post) {
      return new Response(JSON.stringify({ error: "Post not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(post), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch post" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
