import Image from "next/image";
import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import Button from "./Button";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const PostList = async () => {
  const posts = await getData();
  return (
    <div className="flex flex-col gap-5 flex-5">
      <h1 className="text-3xl font-bold">Recent Posts</h1>

      {posts.map((post) => (
        <Card post={post} key={post._id} />
      ))}

      <Button />
    </div>
  );
};

export default PostList;
