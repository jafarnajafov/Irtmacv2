import Image from "next/image";
import MaxWidth from "../../MaxWidth/MaxWidth";

const Leader = ({ data }) => {
  return (
    <>
      <section className="mt-[280px] 2xl:mt-[200px] lg:mt-[140px] mb-[100px] md:mb-[40px] lg:px-[20px]">
        <MaxWidth>
          <h3 className="text-center text-[#003B71] font-semibold text-[36px] lg:text-[25px] mb-10">
            {data?.rehberin_muracieti?.title}
          </h3>
          <div className="flex flex-col mb-[4 0px] lg:mb-[30px] justify-center  items-center">
            <h6 className="text-[#002d74] text-[24px] lg:text-[18px]">
              {data?.rehberin_muracieti?.position}
            </h6>
            <h3 className="text-[#002d74] text-[24px] font-semibold">
              {data?.rehberin_muracieti?.fullname}
            </h3>
          </div>

          <div className=" grid grid-cols-12 rounded-[30px] place-items-center h-max xl:mt-[50px] ">
            <div className="col-span-3 lg:col-span-12 relative  rounded-[30px] h-max ">
              <div className=" relative h-max  ">
                <span className="h-max  flex  before:content-[''] before:w-[300px] before:h-[300px] before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:left-0 before:bg-[#009ade]  xl:before:w-[300px] xl:before:h-[300px]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.rehberin_muracieti?.image}`}
                    alt={data?.rehberin_muracieti?.title}
                    width={330}
                    height={330}
                    className="relative z-20 bottom-[50px]  left-[-27px] p-[20px] object-cover h-max "
                  />
                </span>
              </div>
            </div>

            <div
              className="col-span-9 lg:col-span-12   bg-[#f0f6f9] h-max  flex items-center justify-center 
               
              rounded-[30px] rounded-tl-[150px] rounded-bl-[150px] xl:rounded-tl-[20px] xl:rounded-bl-[20px]
              px-[30px]  py-[60px] 
              ml-[-330px] xl:ml-[-250px] pl-[330px] xl:pl-[280px]
              xl:py-[30px] 
              lg:ml-0 lg:pl-[30px]
            "
            >
              <div
                className=" text-[#003B71] text-[16px] xl:text-[14px]"
                dangerouslySetInnerHTML={{
                  __html: `${data?.rehberin_muracieti?.text}`,
                }}
              />
            </div>
          </div>

          <div className="mt-[30px]">
            <div
              className=" text-[#003B71] text-[16px] lg:text-[14px] text-center"
              dangerouslySetInnerHTML={{
                __html: `${data?.rehberin_muracieti?.text2}`,
              }}
            />
          </div>
        </MaxWidth>
      </section>
    </>
  );
};

export default Leader;
