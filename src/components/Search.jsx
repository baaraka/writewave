"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
  const [input, setInput] = useState();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center justify-between"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search any thing"
        className="w-full h-10 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-green-500 disabled:text-gray-500 p-1 rounded-sm"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
