import Image from "next/image";

import { toSlug } from "../../global_containers/Convert";
import MaxWidth from "../../MaxWidth/MaxWidth";
import PortfolioItem from "./PortfolioItem";
import Bredcump from "../../global_containers/Bredcump";

const PortfolioSingle = ({
  params,
  media,
  random,
  readmore,
  media_long,
  header_5_text,
}) => {
  return (
    <section className=" mt-[250px] 2xl:mt-[200px] lg:mt-[180px] md:mt-[120px] mb-[40px] lg:px-[20px]">
      <MaxWidth>
        <div className="flex flex-col">
          <Image
            width={10000}
            height={400}
            alt={media?.title}
            src={`${process.env.NEXT_PUBLIC_PICTURE}/${media?.image}`}
            className="h-[400px] lg:h-[250px] object-cover rounded-[20px]"
          />
          <div className="flex justify-between items-center mt-[20px] lg:flex-col">
            <h3 className="text-[24px] lg:text-[20px] lg:mt-[20px] font-semibold text-[#002d74]">
              {media?.title}
            </h3>
            <span className="bg-[#009ade] lg:order-[-1] px-[20px] py-[12px] text-center text-white text-[14px] rounded-[70px]">
              {media?.tag}
            </span>
          </div>

          <div
            className="text-center text-[16px] text-[#002d74] mt-[40px] lg:mt-[20px]"
            dangerouslySetInnerHTML={{ __html: `${media?.long_text}` }}
          />
        </div>
        <div className="mt-20 mb-20">
          <Bredcump
            name={header_5_text}
            href={`${params}/media-merkezi`}
            longtext={media_long}
          />
          <div className="grid grid-cols-12 gap-6 mt-[20px]">
            {random &&
              random?.map((item, i) => {
                const slug = toSlug(item?.title);
                return (
                  <PortfolioItem
                    key={item?.id || i}
                    id={item?.id}
                    href={`/${params}/media-merkezi/${item?.id}/${slug}`}
                    title={item?.title}
                    img={`${process.env.NEXT_PUBLIC_PICTURE}/${item?.image}`}
                    readmore={readmore}
                    tag={item?.tag}
                  />
                );
              })}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default PortfolioSingle;
