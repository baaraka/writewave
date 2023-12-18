import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ post }) => {
  return (
    <div className="flex flex-col md:flex-row gap-12">
      {post.image && (
        <div
          className="relative h-[300px] w-full md:flex-1"
          style={{ height: "300px", width: "100%" }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-sm"
          />
        </div>
      )}
      <div className="md:flex-1 flex flex-col gap-7">
        <p>
          <span className="text-gray-500">
            {new Date(post.createdAt).toDateString()}
          </span>{" "}
          -{" "}
          <span className="text-green-500 font-medium uppercase">
            {post.category}
          </span>
        </p>
        <Link href={`/single/${post._id}`} key={post._id}>
          <h1 className="text-2xl font-medium">{post.title}</h1>
        </Link>
        <p
          className="text-lg text-[#626262] font-light"
          style={{ whiteSpace: "pre-line" }}
        >
          {post.desc.slice(0, 180)}...
        </p>
        <Link href={`/single/${post._id}`} key={post._id}>
          <button className="border-b border-green-500 max-w-max hover:scale-110 transition-transform duration-200 ease-in-out">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
