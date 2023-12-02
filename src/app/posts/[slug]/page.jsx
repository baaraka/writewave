import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import React from "react";

const Post = () => {
  return (
    <div className="my-12 flex flex-col gap-5 flex-5">
      <h1 className="text-3xl font-bold">{"Coding"} Posts</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Pagination />
    </div>
  );
};

export default Post;
