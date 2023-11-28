import React from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Coding",
    url: "/coding",
    image: "/coding.png",
    bg: "#FFD700",
  },
  {
    id: 2,
    title: "Fashion",
    url: "/fashion",
    image: "/fashion.png",
    bg: "#87CEEB",
  },
  {
    id: 3,
    title: "Culture",
    url: "/culture",
    image: "/culture.png",
    bg: "#83781b",
  },
  {
    id: 4,
    title: "Travel",
    url: "/travel",
    image: "/travel.png",
    bg: "#A3A18F",
  },
  {
    id: 5,
    title: "Style",
    url: "/style",
    image: "/style.png",
    bg: "#A8E575",
  },

  {
    id: 6,
    title: "Food",
    url: "/food",
    image: "/food.png",
    bg: "#E5DC8D",
  },
];

const Categories = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Popular Categories</h1>
      <div className="flex flex-wrap items-center gap-5">
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            style={{ backgroundColor: link.bg }}
            className="flex gap-2 items-center justify-center w-[130px] sm:w-[180px] md:w-[230px] lg:w-[300px] xl:w-[170px] p-2 rounded-md text-xl"
          >
            <Image
              src={link.image}
              alt={link.title}
              width={40}
              height={40}
              className="rounded-full object-cover"
              style={{ width: "40px", height: "40px" }}
            />
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
