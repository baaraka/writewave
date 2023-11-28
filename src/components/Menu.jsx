"use client";

import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

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

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {!open ? (
        <Bars3Icon className="h-7 w-7" onClick={() => setOpen(true)} />
      ) : (
        <XMarkIcon className="h-7 w-7" onClick={() => setOpen(false)} />
      )}

      {open && (
        <div className="flex flex-col items-center text-center bg-[#15202B] absolute justify-center  h-screen w-screen top-8 right-4 gap-10 text-xl ">
          {links.map((link) => (
            <Link href={link.url} key={link.id}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
