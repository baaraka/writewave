"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  console.log(data);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handlePost = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const image = e.target[1].value;
    const desc = e.target[2].value;
    const category = e.target[3].value;

    try {
      await fetch("api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          image,
          desc,
          category,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (slug) => {
    try {
      await fetch(`/api/posts/${slug}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="flex flex-col md:flex-row justify-between py-12 gap-12">
        <div className="flex flex-col gap-7">
          {isLoading
            ? "Loading..."
            : data?.map((post) => (
                <div className="flex items-center gap-5" key={post._id}>
                  <div
                    className="relative h-[100px] w-[200px]"
                    styles={{ width: "200px", height: "100px" }}
                  >
                    <Image
                      src={post.image}
                      fill
                      alt={post.title}
                      className="object-cover"
                    />
                  </div>
                  <h2>{post.title}</h2>
                  <span
                    className="text-red-500 text-xl cursor-pointer"
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>

        <form onSubmit={handlePost} className="flex flex-col gap-5">
          <h1 className="text-3xl">Add New Post...</h1>
          <input
            className="py-2 px-4 bg-transparent border-2 border-gray-500 outline-none"
            type="text"
            placeholder="Title"
          />
          <input
            className="py-2 px-4 bg-transparent border-2 border-gray-500 outline-none"
            type="text"
            placeholder="Image"
          />
          <textarea
            className="py-2 px-4 bg-transparent border-2 border-gray-500 outline-none"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
          ></textarea>
          <select className="py-2 px-4 bg-transparent border-2 border-gray-500 outline-none">
            <option>REACT</option>
            <option>NODE</option>
            <option>EXPRESS</option>
            <option>MONGODB</option>
          </select>

          <button className="py-2 px-4 bg-green-500">Send Post</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
