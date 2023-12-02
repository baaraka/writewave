import connect from "@/lib/db";
import Category from "@/model/Category";
import { NextResponse } from "next/server";

//create categories
export const POST = async (request) => {
  const body = await request.json();

  const newCat = new Category(body);

  try {
    await connect();
    await newCat.save();

    return new NextResponse("Category has been created", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

//get all categories
export const GET = async (request) => {
  try {
    await connect();

    const categories = await Category.find();

    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new NextResponse("Data base error", { status: 500 });
  }
};
