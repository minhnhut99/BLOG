import React from "react";

const TitleSubMenu = ({ title }) => {
  return (
    <div className="relative">
      <h2 className="text-5xl lg:text-4xl md:text-3xl my-10 py-1 font-bold text-title">
        {title}
      </h2>
      <div className="w-14 h-1 rounded absolute bg-bd_color_primary top-full"></div>
    </div>
  );
};

export default TitleSubMenu;
