import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import ActionsPost from "../actions_post/ActionsPost";

const ContentLeft = () => {
  const handleClickIconActionPost = () => {
    console.log("handleClickIconActionPost");
    setIsOpenActionPost(!isOpenActionPost);
  };
  const [isOpenActionPost, setIsOpenActionPost] = useState(false);
  return (
    <div className="w-1/3 border border-red-200">
      <header className="flex items-center gap-2">
        <p>Search post</p>
        <div>
          <input type="text" className="input-primary" />
        </div>
        <CiSearch size={20} />
      </header>
      <div className="flex items-center justify-end mt-6 mr-6">
        <span className="inline-block mr-2">Sort by</span>
        <div>
          <select className="p-1 bg-slate-200 rounded-sm cursor-pointer">
            <option value="1">Recent</option>
            <option value="2">Last week</option>
            <option value="3">Last month</option>
          </select>
        </div>
      </div>

      {/* list post  */}
      <div className="w-full flex flex-col items-center mt-10">
        <div className="flex relative w-full h-24 mb-10 rounded-sm overflow-hidden shadow-sm cursor-pointer">
          <div className="w-1/4 h-full">
            <img
              className="h-full w-full object-cover"
              src="https://media.istockphoto.com/id/525982936/photo/somali-cat-looking-up.jpg?b=1&s=170667a&w=0&k=20&c=68pfcgw4sDc1bmr7qKnShkjJnm6Ryav4w_E9_KGaXvs="
              alt="pictures"
            />
          </div>
          <div className="w-3/4 px-4 mt-2">
            <h2 className="text-md font-bold mb-1">Creating good articles</h2>
            <p className="truncate">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <footer className="flex justify-between mt-4">
              <small className="text-xs">12/3/2022</small>
              <small className="text-xs">NhutHuynh</small>
            </footer>
          </div>
          <div
            className="cursor-pointer absolute top-1 right-1 
      "
            onClick={handleClickIconActionPost}
          >
            <BiDotsVerticalRounded size={18} />
          </div>
        </div>
        {isOpenActionPost ? (
          <ActionsPost onClick={handleClickIconActionPost} />
        ) : null}
      </div>
    </div>
  );
};

export default ContentLeft;
