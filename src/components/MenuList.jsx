import Link from "next/link";
import React from "react";
import Menu from "./Menu";

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
    url: "/blog",
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

const MenuList = () => {
  return (
    <div className="hidden md:flex items-center justify-between p-4 bg-gray-800 shadow-lg">
      {links.map((link) => (
        <Link
          href={link.url}
          key={link.id}
          className="text-lg hover:underline decoration-green-400 text-center decoration-2 active:underline underline-offset-8 rounded-full hover:font-bold capitalize hover:scale-110 transition-transform duration-200 ease-out"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
