import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { ImCamera, ImMusic } from "react-icons/im";
import { TbWriting } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserDetailsQuery } from "../../../services/auth/authService";
import { setCredentials } from "../../../redux/authSlice";
const getScreenWidth = () => {
  const WIDTH_SCREEN = window.innerWidth;
  return WIDTH_SCREEN;
};

const Header = () => {
  const listLi = [
    {
      icon: <HiHome className="mr-2" />,
      text: "Trang chủ",
      path: "home",
    },
    {
      icon: <TbWriting className="mr-2" />,
      text: "Tự sự",
      path: "storries",
    },
    {
      icon: <ImCamera className="mr-2" />,
      text: "Nhiếp ảnh",
      path: "photo",
    },
    {
      icon: <ImMusic className="mr-2" />,
      text: "Âm nhạc",
      path: "music",
    },
  ];
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // auto authentication
  const { data, isFetching } = useGetUserDetailsQuery("userDetails", {
    // perform a refetch every 15mins
    pollingInterval: 900000,
  });
  console.log("isFetching", isFetching);
  useEffect(() => {
    if (data) dispatch(setCredentials(data));
  }, [data, dispatch]);
  const handleClickIconOpenNav = () => {
    setIsOpenNav(!isOpenNav);
  };
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpenNav(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const refOutside = useRef(null);
  useOutsideAlerter(refOutside);
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());
  useEffect(() => {
    const handleResizeScreenWidth = () => {
      setScreenWidth(getScreenWidth);
    };
    window.addEventListener("resize", handleResizeScreenWidth);
    return () => window.removeEventListener("resize", handleResizeScreenWidth);
  }, []);
  return (
    <React.Fragment>
      <header className="relative flex items-center lg:justify-between lg:px-1 py-4 xl:py-2 border-b border-b-gray-300">
        <div className="ml-12">
          <h1>
            <img
              className="w-92 h-20 object-cover"
              src={Logo}
              alt="logo blog"
            />
          </h1>
        </div>

        <div
          ref={refOutside}
          className={
            screenWidth <= 1024
              ? `fixed top-0 right-0 ${
                  isOpenNav ? "w-full" : "w-0"
                }  h-full bg-slate-400 transition-all`
              : "ml-auto"
          }
        >
          <ul
            className={
              screenWidth <= 1024
                ? "flex flex-col justify-center ml-auto mr-14 mt-12"
                : "flex ml-auto"
            }
          >
            {listLi.map((item, idx) => {
              return (
                <Link to={item.path} key={idx}>
                  <li
                    key={idx}
                    className="ml-12 xl:ml-8 text-title text-xl lg:text-4xl lg:mb-4 xl:text-sm font-medium flex  lg:justify-start  items-center cursor-pointer border-b-2 border-transparent hover:border-gray-600 transition all delay-175 duration-500"
                  >
                    {item.icon} {item.text}
                  </li>
                </Link>
              );
            })}
            <Link className="hidden lg:block">
              <li className="ml-12 xl:ml-8 text-title text-xl lg:text-4xl lg:mb-4 xl:text-sm font-medium flex  lg:justify-start  items-center cursor-pointer border-b-2 border-transparent hover:border-gray-600 transition all delay-175 duration-500">
                <BiUser className="mr-2" />
                Đăng nhập
              </li>
            </Link>
            <div className="hidden lg:block absolute top-1 right-1">
              <div onClick={handleClickIconOpenNav}>
                {isOpenNav ? (
                  <AiOutlineClose size={45} className="text-blue-900" />
                ) : (
                  <GiHamburgerMenu size={35} className="text-blue-900" />
                )}
              </div>
            </div>
          </ul>
        </div>
        <div className="w-52 lg:w-32 lg:mr-12 text-center ml-auto">
          <p className=" py-2  border ml-5 border-text_gray rounded-sm text-title cursor-pointer hover:border-color_primary lg:hidden font-medium transition all delay-175 duration-500">
            Đăng nhập
          </p>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
