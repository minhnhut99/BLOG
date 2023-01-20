import React from "react";

const SideNav = () => {
  return (
    <div className="w-1/5">
      <ul className="flex flex-col items-start justify-start pl-12 pt-4">
        <li>All posts</li>
        <li>All Users</li>
        <li>Categories</li>
        <li>Tags</li>
      </ul>
      <div className="bg-slate-200 w-28 py-1 text-center rounded-sm m-auto">
        <button className="text-sm outline-none border-none cursor-pointer">
          Add new post
        </button>
      </div>
    </div>
  );
};

export default SideNav;
