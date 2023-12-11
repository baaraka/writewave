import connect from "@/lib/db";
import Post from "@/model/Post";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const { slug } = request.query;

  try {
    await connect();

    const posts = await Post.find({ slug });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Data base error", { status: 500 });
  }
};
