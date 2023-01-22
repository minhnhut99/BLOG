import React from "react";

const SideNav = () => {
  return (
    <div className="w-1/5">
      <ul className="flex flex-col items-start justify-start pl-12 pt-4">
        <li className="cursor-pointer">All posts</li>
        <li className="cursor-pointer">All Users</li>
        <li className="cursor-pointer">Categories</li>
        <li className="cursor-pointer">Tags</li>
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
