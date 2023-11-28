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

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      <Link href="/" className="text-3xl md:text-5xl font-bold">
        WriteWave
      </Link>
      <div className="flex items-center gap-5">
        <div className="hidden lg:flex items-center gap-5">
          {links.map((link) => (
            <Link href={link.url} key={link.id} className="text-xl">
              {link.title}
            </Link>
          ))}
        </div>
        <div className="lg:hidden">
          <Menu />
        </div>

        <button className="hidden md:flex text-xl">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
