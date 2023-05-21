import React from "react";
import Button from "./Button";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = () => {
  return (
    <div className="p-4 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-md rounded-md">
      <div className="flex flex-col gap-4 items-center justify-center relative">
        <img
          src="/images/plants/calathea-orbifolia.jpg"
          alt=""
          className="w-2/3 h-2/3"
        />
        <div className="flex justify-between items-center w-full absolute top-4">
          <span className="bg-orange-500/80 text-white p-1">-15%</span>
          <span className="text-2xl text-slate-500">
            <AiOutlineHeart />
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-base font-medium text-slate-700/90">
            Calathea Orbifolia
          </h4>
          <span>$38.00</span>
          <Button title={"Buy Now"} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
