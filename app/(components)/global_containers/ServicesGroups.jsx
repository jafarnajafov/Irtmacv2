import ServiceItem from "../containers/Xidmetler/ServiceItem";
import { toSlug } from "./Convert";

const ServicesGroups = ({ data, params, readmore, news }) => {
  return (
    <div className="grid grid-cols-12 gap-[24px] mt-[40px] md:mt-[20px]">
      {data &&
        data?.map((cur, i) => {
          const toSLug = toSlug(cur?.title);
          return (
            <ServiceItem
              id={i}
              key={i}
              href={`/${params?.code}/telimler/${cur?.id}/${toSLug}`}
              title={cur.title}
              newService={cur?.new}
              desc={cur?.short_desc}
              readmore={readmore}
              news={news}
            />
          );
        })}
    </div>
  );
};

export default ServicesGroups;
