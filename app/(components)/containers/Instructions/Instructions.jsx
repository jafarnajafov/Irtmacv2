import ServicesGroups from "../../global_containers/ServicesGroups";
import MaxWidth from "../../MaxWidth/MaxWidth";

const Instructions = ({ data, params, readmore, newText, header_3_text }) => {
  return (
    <section className=" mt-[250px] 2xl:mt-[200px] lg:mt-[150px] md:mt-[140px] mb-[80px] min-h-[60vh] lg:px-[20px]">
      <h3 className="text-center text-[36px] lg:text-[25px] text-[#002d74] font-['TTForsTrial-Bold']">
        {header_3_text}
      </h3>
      <MaxWidth>
        <ServicesGroups
          data={data}
          params={params}
          readmore={readmore}
          news={newText}
        />
      </MaxWidth>
    </section>
  );
};

export default Instructions;
