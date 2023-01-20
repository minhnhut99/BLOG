import React from "react";
import BlockBreak from "../../components/common/block_break/BlockBreak";
import Music from "../music/Music";
import Photo from "../photo/Photo";
import Storries from "../storries/Storries";
const Home = () => {
  // const dataPost = [
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1621602412501-69e1b0e4b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXR0eSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     alt: "alt1",
  //     address_path: "Tu Su",
  //     date: "31/12/2022",
  //     title_heading: "Mot chieu mua",
  //     desc_text:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1621602412501-69e1b0e4b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXR0eSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     alt: "alt1",
  //     address_path: "Tu Su",
  //     date: "31/12/2022",
  //     title_heading: "Mot chieu mua",
  //     desc_text:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1621602412501-69e1b0e4b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXR0eSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     alt: "alt1",
  //     address_path: "Tu Su",
  //     date: "31/12/2022",
  //     title_heading: "Mot chieu mua",
  //     desc_text:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien",
  //   },
  //   // {
  //   //   image:
  //   //     "https://images.unsplash.com/photo-1621602412501-69e1b0e4b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXR0eSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   //   alt: "alt1",
  //   //   address_path: "Tu Su",
  //   //   date: "31/12/2022",
  //   //   title_heading: "Mot chieu mua",
  //   //   desc_text:
  //   //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien",
  //   // },
  //   // {
  //   //   image:
  //   //     "https://images.unsplash.com/photo-1621602412501-69e1b0e4b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXR0eSUyMGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   //   alt: "alt1",
  //   //   address_path: "Tu Su",
  //   //   date: "31/12/2022",
  //   //   title_heading: "Mot chieu mua",
  //   //   desc_text:
  //   //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien",
  //   // },
  // ];
  return (
    <React.Fragment>
      <BlockBreak />
      <div className="px-5 lg:px-1 lg:pr-0">
        {/* tu su  */}
        <Storries />
        {/* Am nhac  */}
        <Music />
        <Photo />
      </div>
    </React.Fragment>
  );
};

export default Home;
