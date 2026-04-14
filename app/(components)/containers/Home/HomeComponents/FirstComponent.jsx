import MaxWidth from "@/app/(components)/MaxWidth/MaxWidth";
import Image from "next/image";

const FirstComponent = ({ data }) => {
  return (
    <section className="rounded-br-[30px] rounded-bl-[30px] mt-[200px] 2xl:mt-[138px] lg:mt-[120px] md:mt-[100px]">
      <MaxWidth>
        <div className="relative">
          <img
            width={100000}
            height={10000}
            className="img-fluid h-[700px] 2xl:h-[500px] lg:h-[350px] md:h-[240px] rounded-br-[30px] rounded-bl-[30px]"
            src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image}`}
            alt={data?.created_at}
          />
          <div className="title absolute top-[50%] right-[117px] xl:right-[20px] md:right-[16px] translate-y-[-50%] max-w-[60%] md:max-w-[80%]">
            <div
              className="text-white text-right text-[60px] 2xl:text-[40px] lg:text-[28px] md:text-[20px] leading-[120%] text-slider font-['TTForsTrial-Bold']"
              dangerouslySetInnerHTML={{
                __html: `${data?.title}`,
              }}
            ></div>
          </div>
          <span className="absolute bottom-[-40px] lg:bottom-[-20px] md:bottom-[-16px] right-[112px] lg:right-[50px] md:right-[20px] flex justify-center items-center w-[94px] h-[94px] rounded-full bg-[#f32735] lg:w-[60px] lg:h-[60px] md:w-[48px] md:h-[48px]">
            <Image
              width={62}
              height={32}
              alt="slider_logo"
              src={"/slider_logo.svg"}
              className="lg:max-w-[35px] md:max-w-[26px]"
            />
          </span>
        </div>
      </MaxWidth>
    </section>
  );
};

export default FirstComponent;
