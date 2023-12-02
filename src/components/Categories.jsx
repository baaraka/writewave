import React from "react";
import Link from "next/link";
import Image from "next/image";

// const links = [
//   {
//     id: 1,
//     title: "Coding",
//     url: "/coding",
//     image: "/coding.png",
//     bg: "#FFD700",
//   },
//   {
//     id: 2,
//     title: "Fashion",
//     url: "/fashion",
//     image: "/fashion.png",
//     bg: "#87CEEB",
//   },
//   {
//     id: 3,
//     title: "Culture",
//     url: "/culture",
//     image: "/culture.png",
//     bg: "#83781b",
//   },
//   {
//     id: 4,
//     title: "Travel",
//     url: "/travel",
//     image: "/travel.png",
//     bg: "#A3A18F",
//   },
//   {
//     id: 5,
//     title: "Style",
//     url: "/style",
//     image: "/style.png",
//     bg: "#A8E575",
//   },

//   {
//     id: 6,
//     title: "Food",
//     url: "/food",
//     image: "/food.png",
//     bg: "#E5DC8D",
//   },
// ];

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Categories = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-5 my-8">
      <h1 className="text-3xl font-bold">Popular Categories</h1>
      <div className="flex flex-wrap items-center gap-5">
        {data.map((link) => (
          <Link
            href={link.url}
            key={link._id}
            style={{ backgroundColor: link.bg }}
            className="flex gap-2 items-center justify-center w-[150px] sm:w-[180px] md:w-[230px] lg:w-[300px] xl:w-[170px] p-2 rounded-md"
          >
            <Image
              src={link.image}
              alt={link.title}
              width={30}
              height={30}
              className="rounded-full object-cover"
              style={{ width: "30px", height: "30px" }}
            />
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
