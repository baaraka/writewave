import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const MenuList = async () => {
  const data = await getData();
  return (
    <div className="hidden md:flex items-center flex-wrap gap-5 p-4 shadow-lg">
      {data.map((link) => (
        <Link
          href={link.url}
          key={link._id}
          className="text-lg w-[150px] hover:underline decoration-green-400 text-center decoration-2 active:underline underline-offset-8 rounded-full hover:font-bold capitalize hover:scale-110 transition-transform duration-200 ease-out"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
