import Link from "next/link";
import React from "react";
import MenuList from "./MenuList";
import Menu from "./Menu";
import Search from "./Search";
import SignInOut from "./signInOut";

const Navbar = () => {
  return (
    <nav className="flex flex-col shadow-xl  p-4 gap-10">
      <div className="flex items-center justify-between shadow-xl pb-7">
        <Link href="/" className="text-3xl md:text-5xl font-bold">
          WriteWave
        </Link>
        <button className="hidden md:block p-4 w-[150px] text-xl bg-green-500 rounded-full">
          Support Me
        </button>
        <div className="hidden md:block">
          <SignInOut />
        </div>

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
