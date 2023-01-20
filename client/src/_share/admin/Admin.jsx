import React from "react";
import ContentLeft from "./content_left/ContentLeft";
import ContentRight from "./content_right/ContentRight";
import SideNav from "./side_nav/SideNav";
const Admin = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="py-4">
        <ul className="flex flex-center justify-end">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
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
