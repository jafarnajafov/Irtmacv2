import Image from "next/image";
import Link from "next/link";

const AnimatedButton = ({ leanmore, href }) => {
  return (
    <Link href={href} className="">
      <button className="cta flex gap-[20px] group-hover:before:w-full group-hover:before:bg-[#002D74] before:top-[4px] 2xl:before:top-0">
        <span className="group-hover:text-white text-[18px] 2xl:text-[14px]">
          {leanmore}
        </span>
        <Image
          width={16}
          height={12}
          alt={leanmore}
          src={"/readmore_grey.svg"}
          className=""
        />
      </button>
    </Link>
  );
};

export default AnimatedButton;
