import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <div className="my-12">
      <Link href="/posts" className="flex items-center justify-between">
        <h3 className="text-xl font-medium hover:underline decoration-green-500 decoration-2 underline-offset-8 rounded-full p-4 hover:font-bold capitalize hover:scale-110 transition-transform duration-200 ease-in-out">
          Click Here To View All Posts
        </h3>
        <ChevronRightIcon className="w-8 h-8" />
      </Link>
    </div>
  );
};

export default Button;
