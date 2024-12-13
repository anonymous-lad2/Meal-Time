import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { FcGoogle } from "react-icons/fc";
import frame from '../utility/images/frame.png';

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="flex flex-col lg:flex-row w-11/12 max-w-[1160px] py-12 mx-auto gap-y-8 lg:gap-y-0 gap-x-12 justify-between">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 max-w-[450px] mx-auto dark:text-white text-center lg:text-left">
        <h1 className="dark:text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>

        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="dark:text-richblack-100">{desc1}</span>
          <br />
          <span className="dark:text-blue-100 italic">{desc2}</span>
        </p>

        {/* Form Component */}
        {formType === "signup" ? (
          <SignUp setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )}

        {/* Google Sign-In Button */}
        <button className="w-full dark:bg-transparent bg-richblack-900 flex items-center justify-center rounded-[8px] font-medium text-richblack-100 dark:border-richblack-700 border border-black px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <span>Sign in with Google</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="relative w-full lg:w-1/2 max-w-[450px] mx-auto">
        {/* Frame Image */}
        <img
          src={frame}
          alt="pattern"
          loading="lazy"
          className="w-full h-[380px] object-cover rounded-md"
        />

        {/* Overlay Image */}
        <img
          src={image}
          alt="overlay"
          loading="lazy"
          className="absolute -top-4 right-4 h-[350px] w-[400px] object-cover lg:block rounded-md"
        />
      </div>
    </div>
  );
};

export default Template;
