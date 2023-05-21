import React from "react";
import Hero from "../components/common/Hero";
import Container from "../components/common/Container";
import FeaturedBanner from "../components/banner/FeaturedBanner";
import ProductCard from "../components/common/ProductCard";

const Home = () => {
  return (
    <section>
      <Hero />
      <Container className="mt-20 bg-neutral-200/50 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-2 text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto bg-white shadow-md rounded-full relative">
              <img src="/images/garden-care.png" alt="" className="" />
            </div>
            <div className="py-4">
              <h5 className="text-xl md:text-lg font-semibold">Garden Care</h5>
              <p className="text-sm text-gray-500/80">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit
              </p>
            </div>
          </div>
          <div className="p-2 text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto bg-white shadow-md rounded-full relative">
              <img src="/images/plant-renovation.png" alt="" className="" />
            </div>
            <div className="py-4">
              <h5 className="text-xl md:text-lg font-semibold">
                Plant Renovation
              </h5>
              <p className="text-sm text-gray-500/80">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit
              </p>
            </div>
          </div>
          <div className="p-2 text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto bg-white shadow-md rounded-full relative">
              <img src="/images/seed-supply.png" alt="" className="" />
            </div>
            <div className="py-4">
              <h5 className="text-xl md:text-lg font-semibold">Seed Supply</h5>
              <p className="text-sm text-gray-500/80">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit
              </p>
            </div>
          </div>
          <div className="p-2 text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto bg-white shadow-md rounded-full relative">
              <img src="/images/watering-garden.png" alt="" className="" />
            </div>
            <div className="py-4">
              <h5 className="text-xl md:text-lg font-semibold">
                Watering Garen
              </h5>
              <p className="text-sm text-gray-500/80">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <FeaturedBanner />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
            <ProductCard />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Home;
