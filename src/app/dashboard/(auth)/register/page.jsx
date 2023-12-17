"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 200 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col gap-7 items-center justify-center py-12">
      <h1 className="text-3xl font-bold">Sign Up here.</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <input
          className="py-2 px-4 bg-transparent border-2 border-gray-500 outline-none"
          type="text"
          placeholder="username"
          required
        />
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
        <button className="py-2 px-4 bg-green-500">Register</button>
        {error && "something went wrong"}
        <Link
          className="text-md font-medium hover:underline decoration-green-500 decoration-2 underline-offset-8 rounded-full p-4 hover:font-bold capitalize hover:scale-110 transition-transform duration-200 ease-in-out"
          href="/dashboard/login"
        >
          Login with an existing account
        </Link>
      </form>
    </div>
  );
};

export default Register;
