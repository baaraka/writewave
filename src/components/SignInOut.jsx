"use client";

import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const SignInOut = () => {
  const session = useSession();

  return (
    <div>
      {session.status === "authenticated" ? (
        <button onClick={signOut}>Logout</button>
      ) : (
        <Link href="/dashboard/login">
          <button className="hidden md:block p-4 w-[150px] text-xl bg-black rounded-full">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default SignInOut;
