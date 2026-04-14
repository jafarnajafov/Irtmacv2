
import Bredcump from "../../global_containers/Bredcump";
import ServiceItem from "./ServiceItem";


const ServiceSingle = ({ params, data, otherServices, showmore, readmore }) => {
  return (
    <section className=" pt-20  lg:py-3 lg:pt-10 mb-20 max-w-[1580px] px-12 2xl:max-w-[1380px] xl:max-w-[1150px]  m-auto  lg:px-4">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6 lg:col-span-12">
          <div className="flex flex-col">
            <h3 className="text-[#003B71] text-3xl lg:text-xl pb-6">
              {data?.xidmet?.title}
            </h3>
            <div
              className="lg:text-sm"
              dangerouslySetInnerHTML={{
                __html: data?.xidmet?.description,
              }}
            ></div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-12">
          {data.xidmet?.title1 !== null &&
            data.xidmet?.title2 !== null &&
            data.xidmet?.title3 !== null &&
            data.xidmet?.title4 !== null && (
              <div className="grid grid-cols-12 gap-4">
                <div
                  className={`col-span-6 lg:col-span-12 px-6 lg:px-3 py-6 lg:py-3 ${
                    data.xidmet?.title1 !== null
                      ? " border border-[#E1251B]"
                      : ""
                  } text-[#003B71] flex items-start flex-col justify-center`}
                >
                  {data?.xidmet?.title1 !== null && (
                    <h6 className="font-medium pb-3 text-xl lg:text-lg ">
                      {data?.xidmet?.title1}
                    </h6>
                  )}
                  {data?.xidmet?.text1 !== null && (
                    <p className="lg:text-sm ">{data?.xidmet?.text1}</p>
                  )}
                </div>
                <div
                  className={`col-span-6 lg:col-span-12 px-6 lg:px-3 py-6 lg:py-3 ${
                    data.xidmet?.title1 !== null
                      ? " border border-[#E1251B]"
                      : ""
                  } text-[#003B71] flex items-start flex-col justify-center`}
                >
                  {data?.xidmet?.title2 !== null && (
                    <h6 className="font-medium pb-3 text-xl lg:text-lg ">
                      {data?.xidmet?.title2}
                    </h6>
                  )}
                  {data?.xidmet?.text2 !== null && (
                    <p className="lg:text-sm">{data?.xidmet?.text2}</p>
                  )}
                </div>
                <div
                  className={`col-span-6 lg:col-span-12 px-6 lg:px-3 py-6 lg:py-3 ${
                    data.xidmet?.title1 !== null
                      ? " border border-[#E1251B]"
                      : ""
                  } text-[#003B71] flex items-start flex-col justify-center`}
                >
                  {data?.xidmet?.title3 !== null && (
                    <h6 className="font-medium pb-3 text-xl lg:text-lg">
                      {data?.xidmet?.title3}
                    </h6>
                  )}
                  {data?.xidmet?.text3 !== null && (
                    <p className="lg:text-sm">{data?.xidmet?.text3}</p>
                  )}
                </div>
                <div
                  className={`col-span-6 lg:col-span-12 px-6 lg:px-3 py-6 lg:py-3 ${
                    data.xidmet?.title1 !== null
                      ? " border border-[#E1251B]"
                      : ""
                  } text-[#003B71] flex items-start flex-col justify-center`}
                >
                  {data?.xidmet?.title4 !== null && (
                    <h6 className="font-medium pb-3 text-xl lg:text-lg">
                      {data?.xidmet?.title4}
                    </h6>
                  )}
                  {data?.xidmet?.text4 !== null && (
                    <p className="lg:text-sm">{data?.xidmet?.text4}</p>
                  )}
                </div>
              </div>
            )}
        </div>
      </div>
      <div
        className={`grid grid-cols-12 gap-4 ${
          data?.relatedServicedata?.length ? "pt-20" : ""
        }`}
      >
        {data?.relatedServicedata &&
          data?.relatedServicedata?.map((cur, i) => {
            return (
              <div
                key={i}
                className="col-span-4 lg:col-span-6 md:col-span-12 px-6 lg:px-3 py-6 lg:py-3 border border-[#003B71] text-[#003B71] bg-[#E7EFF7]"
              >
                <h6 className="font-semibold pb-3 text-xl lg:text-lg text-[#E1251B]">
                  {cur?.name}
                </h6>
                <div
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    __html: cur?.text,
                  }}
                ></div>
              </div>
            );
          })}
      </div>
      <div className=" pt-20 pb-20  ">
        <div className="mb-10">
          <Bredcump
            name={otherServices}
            href={`/${params?.code}/xidmetler`}
            seeall={showmore}
          />
        </div>
        <div className="grid grid-cols-12 gap-6  ">
          {data?.randomxidmet?.map((cur, i) => {
            return (
              <ServiceItem
                id={i}
                key={i}
                href={`/${params?.code}/x/${cur?.id}`}
                title={cur?.title}
                newService={cur?.new}
                desc={cur?.short_desc}
                readmore={readmore}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSingle;
