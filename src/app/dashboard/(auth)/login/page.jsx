"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const session = useSession();

  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/");
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className="flex flex-col gap-7 py-12 items-center justify-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Sign In here.</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            className="py-2 px-4 bg-transparent border-2 border-gray-500 outline-none"
            type="email"
            placeholder="email"
            required
          />
          <input
            className="py-2 px-4 bg-transparent border-2 border-gray-500 outline-none"
            type="password"
            placeholder="password"
            required
          />
          <button className="py-2 px-4 bg-green-500">Login</button>
        </form>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="tex-2xl font-bold">Or Login with your google account</h1>
        <button
          className="p-5 rounded-md font-bold bg-[#ff5555]"
          onClick={() => signIn("google")}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
