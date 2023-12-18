"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/lib/firebase";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

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

    try {
     const res =  await fetch("api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          image: media,
          desc,
          category,
          username: session.data.user.name,
        }),
      });

      console.log(res)

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
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="py-2 px-4 bg-transparent border-2 border-gray-500 outline-none"
            type="file"
            id="image"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <textarea
            className="py-2 px-4 bg-transparent border-2 border-gray-500 outline-none"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="py-2 px-4 bg-transparent border-2 border-gray-500 outline-none"
          >
            <option value="REACT">REACT</option>
            <option value="NODE">NODE</option>
            <option value="EXPRESS">EXPRESS</option>
            <option value="MONGODB">MONGODB</option>
          </select>

          <button className="py-2 px-4 bg-green-500">Send Post</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
