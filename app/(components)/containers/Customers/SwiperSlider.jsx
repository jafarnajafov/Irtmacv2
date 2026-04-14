"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import { useState } from "react";

export const ArrowIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

const SwiperSlider = ({ customers }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };
  return (
    <>
      <Swiper
        onSwiper={setSwiperInstance}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {customers?.map((cur) => (
          <SwiperSlide
            key={cur?.id}
            className=" border-[2px] border-transparent  "
          >
            <div className="relative  flex flex-col  ">
              <Image
                className="absolute top-[20px] 2xl:top-[10px] 2xl:left-[10px] left-[20px] z-20"
                width={15}
                height={13}
                alt={cur?.name}
                src={"/vergul_red.svg"}
              />
              <div className=" flex flex-col rounded-[20px] bg_card1">
                <span className="bg-[#009ade] w-[24px] h-[24px] rounded-full absolute z-50 left-[50%] translate-x-[-50%] bottom-[-10px]"></span>
                <div className="bg_card2 p-[40px] 2xl:p-[20px]">
                  <p className="text-[14px] xl:text-[12px] text-[#002d74] text-center">
                    {cur?.text_long}
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-[30px] justify-center items-center">
                <h3 className="text-[18px] text-[#002d74] text-center font-['TTForsTrial-Medium']">
                  {cur?.name}
                </h3>
                <h6 className="text-[#009ade] text-[16px] font-['TTForsTrial-Medium']">
                  {cur?.position}
                </h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 lg:top-auto lg:bottom-[-50px] left-[100px] 2xl:left-[30px] lg:left-[calc(50%-45px)] translate-y-[-50%] lg:translate-y-0 z-10 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center shadow-md border border-[#009ade] transition-colors duration-300"
      >
        <ArrowIcon className="w-6 h-6 text-blue-500 transform rotate-180" />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 lg:top-auto lg:bottom-[-50px] right-[100px] 2xl:right-[30px] lg:right-[calc(50%-45px)] translate-y-[-50%] lg:translate-y-0 z-10 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center shadow-md border border-[#009ade] hover:bg-gray-100 transition-colors duration-300"
      >
        <ArrowIcon className="w-6 h-6 text-blue-500" />
      </button>
    </>
  );
};

export default SwiperSlider;
