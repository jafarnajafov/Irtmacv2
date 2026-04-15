import React from "react";
import MaxWidth from "../../MaxWidth/MaxWidth";
import Image from "next/image";
import SwiperSlider from "./SwiperSlider";

const Customers = ({ customers, customers_text, customers_long }) => {
  return (
    <section className="my-[80px] lg:my-[40px] lg:mx-[20px]">
      <div className="bg-[#f0f6f9] py-[40px] lg:px-[20px] relative rounded-[20px]">
        <span className="absolute -top-[50px] xl:-top-[40px] md:-top-[30px] left-[260px] xl:left-[60px] md:left-[30px] bg-[#f32735] flex justify-center items-center rounded-full p-[32px] xl:p-[20px]">
          <Image
            width={35}
            height={30}
            alt="vergul"
            src={"/vergul.svg"}
            className="md:max-w-[20px]"
          />
        </span>
        <MaxWidth>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[36px] md:text-[25px] text-[#002d74] font-['TTForsTrial-Medium'] mb-[24px]">
              {customers_text}
            </h3>
            <p className="text-[#002d74] text-[14px] md:text-[12px] text-center max-w-7xl">
              {customers_long}
            </p>
          </div>
          <div className="mt-[40px]">
            <SwiperSlider customers={customers} />
          </div>
        </MaxWidth>
      </div>
    </section>
  );
};

export default Customers;
