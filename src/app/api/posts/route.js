import connect from "@/lib/db";
import Post from "@/model/Post";
import { NextResponse } from "next/server";

//create posts
export const POST = async (request) => {
  const body = await request.json();

  const trimmedBody = {
    title: body.title.trim(),
    desc: body.desc.trim(),
    category: body.category.trim(),
    image: body.image.trim(),
    username: body.username,
    // Add more fields if necessary
  };

  const newPost = new Post(trimmedBody);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Invalid json", { status: 500 });
  }
};

// get all post
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

// export const GET = async (request) => {
//   try {
//     await connect();

//     const category = request.query.category || null;

//     let posts;
//     if (category) {
//       posts = await Post.find({ category: category });
//     } else {
//       posts = await Post.find();
//     }

//     return new NextResponse(JSON.stringify(posts), { status: 200 });
//   } catch (error) {
//     console.error("Error:", error);

//     return new NextResponse("Invalid json", { status: 500 });
//   }
// };
