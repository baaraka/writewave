import Categories from "@/components/Categories";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 mt-24">
      <h1 className="italic text-4xl md:text-5xl text-center ">
        Discover creative ideas and top stories that make headlines around the
        world.
      </h1>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-4">
        <div className="relative md:flex-1  w-full h-[300px]">
          <Image
            src="/culture.png"
            alt="blog"
            fill
            className="rounded-md object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-1 gap-5">
          <h1 className="text-3xl font-bold">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="text-lg font-light text-[#626262]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quasi magni, blanditiis praesentium repellat ducimus eum. Dolore ab
            ratione suscipit delectus commodi, et, pariatur maxime voluptates
            laudantium, reiciendis omnis facere.
          </p>
          <button className="px-5 py-4 bg-white text-black font-bold rounded-md max-w-max">
            Read More
          </button>
        </div>
      </div>

      <Categories />
    </main>
  );
}
