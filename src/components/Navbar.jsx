import Link from "next/link";
import React from "react";
import MenuList from "./MenuList";
import Menu from "./Menu";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="flex flex-col bg-gray-800 p-4 gap-10">
      <div className="flex items-center justify-between shadow-xl pb-5">
        <Link href="/" className="text-3xl md:text-5xl font-bold">
          WriteWave
        </Link>
        <button className="hidden md:block p-4 w-[150px] text-xl bg-green-500 rounded-full">
          Support Me
        </button>
        <button className="hidden md:block p-4 w-[150px] text-xl bg-black rounded-full">
          Login
        </button>
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
      <MenuList />
      <Search />
    </nav>
  );
};

export default Navbar;
