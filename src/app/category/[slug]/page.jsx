import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import React from "react";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/category/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Post = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className="my-12 flex flex-col gap-5 flex-5">
      <h1 className="text-3xl font-bold">{`${slug} Posts`}</h1>

      {data.map((post) => (
        <Card key={post._id} post={post} />
      ))}

      <Pagination />
    </div>
  );
};

export default Post;
