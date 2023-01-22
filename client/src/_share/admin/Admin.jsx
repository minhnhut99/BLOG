import React from "react";
import ContentLeft from "./content_left/ContentLeft";
import ContentRight from "./content_right/ContentRight";
import SideNav from "./side_nav/SideNav";
const Admin = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <header className="h-14 bg-slate-100 flex justify-end items-center">
        <div className="w-12 h-12">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1674167526280-8ee04e4a473c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />
        </div>
      </header>
      <div className="flex w-full h-full">
        {/* side nav */}
        <SideNav />
        <div className="w-4/5 border p-6 flex">
          {/* content left  */}
          <ContentLeft />
          {/* content right  */}
          <ContentRight />
        </div>
      </div>
    </div>
  );
};

export default Admin;
