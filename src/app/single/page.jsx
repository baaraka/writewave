import Comment from "@/components/Comment";
import MenuItem from "@/components/MenuItem";
import Image from "next/image";
import React from "react";

const Single = () => {
  return (
    <div className="my-12 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-7 md:flex-1">
          <h1 className="text-3xl font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
          </h1>
          <div className="flex items-center gap-5">
            <Image
              src="/culture.png"
              alt="single"
              width={50}
              height={50}
              style={{ width: "50px", height: "50px" }}
              className="object-cover rounded-full"
            />
            <div>
              <h4 className="text-lg font-light">Baraka Doe</h4>
              <span className="text-sm font-light">21-03-2023</span>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[300px] md:flex-1">
          <Image src="/culture.png" alt="single" fill />
        </div>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-7 flex-8">
          <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officiis
            nihil vitae possimus veniam iusto fuga sint maiores numquam
            delectus. Nam, aperiam obcaecati. Aliquid, at aspernatur corrupti
            dignissimos impedit cupiditate! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Modi nam consequatur impedit
            repellendus alias harum error velit aperiam voluptatibus accusamus
            aut sit, culpa excepturi rem enim voluptatem incidunt! Repellat,
            aliquam.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis et
            provident beatae eligendi doloremque, soluta quisquam quasi quo
            optio neque, error vitae est, sequi ullam ab itaque recusandae quam{" "}
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel
            error velit! Corporis earum architecto, totam possimus consequatur
            dicta tempore aspernatur officiis culpa similique laborum quia
            fugiat perspiciatis nemo facilis?
          </p>

          <Comment />
        </div>

        <MenuItem />
      </div>
    </div>
  );
};

export default Single;
