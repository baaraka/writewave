import connect from "@/lib/db";
import Comment from "@/model/Comment";
import { NextResponse } from "next/server";

//create comments for a specific post
export const POST = async (request) => {
  try {
    const { postId, desc } = await request.json();

    connect();

    const postObjectId = mongoose.Types.ObjectId(postId);

    const newComment = new Comment({
      postId: postObjectId,
      desc,
    });

    await newComment.save();
    return new NextResponse("comment has been created", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Error in creating post", { status: 500 });
  }
};

//get comments of a specific post
export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  try {
    connect();

    // Convert postId to mongoose.Types.ObjectId
    const postObjectId = mongoose.Types.ObjectId(postId);

    const comments = await Comment.find({ postId: postObjectId });

    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Error in getting comments", { status: 500 });
  }
};
