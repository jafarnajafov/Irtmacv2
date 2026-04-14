import Image from "next/image";
import Link from "next/link";

const TrainersData = ({ params, cur }) => {
  return (
    <>
      <div className="col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 transition-all hover:scale-[1.03]">
        <Link
          href={`/${params}/telimciler/${cur?.id}/${cur?.slug}`}
          className="flex flex-col"
        >
          <div>
            <Image
              width={330}
              height={374}
              alt={cur?.name}
              src={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.image}`}
              className="h-[374px] object-cover rounded-[20px] md:w-full"
            />
          </div>
          <div className="bg-[#009ADE] px-[24px] py-[20px] flex flex-col justify-center items-center rounded-[20px] -mt-[80px] mx-[10px]">
            <div
              dangerouslySetInnerHTML={{ __html: `${cur?.name}` }}
              className="text-white text-[24px] 2xl:text-[18px] font-['TTForsTrial-Medium'] text-center leading-[30px]"
            />
            <div
              className="text-white text-[14px] font-['TTForsTrial-Regular'] text-center mt-[12px]"
              dangerouslySetInnerHTML={{ __html: `${cur?.position}` }}
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default TrainersData;
