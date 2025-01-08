import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { slug: string } }) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: params.slug,
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
