import React from "react";
import Masonry from "../../components/common/masonry/Masonry";
import TitleSubMenu from "../../_share/title_sub_menu/TitleSubMenu";

const Photo = () => {
  return (
    <>
      <div>
        <TitleSubMenu title="Hình ảnh" />
        <Masonry />
      </div>
    </>
  );
};

export default Photo;
