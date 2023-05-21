import React from "react";
import plantData from "../../data";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  appendDots: (dots) => {
    return <ul style={{ margin: "0px" }}>{dots}</ul>;
  },
};

const Hero = () => {
  return (
    <div className="relative">
      <Slider {...settings} className="heroSlider">
        {plantData.map((item, index) => (
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={item.image} alt="" />
            <h2 className="text-3xl font-semibold">{item.title}</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="text-base font-semibold text-gray-500/70">
                ${item.regularPrice}
              </span>
              <span className="text-lg font-semibold text-black">
                ${item.salePrice}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
