import Image from "next/image";
import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import Button from "./Button";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

const PostList = async () => {
  const posts = await getData();
  return (
    <div className="flex flex-col gap-7 flex-8">
      <h1 className="text-3xl font-bold">Recent Posts</h1>

      {posts.map((post) => (
        <Card post={post} key={post._id} />
      ))}

      <Button />
    </div>
  );
};

export default PostList;
