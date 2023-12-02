import connect from "@/lib/db";
import Post from "@/model/Post";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse("Invalid json", { status: 500 });
  }
};

export const GET = async (request) => {
  try {
    await connect();

    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error("Error:", error);

    return new NextResponse("Invalid json", { status: 500 });
  }
};
