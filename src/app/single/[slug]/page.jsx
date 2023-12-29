import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

const Single = async ({ params }) => {
  const post = await getData(params.slug);
  return (
    <div className="my-12 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-7 md:flex-1">
          <h1 className="text-3xl font-medium">{post.title}</h1>
          <div className="flex items-center gap-5">
            <Image
              src="/coding.png"
              alt="coding"
              width={50}
              height={50}
              style={{ width: "50px", height: "50px" }}
              className="object-cover rounded-full"
            />
            <div>
              <h4 className="text-lg font-light">{post.username}</h4>
              <span className="text-sm font-light">
                {new Date(post.createdAt).toDateString()}
              </span>
            </div>
          </div>
        </div>
        {post.image && (
          <div className="relative w-full h-[300px] md:flex-1">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-7 flex-8">
          <p
            className="text-lg text-gray-400"
            style={{ whiteSpace: "pre-line" }}
          >
            {post.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Single;
