"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import MaxWidth from "@/app/(components)/MaxWidth/MaxWidth";
const HomeLogos = ({ data }) => {
  return (
    <section className="lg:px-[20px] mt-[80px] lg:mt-[40px] ">
      <MaxWidth>
        <div className=" ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              440: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {data &&
              data?.map((cur, i) => (
                <SwiperSlide key={i} className="h-full ">
                  <div className=" flex items-center justify-center bg-[#F7F7FA] h-[180px] md:h-[100px] py-[38px] md:py-[20px] rounded-[20px] px-[34px] md:px-[20px]">
                    <Image
                      width={1000}
                      height={1000}
                      src={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.image}`}
                      alt="img"
                      className="mix-blend-darken object-cover md:max-w-[150px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </MaxWidth>
    </section>
  );
};

export default HomeLogos;
