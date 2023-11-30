import Link from "next/link";
import React from "react";

const MenuPost = () => {
  return (
    <div className="mb-12">
      <h2 className="text-gray-500 font-normal text-[16px]">{"What's hot"}</h2>
      <h1 className="text-[28px]">Most Popular</h1>
      <div className="flex flex-col gap-9">
        <Link href="/" className="flex items-center gap-5">
          <div className="flex-4 flex flex-col gap-1">
            <span className="py-1 px-2 rounded-lg text-sm text-white bg-[#e76f51] max-w-max">
              Travel
            </span>
            <h3 className="text-lg font-medium text-[#626262]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-sm">
              <span>Barack Doe</span>
              <span className="text-gray-500"> - 12.11.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex items-center gap-5">
          <div className="flex-4 flex flex-col gap-1">
            <span className="py-1 px-2 rounded-lg text-sm text-white bg-[#a2d2ff] max-w-max">
              Culture
            </span>
            <h3 className="text-lg font-medium text-[#626262]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-sm">
              <span>Barack Doe</span>
              <span className="text-gray-500"> - 12.11.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex items-center gap-5">
          <div className="flex-4 flex flex-col gap-1">
            <span className="py-1 px-2 rounded-lg text-sm text-white bg-[#e9c46a] max-w-max">
              Music
            </span>
            <h3 className="text-lg font-medium text-[#626262]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-sm">
              <span>Barack Doe</span>
              <span className="text-gray-500"> - 12.11.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex items-center gap-5">
          <div className="flex-4 flex flex-col gap-1">
            <span className="py-1 px-2 rounded-lg text-sm text-white bg-[#2a9d8f] max-w-max">
              Fashion
            </span>
            <h3 className="text-lg font-medium text-[#626262]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-sm">
              <span>Barack Doe</span>
              <span className="text-gray-500"> - 12.11.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuPost;
