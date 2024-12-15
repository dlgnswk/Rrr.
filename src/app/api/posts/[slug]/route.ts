import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

type Props = {
  params: { slug: string };
};

export async function GET(request: NextRequest, props: Props) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: props.params.slug,
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
