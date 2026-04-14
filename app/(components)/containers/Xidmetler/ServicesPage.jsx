import BredcumPages from "../../global_containers/BredcumPages";
import ServiceItem from "./ServiceItem";

const ServicesPage = ({ data, service, params, service_1, readmore, news }) => {
  return (
    <>
      <section className=" mb-24 pt-10 max-w-[1580px] px-12  2xl:max-w-[1380px] xl:max-w-[1150px]  m-auto  lg:px-4 min-h-[70vh]">
        <BredcumPages
          name={service}
          classesName="w-[50%] text-center text-[24px] xl:w-full xl:text-[18px] lg:text-[16px]"
          longtext={service_1}
        />
        <div className="grid grid-cols-12 gap-6 mt-10 ">
          {data?.xidmetler &&
            data?.xidmetler?.map((cur, i) => {
              return (
                <ServiceItem
                  id={i}
                  href={`/${params?.code}/x/${cur?.id}`}
                  title={cur?.title}
                  newService={cur?.new}
                  desc={cur?.short_desc}
                  readmore={readmore}
                  news={news}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
