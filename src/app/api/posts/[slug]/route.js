import connect from "@/lib/db";
import Post from "@/model/Post";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    await connect();

    const post = await Post.findById(slug);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Database Error", { status: 500 });
  }
};
