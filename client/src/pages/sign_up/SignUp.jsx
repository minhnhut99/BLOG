import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiShow } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import googleLogo from "../../assets/images/google-logo.svg";
import { signup } from "../../redux/authSlice";
const Login = () => {
  // ==== hook ====
  const navigate = useNavigate();
  const [typePassword, setTypePassword] = useState("password");
  const dispatch = useDispatch();
  // ==== handleFunciton ====
  const handleClickBtnSubmit = (data) => {
    dispatch(
      signup({
        data,
        callback: (res, msg) => {
          if (res) {
            navigate("/login");
          }
        },
      })
    );
  };
  const handleClickRedirectLogin = () => {
    navigate("/");
  };
  const handleClickToggleShowPassword = () =>
    typePassword === "password"
      ? setTypePassword("text")
      : setTypePassword("password");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const handleErrors = (errors) => {};
  const signUpOptions = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address",
      },
    },
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
    confirmpassword: {
      required: "Confirm password is required",
      validate: (val) => {
        if (watch("password") !== val) {
          return "Your passwords do no match";
        }
      },
    },
  };
  return (
    <React.Fragment>
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="flex justify-center items-center h-3/4 w-2/3 rounded-sm shadow-md lg:w-full md:w-full lg:shadow-none  sm:w-full sm:shadow-none">
          <div className="h-4/5 w-2/3 sm:hidden">
            <img
              className="h-full w-full pl-8"
              src="https://plus.unsplash.com/premium_photo-1669904021305-0cb1eb7399cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              alt="background left"
            />
          </div>
          <div className="h-4/5 w-1/3 px-6 py-8 rounded-sm sm:w-full">
            <h2
              className="text-title
           font-bold text-3xl uppercase text-center mb-5"
            >
              Sign up
            </h2>
            <form
              onSubmit={handleSubmit(handleClickBtnSubmit, handleErrors)}
              className="w-full"
            >
              <div className="w-full">
                <input
                  type="text"
                  className="input-primary w-full"
                  placeholder="Email"
                  name="email"
                  {...register("email", signUpOptions.email)}
                />
                <small className="text-red-500">
                  {errors?.email && errors.email.message}
                </small>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="input-primary mt-4 mb-1 w-full"
                  placeholder="Username"
                  name="username"
                  {...register("username", signUpOptions.username)}
                />
                <small className="text-red-500">
                  {errors?.username && errors.username.message}
                </small>
              </div>
              <div className="w-full relative">
                <input
                  type={typePassword}
                  className="input-primary mt-4 mb-1 w-full"
                  placeholder="Password"
                  name="password"
                  {...register("password", signUpOptions.password)}
                />
                <span
                  onClick={handleClickToggleShowPassword}
                  className=" cursor-pointer absolute right-2 top-1/2"
                >
                  <BiShow size={15} />
                </span>
              </div>
              <small className="text-red-500">
                {errors?.password && errors.password.message}
              </small>
              <div className="w-full relative">
                <input
                  type={typePassword}
                  className="input-primary mt-4 mb-1 w-full"
                  placeholder="Confirm password"
                  name="confirmpassword"
                  {...register(
                    "confirmpassword",
                    signUpOptions.confirmpassword
                  )}
                />
                <span
                  onClick={handleClickToggleShowPassword}
                  className="cursor-pointer absolute right-2 top-1/2"
                >
                  <BiShow size={15} />
                </span>
              </div>
              <small className="text-red-500">
                {errors?.confirmpassword && errors.confirmpassword.message}
              </small>
              <div
                className="flex justify-end mb-4 w-full"
                onClick={handleClickRedirectLogin}
              >
                <p className="text-sm text-text text-right cursor-pointer underline hover:text-color_date">
                  Do you already have an account?
                </p>
              </div>
              <div className="w-full">
                <div className="flex">
                  <button
                    type="submit"
                    className="btn-primary w-full capitalize text-sm font-bold"
                    onClick={handleClickBtnSubmit}
                  >
                    Sign up
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
