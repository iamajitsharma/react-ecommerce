import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";

const Topbar = () => {
  return (
    <div className="hidden md:flex items-center justify-between px-6 py-2 border-b-[1px] border-gray-400/70">
      <div className="flex items-center gap-4">
        <span className="flex flex-row items-center gap-4">
          <IoCallOutline />
          +91 9038764817
        </span>
        <span className="flex flex-row items-center gap-4">
          <AiOutlineMail />
          ajitsharma2021@gmail.com
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span>English</span>
        <span>US Dollar</span>
        <span className="flex flex-row items-center gap-4">
          <HiOutlineUserCircle />
          Login / Register
        </span>
      </div>
    </div>
  );
};

export default Topbar;
