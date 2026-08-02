import type { NextRequest } from "next/server";
import { searchPosts } from "@/lib/blog/db";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");
  const category = searchParams.get("category");

  const posts = await searchPosts(q, category);

  return Response.json({ posts });
}
