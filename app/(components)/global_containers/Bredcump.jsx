import Link from "next/link";

const Bredcump = ({ name, longtext, href }) => {
  return (
    <>
      <div className="flex items-center w-full justify-between">
        <div className="flex w-full justify-between items-center">
          <h3 className="text-[#003B71] text-[36px] lg:text-[25px] md:text-[18px]">
            {name}
          </h3>
          <span className="h-[1px] w-[82%] md:w-[70%]  bg-[#B4C1D9] mr-[-30px]"></span>
        </div>
        {href && (
          <Link href={href} className="">
            <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full border bg-[#fff] border-[#B4C1D9]">
              <img src="/readmore_grey.svg" alt="readmore" />
            </span>
          </Link>
        )}
      </div>

      {longtext && (
        <p className="text-[20px] md:text-[14px] pt-6 text-[#003B71]">
          {longtext}
        </p>
      )}
    </>
  );
};

export default Bredcump;
