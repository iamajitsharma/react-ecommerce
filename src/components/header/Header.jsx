import React from "react";
import { TbGridDots } from "react-icons/tb";
import { BsBasket, BsHeart, BsSearch } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Topbar from "./Topbar";
import CategoryMenu from "./CategoryMenu";

const Header = () => {
  return (
    <header className="relative">
      <Topbar />
      <div>
        <div className="flex items-center justify-between gap-4 bg-gray-200 py-4 px-20">
          <div>
            <img src="/images/plant-logo.png" alt="Plant Logo" />
          </div>
          <div className="w-1/2 ">
            <ul className="flex items-center gap-4 text-base font-semibold">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-4 list-none text-gray-600/80 text-2xl">
              <li>
                <TbGridDots />
              </li>
              <li>
                <BsBasket />
              </li>
              <li>
                <BsHeart />
              </li>
              <li>
                <BsSearch />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
