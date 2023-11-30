import Link from "next/link";
import React from "react";

const MenuCategory = () => {
  return (
    <div className="mb-12">
      <h2 className="text-gray-500 font-normal text-[16px]">
        Discover By Topic
      </h2>
      <h1 className="text-[28px]">Categories</h1>
      <div className="flex mt-8 w-full h-full justify-center gap-3 flex-wrap">
        <Link
          href="/blog?cat=style"
          className="text-sm flex items-center justify-center gap-2 capitalize w-full sm:w-[45%] md:w-[30%] h-12 bg-[#606c38] rounded-lg"
        >
          style
        </Link>
        <Link
          href="/blog?cat=culture"
          className="text-sm flex items-center justify-center rounded-lg gap-2 capitalize bg-[#9a8c98] w-full md:w-[30%] sm:w-[45%] h-12"
        >
          Culture
        </Link>
        <Link
          href="/blog?cat=travel"
          className="text-sm flex items-center justify-center rounded-lg gap-2 capitalize w-full md:w-[30%] sm:w-[45%] h-12 bg-[#772f1a] "
        >
          Travel
        </Link>
        <Link
          href="/blog?cat=coding"
          className="text-sm flex items-center justify-center rounded-lg gap-2 capitalize w-full md:w-[30%] h-12 sm:w-[45%] bg-[#6a4c93]"
        >
          Coding
        </Link>
        <Link
          href="/blog?cat=food"
          className="text-sm flex items-center justify-center rounded-lg gap-2 capitalize w-full md:w-[30%] h-12 sm:w-[45%] bg-[#585123]"
        >
          Food
        </Link>
        <Link
          href="/blog?cat=fashion"
          className="text-sm flex items-center justify-center rounded-lg gap-2 capitalize w-full md:w-[30%] h-12 sm:w-[45%] bg-[#8d99ae]"
        >
          Fashion
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
