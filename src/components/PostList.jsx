import React from "react";
import Card from "./Card";
import Button from "./Button";
import { notFound } from "next/navigation";

const getData = async (category) => {
  const url = category
    ? `http://localhost:3000/api/posts?category=${encodeURIComponent(category)}`
    : "http://localhost:3000/api/posts";

  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.error("Error fetching data:", res.status);
    return notFound();
  }
  return res.json();
};

const PostList = async ({ params }) => {
  const posts = await getData(params.category);
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
