import MaxWidth from "../../MaxWidth/MaxWidth";
import "./bootstrap.css";

const About = ({ data }) => {
  return (
    <>
      <section className="mb-20 mt-[250px] 2xl:mt-[200px] lg:mt-[150px] md:mt-[120px] lg:px-[20px]">
        <MaxWidth>
          <div className="flex flex-col ">
            <h3 className="text-[#002d74] text-[36px] xl:text-[25px] md:text-[20px]  mb-10 md:mb-[10px] font-bold text-center">
              {data?.haqqimizda?.title}
            </h3>
            <h3 className="text-[#002d74] text-[24px] xl:text-[18px] md:text-[14px] mb-10 text-center">
              {data?.haqqimizda?.text2}
            </h3>
          </div>
          <div className="flex flex-wrap  justify-center ">
            {data?.meqsedler?.map((cur, i) => {
              return (
                <div
                  key={i}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12 p-[15px] md:p-0 md:mb-[20px]"
                >
                  <div className="p-[40px] xl:p-[20px] text-[#003B71] h-full bg-[#f0f6f9] rounded-[20px]">
                    <div
                      className="font-semibold mb-3 text-[24px] xl:text-[18px] text-[#003b71]"
                      dangerouslySetInnerHTML={{ __html: `${cur?.name1}` }}
                    />

                    <h6 className="text-[14px] lg:text-[12px]">{cur?.name2}</h6>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="my-[80px] md:my-[30px] text-center text-[24px] xl:text-[18px] md:text-[15px] text-[#002d74]"
            dangerouslySetInnerHTML={{ __html: `${data?.haqqimizda?.text}` }}
          />
        </MaxWidth>
      </section>
    </>
  );
};

export default About;
