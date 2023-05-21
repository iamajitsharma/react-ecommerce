import React from "react";
import Button from "../common/Button";

const FeaturedBanner = () => {
  return (
    <section className="my-14">
      <div className="flex flex-col md:flex-row gap-4 relative">
        <div className="relative">
          <img src="/images/plant1-banner1.jpg" alt="" className="w-full" />
          <div className="flex flex-col absolute gap-6 left-0 pl-8 z-20 top-1/4">
            <h4 className="text-2xl md:text-4xl font-medium text-slate-900/70">
              Bonsai
              <br />
              Plant
              <br />
              Collections
            </h4>
            <span className="text-gray-500/70 font-semibold">Just Only</span>
            <Button title={"Shop Now"} />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <img
                src="/images/plant1-banner2.jpg"
                alt=""
                className="w-full h-full"
              />
              <div className="flex flex-col absolute gap-2 pl-8 z-20 top-6">
                <h4 className="text-2xl md:text-4xl font-medium text-slate-900/70">
                  Plants
                  <br />
                  For Interior
                </h4>
                <Button title={"Shop Now"} />
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/plant1-banner3.jpg"
                alt=""
                className="w-full h-full"
              />
              <div className="flex flex-col absolute gap-6 pl-8 z-20 top-6">
                <h4 className="text-2xl md:text-4xl font-medium text-slate-900/70">
                  Ceramic
                  <br />
                  Pot & Plants
                </h4>
                <span className="text-gray-500/70 font-semibold hidden">
                  Just Only
                </span>
                <span className="text-xl font-semibold text-green-900/80">
                  25% Off
                </span>
                <Button title={"Shop Now"} className="hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
