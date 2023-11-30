import Image from "next/image";
import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const PostList = () => {
  return (
    <div className="flex flex-col gap-5 flex-5">
      <h1 className="text-3xl font-bold">Recent Posts</h1>
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

export default PostList;
