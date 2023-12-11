import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Posts = async () => {
  const data = await getData();
  return (
    <div className="my-12 flex flex-col gap-5 flex-5">
      <h1 className="text-3xl font-bold">All Posts</h1>

      {data.map((post) => (
        <Card post={post} key={post._id} />
      ))}

      <Pagination />
    </div>
  );
};

export default Posts;
