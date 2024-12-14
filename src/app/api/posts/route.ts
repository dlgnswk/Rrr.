import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        publishedAt: "desc",
      },
      select: {
        id: true,
        slug: true,
        title: true,
        titleStyle: true,
        description: true,
        category: true,
        tags: true,
        publishedAt: true,
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
