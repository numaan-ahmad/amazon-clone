import React from "react";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src="/carousel1.jpg" alt="Carousel image" loading="lazy" />
        </div>
        <div>
          <img src="/carousel2.jpg" alt="Carousel image" loading="lazy" />
        </div>
        <div>
          <img src="/carousel3.jpg" alt="Carousel image" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
