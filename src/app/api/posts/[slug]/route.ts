import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type Context = Promise<{
  params: { slug: string };
}>;

export async function GET(
  _request: NextRequest,
  context: Context
): Promise<NextResponse> {
  try {
    const { params } = await context;
    const post = await prisma.post.findUnique({
      where: {
        slug: params.slug,
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
