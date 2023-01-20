import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const PostItem = ({
  image,
  alt,
  address_path,
  date,
  title_heading,
  desc_text,
}) => {
  return (
    <figure className="w-[calc(33.33%_-_25px)] lg:w-[calc(50%_-_25px)] md:w-full mr-5 lg:mr-4 mb-5 flex flex-col relative cursor-pointer shadow-md bg-white rounded-sm overflow-hidden group">
      <img className="bg-cover w-full h-80" src={image} alt={alt} />
      <div className="pl-2 pb-8">
        <div className="pt-4">
          <div className="style-text-date md:text-md items-center flex">
            {address_path}
            <span className="block ml-1 mr-1 rounded-1/2 w-1 h-full  bg-color_date"></span>
            {date}
          </div>
        </div>
        <h4 className="mt-2 font-medium text-sub_title text-2xl md:text-xl">
          {title_heading}
        </h4>
        <p className="mt-2 capitalize text-text_desc md:text-sm">{desc_text}</p>
      </div>
      <button className="w-16 h-16 opacity-0 rounded-full bg-slate-50 absolute  -translate-y-1/2 -translate-x-1/2  left-1/2 top-1/2 flex items-center  group-hover: opacity-1 justify-center">
        <IoIosArrowRoundForward color="#000000" size={32} />
      </button>
    </figure>
  );
};

export default PostItem;
