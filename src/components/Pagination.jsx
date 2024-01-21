import React from "react";

const Pagination = () => {
  return (
    <div className="my-12 flex items-center justify-between">
      <button className="p-2 bg-green-500 text-xl rounded-md">Prev..</button>
      <button className="p-2 bg-green-500 text-xl rounded-md">Next</button>
    </div>
  );
};

export default Pagination;
