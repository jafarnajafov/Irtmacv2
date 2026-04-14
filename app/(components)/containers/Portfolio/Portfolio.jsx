import MaxWidth from "../../MaxWidth/MaxWidth";
import PortfolioTabs from "./PortfolioTabs"; // Yeni istemci bileşenini import et

// Bu bileşen artık bir Sunucu Bileşeni, "use client" yok.
const Portfolio = ({
  data_cat,
  initial_data, // Sunucudan gelen ilk portfolyo verisi
  portfolio,
  params,
  readmore,
  media_long,
}) => {
  return (
    <section className="mt-[250px] 2xl:mt-[200px] lg:mt-[150px] md:mt-[120px] mb-[100px] min-h-[75vh] lg:px-[20px]">
      <MaxWidth>
        <h3 className="text-[#003B71] font-bold text-[36px] xl:text-[25px] md:text-[20px] mb-[10px] lg:mb-4 text-center capitalize">
          {portfolio}
        </h3>
        <h3 className="text-[#003B71] text-[24px] xl:text-[18px] lg:text-[13px] mb-12 text-center w-[60%] lg:w-full lg:mb-[30px] m-auto">
          {media_long}
        </h3>

        {/* Tüm interaktif mantığı PortfolioTabs bileşenine devret */}
        <PortfolioTabs
          categories={data_cat?.categories}
          initialData={initial_data}
          params={params}
          readmore={readmore}
        />
      </MaxWidth>
    </section>
  );
};

export default Portfolio;
