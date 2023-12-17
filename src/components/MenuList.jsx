import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/posts",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const MenuList = async () => {
  return (
    <div className="hidden md:flex items-center flex-wrap gap-5 p-4 shadow-lg">
      {links.map((link) => (
        <Link
          href={link.url}
          key={link.id}
          className="text-lg w-[150px] hover:underline decoration-green-400 text-center decoration-2 active:underline underline-offset-8 rounded-full hover:font-bold capitalize hover:scale-110 transition-transform duration-200 ease-out"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
