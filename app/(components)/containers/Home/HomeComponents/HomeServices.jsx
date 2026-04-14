import Bredcump from "@/app/(components)/global_containers/Bredcump";
import ServicesGroups from "@/app/(components)/global_containers/ServicesGroups";
import MaxWidth from "@/app/(components)/MaxWidth/MaxWidth";

const HomeServices = ({ data, data_translate, params }) => {
  return (
    <section className="mt-[80px] lg:mt-[40px] md:px-[20px]">
      <MaxWidth>
        <Bredcump
          name={data_translate?.service}
          seeall={data_translate?.showmore}
          href={`${params?.code}/telimler`}
          longtext={data_translate?.service_1}
        />
        <ServicesGroups
          data={data}
          params={params}
          readmore={data_translate?.readmore}
          news={data_translate?.new}
        />
      </MaxWidth>
    </section>
  );
};

export default HomeServices;
