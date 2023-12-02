import Image from "next/image";
import React from "react";

const Card = ({ post, key }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12" key={key}>
      {post.image && (
        <div className="relative h-[300px] w-full md:flex-1">
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
            {post.createdAt.substring(0, 10)}
          </span>{" "}
          -{" "}
          <span className="text-green-500 font-medium uppercase">
            {post.category}
          </span>
        </p>
        <h1 className="text-2xl font-medium">{post.title}</h1>
        <p className="text-lg text-[#626262] font-light">{post.desc}</p>
        <button className="border-b border-green-500 max-w-max">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
