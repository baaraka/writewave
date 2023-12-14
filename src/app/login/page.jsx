"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const { data, status } = useSession();

  console.log(data, status);

  const router = useRouter();

  //   if (status === "loading") {
  //     return <p>Loading...</p>;
  //   }

  //   if (status === "authenticated") {
  //     router.push("/");
  //   }

  return (
    <div className="flex flex-col gap-7 py-12 items-center justify-center">
      <h1 className="text-3xl font-bold">Login in with your google account.</h1>
      <button
        className="p-5 rounded-md font-bold bg-[#ff5555]"
        onClick={() => signIn("google")}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
