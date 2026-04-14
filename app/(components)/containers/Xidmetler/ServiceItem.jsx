import Link from "next/link";
import { handleScrollToBottom } from "../../handleScrollToBottom/handleScrollToBottom";
import AnimatedButton from "../../global_containers/AnimatedButton/AnimatedButton";

const ServiceItem = ({ id, href, title, desc, newService, readmore, news }) => {
  return (
    <div
      key={id}
      onClick={handleScrollToBottom}
      className="col-span-4 lg:col-span-6 group md:col-span-12 service_item trans bg-[#F0F6F9] py-[37px] px-[40px] rounded-[20px] relative h-full flex  justify-between flex-col hover:bg-[#009ADE] 2xl:px-[20px] 2xl:py-[20px]"
    >
      <Link
        href={href}
        className="text-[#003B71] text-[24px] 2xl:text-[18px] font-['TTForsTrial-Medium'] mb-[24px] group-hover:text-white trans"
      >
        {title}
      </Link>
      <div className="text-[#003B71] text-[14px] line-clamp-3 group-hover:text-white trans">
        {desc}
      </div>
      <div className="mt-[24px]">
        <AnimatedButton leanmore={readmore} href={href} />
      </div>
    </div>
  );
};

export default ServiceItem;

// <h3 className=" text-[#003B71]">{readmore}</h3>
// <img src="/readmore/readmore.svg" alt="readmore" />
