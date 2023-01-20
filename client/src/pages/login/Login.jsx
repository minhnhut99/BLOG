import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import googleLogo from "../../assets/images/google-logo.svg";
import { BiShow } from "react-icons/bi";
const Login = () => {
  // ==== hook ====
  const navigate = useNavigate();
  const [typePassword, setTypePassword] = useState("password");

  // ==== handleFunciton ====
  const handleClickBtnSubmit = (data) => {
    console.log("dataLogin", data);
  };

  const handleClickRedirectSignUp = () => {
    navigate("/signup");
  };

  const handleClickToggleShowPassword = () =>
    typePassword === "password"
      ? setTypePassword("text")
      : setTypePassword("password");
  const handleErrors = (errors) => {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const loginOptions = {
    username: {
      required: "Name is required",
      minLength: {
        value: 6,
        message: "Password must have at least 6 characters",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must have at least 6 characters",
      },
    },
  };
  return (
    <React.Fragment>
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="flex justify-center items-center h-3/4 w-2/3 rounded-sm shadow-md lg:w-full md:w-full lg:shadow-none  sm:w-full sm:shadow-none">
          <div className="h-4/5 w-2/3 lg:w-2/3 md:w-2/3 sm:hidden">
            <img
              className="h-full w-full pl-8"
              src="https://plus.unsplash.com/premium_photo-1669904021305-0cb1eb7399cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              alt="background left"
            />
          </div>
          <div className="h-4/5 w-1/3 px-6 py-8 rounded-sm sm:w-full">
            <h2
              className="text-title
           font-bold text-3xl uppercase text-center  mb-4"
            >
              Login
            </h2>
            <form
              onSubmit={handleSubmit(handleClickBtnSubmit, handleErrors)}
              className="w-full"
            >
              <div className="w-full">
                <input
                  className="input-primary w-full"
                  type="text"
                  placeholder="username"
                  name="username"
                  {...register("username", loginOptions.username)}
                />
                <small className="text-red-500">
                  {errors?.username && errors.username.message}
                </small>
              </div>
              <div className="w-full relative ">
                <input
                  type={typePassword}
                  className="input-primary mt-4 mb-1 w-full"
                  placeholder="password"
                  name="password"
                  {...register("password", loginOptions.password)}
                />
                <small className="text-red-500">
                  {errors?.password && errors.password.message}
                </small>
                <span
                  onClick={handleClickToggleShowPassword}
                  className=" cursor-pointer absolute right-2 top-1/2"
                >
                  <BiShow size={15} />
                </span>
              </div>
              <div
                className="flex justify-end mb-4 w-full"
                onClick={handleClickRedirectSignUp}
              >
                <p className="text-sm text-text cursor-pointer underline hover:text-color_date">
                  Don't have account?
                </p>
              </div>
              <div className="w-full">
                <div className="flex">
                  <button
                    type="submit"
                    className="btn-primary w-full capitalize text-sm font-bold"
                  >
                    Login
                  </button>
                </div>
                <div className="w-full mt-4">
                  <div className="w-full flex items-center justify-center border border-text_desc p-1 rounded-sm hover:border-text cursor-pointer">
                    <img className="mr-2" src={googleLogo} alt="logo google" />
                    <p className="text-text text-sm">Login with Google?</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
