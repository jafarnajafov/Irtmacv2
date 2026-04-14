import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../../global_containers/AnimatedButton/AnimatedButton";

const PortfolioItem = ({ href, title, readmore, img, tag }) => {
  return (
    <div className="col-span-4 lg:col-span-6 md:col-span-12 flex flex-col bg-[#f0f6f9]  rounded-[20px]">
      <Image width={10000} height={267} alt={title} src={img} />
      <div className=" flex h-full items-center justify-between flex-col px-[24px] xl:px-[10px] py-[24px]">
        <h4 className="font-semibold text-[24px] xl:text-[18px] text-[#003b71] text-center ">
          {title}
        </h4>
        <div className="flex justify-between items-center w-full pt-[20px]">
          <span className="bg-[#009ade] px-[20px] py-[12px] text-center text-white text-[14px] rounded-[70px]">
            {tag}
          </span>
          <div>
            <AnimatedButton leanmore={readmore} href={href} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
