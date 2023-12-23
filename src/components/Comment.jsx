"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

const Comment = ({ postId }) => {
  const session = useSession();

  const [desc, setDesc] = useState("");

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postId=${postId}`,
    fetcher
  );

  const handleSubmit = async () => {
    try {
      const res = await fetch("api/comments", {
        method: "POST",
        body: JSON.stringify({ desc, postId }),
      });
      console.log(res);
      mutate();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-12">
      <h1 className="text-gray-500 mb-7 text-3xl">Comments</h1>
      {session.status === "authenticated" ? (
        <div className="flex items-center justify-between gap-7">
          <textarea
            className="w-full p-2 text-gray-500"
            placeholder="write a comment..."
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button
            onClick={handleSubmit}
            className="py-4 px-5 bg-green-500 font-bold rounded-md"
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/dashboard/login">Login to write an comment</Link>
      )}

      <div className="mt-12">
        {isLoading
          ? "Loading.."
          : data?.map((comment) => (
              <div className="mb-12" key={comment._id}>
                <div className="flex items-center gap-5">
                  <Image
                    src="/coding.png"
                    alt=""
                    height={50}
                    width={50}
                    className="object-cover rounded-full"
                    style={{ width: "50px", height: "50px" }}
                  />

                  <div className="flex flex-col gap-1 text-[#626262]">
                    <span className="text-xl font-medium">
                      {comment.user.name}
                    </span>
                    <span>{comment.createdAt}</span>
                  </div>
                </div>
                <p className="text-lg font-light">{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comment;
