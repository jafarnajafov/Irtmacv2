"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowIcon } from "../Customers/SwiperSlider";

const NewsGallery = ({ images }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className="px-[120px] xl:px-0 mt-[40px]">
      <div className=" rounded-[20px] overflow-hidden">
        <Swiper
          slidesPerView={1}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          navigation={true}
          className="mySwiper relative"
          onSwiper={setSwiperInstance}
        >
          {images &&
            images?.map((cur, i) => {
              return (
                <SwiperSlide key={i}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.images}`}
                    className="img-fluid h-[360px] lg:h-[250px] rounded-[20px]"
                    alt="img"
                    width={920}
                    height={360}
                    priority
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="flex justify-center items-center gap-[30px] mt-[40px]">
        <button
          onClick={handlePrev}
          className="z-10 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center shadow-md border border-[#009ade] transition-colors duration-300"
        >
          <ArrowIcon className="w-6 h-6 text-blue-500 transform rotate-180" />
        </button>

        <button
          onClick={handleNext}
          className="z-10 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center shadow-md border border-[#009ade] hover:bg-gray-100 transition-colors duration-300"
        >
          <ArrowIcon className="w-6 h-6 text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default NewsGallery;
