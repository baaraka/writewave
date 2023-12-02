import React from "react";
import MenuPost from "./MenuPost";
import MenuCategory from "./MenuCategory";
import MenuEditor from "./MenuEditor";

const MenuItem = () => {
  return (
    <div className="hidden md:block flex-2">
      <MenuPost />
      <MenuCategory />
      <MenuEditor />
    </div>
  );
};

export default MenuItem;
