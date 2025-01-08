import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: {
    slug: string;
  };
};

export async function GET(request: NextRequest, props: Props) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: props.params.slug,
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
