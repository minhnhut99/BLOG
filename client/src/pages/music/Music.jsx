import React from "react";
import BlockBreak from "../../components/common/block_break/BlockBreak";
import PostItem from "../../_share/post_item/PostItem";
import ReadMore from "../../_share/read_more/ReadMore";
import TitleSubMenu from "../../_share/title_sub_menu/TitleSubMenu";
const Music = () => {
  const dataPost = [
    {
      image:
        "https://images.unsplash.com/photo-1621602412501-69e1b0e4b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXR0eSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "alt1",
      address_path: "Tu Su",
      date: "31/12/2022",
      title_heading: "Mot chieu mua",
      desc_text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien",
    },
    {
      image:
        "https://images.unsplash.com/photo-1621602412501-69e1b0e4b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXR0eSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "alt1",
      address_path: "Tu Su",
      date: "31/12/2022",
      title_heading: "Mot chieu mua",
      desc_text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien",
    },
    {
      image:
        "https://images.unsplash.com/photo-1621602412501-69e1b0e4b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXR0eSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "alt1",
      address_path: "Tu Su",
      date: "31/12/2022",
      title_heading: "Mot chieu mua",
      desc_text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien",
    },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1621602412501-69e1b0e4b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXR0eSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //   alt: "alt1",
    //   address_path: "Tu Su",
    //   date: "31/12/2022",
    //   title_heading: "Mot chieu mua",
    //   desc_text:
    //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien",
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1621602412501-69e1b0e4b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXR0eSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //   alt: "alt1",
    //   address_path: "Tu Su",
    //   date: "31/12/2022",
    //   title_heading: "Mot chieu mua",
    //   desc_text:
    //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien",
    // },
  ];
  return (
    <>
      <div>
        <TitleSubMenu title="Âm nhạc" />
        <div className="flex flex-wrap w-full overflow-hidden relative">
          {dataPost.map((post, idx) => {
            return (
              <PostItem
                key={idx}
                image={post.image}
                alt={post.alt}
                address_path={post.address_path}
                date={post.date}
                title_heading={post.title_heading}
                desc_text={post.desc_text}
              />
            );
          })}
        </div>
        <ReadMore />
      </div>
      <BlockBreak />
    </>
  );
};

export default Music;
