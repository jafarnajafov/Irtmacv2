import MaxWidth from "@/app/(components)/MaxWidth/MaxWidth";
import Image from "next/image";
import Link from "next/link";

const HomeVideo = ({ data, params, readmore }) => {
  return (
    <section className="mt-[80px] lg:mt-[40px] lg:px-[20px]">
      <MaxWidth>
        <div className="bg-[#002856] py-[40px] px-[100px] 2xl:px-[50px] lg:px-[20px] rounded-[30px] relative overflow-hidden">
          <div className="grid grid-cols-12 ">
            <div className="col-span-3 lg:col-span-12 flex  ">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <Image
                  width={136}
                  height={136}
                  alt={data?.title}
                  src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image}`}
                  className="max-w-[90px]"
                />
                <div
                  className="text-white font-['TTForsTrial-Bold'] text-[24px] md:pl-[30px] 2xl:text-[20px] text-center uppercase mt-[20px] md:mt-0"
                  dangerouslySetInnerHTML={{ __html: `${data?.text2}` }}
                />
              </div>
              <span className="flex w-[1px] h-full bg-[#0071CE] ml-[80px] lg:ml-[30px] md:hidden" />
            </div>
            <div className="col-span-9 lg:col-span-12 text-white md:mt-[40px] ">
              <div className="flex flex-col relative z-40">
                <h3 className="text-white text-[38px]  2xl:text-[25px] md:text-[18px] font-['TTForsTrial-Medium'] ">
                  {data?.title}
                </h3>
                <div
                  className="mt-[24px] text-white text-[14px] 2xl:max-w-[80%] md:max-w-full"
                  dangerouslySetInnerHTML={{ __html: `${data?.text}` }}
                />
                <Link
                  href={`/${params}/${data?.link}`}
                  className="bg-[#0071ce] flex gap-[10px] items-center py-[15px] px-[26px] w-max mt-[40px] rounded-[60px] text-[14px]"
                >
                  {readmore}
                  <span>
                    <Image
                      width={16}
                      height={12}
                      alt="readmore"
                      src={"/readmore_icon.svg"}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <span className="absolute right-[-66px] top-[-66px] md:hidden">
            <Image
              width={200}
              height={200}
              alt={data?.title}
              src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image}`}
            />
          </span>
        </div>
      </MaxWidth>
    </section>
  );
};

export default HomeVideo;
