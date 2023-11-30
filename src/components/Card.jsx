import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="relative h-[300px] w-full md:flex-1">
        <Image
          src="/culture.png"
          alt="culture"
          fill
          className="object-cover rounded-sm"
        />
      </div>
      <div className="md:flex-1 flex flex-col gap-7">
        <p>
          <span className="text-gray-500">23-12-2023</span> -{" "}
          <span className="text-green-500 font-medium uppercase">coding</span>
        </p>
        <h1 className="text-2xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-lg text-[#626262] font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eaque
          perspiciatis distinctio iusto dicta. Eius qui ipsam labore
          accusantium, ab, ex sed id quos exercitationem officiis minus,
          voluptatem repudiandae illo.
        </p>
        <button className="border-b border-green-500 max-w-max">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
