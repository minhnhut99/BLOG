import React from "react";

const ActionsPost = ({
  handleClickCreate,
  handleClickUpdate,
  handleClickDelete,
}) => {
  return (
    <div>
      <ul className=" bg-slate-200">
        <li
          className="text-sm py-1 px-4 border-b border-b-slate-50 cursor-pointer hover:bg-slate-100"
          onClick={handleClickCreate}
        >
          Create
        </li>
        <li
          className="text-sm py-1 px-4 border-b border-b-slate-50 cursor-pointer hover:bg-slate-100"
          onClick={handleClickUpdate}
        >
          Update
        </li>
        <li
          className="text-sm py-1 px-4 cursor-pointer hover:bg-slate-100"
          onClick={handleClickDelete}
        >
          Delete
        </li>
      </ul>
    </div>
  );
};

export default ActionsPost;
