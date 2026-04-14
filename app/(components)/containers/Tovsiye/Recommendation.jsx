import Link from "next/link";

const Recommendation = ({ data, tovsiye, showpdf }) => {
  return (
    <>
      <section className="pt-20 min-h-[75vh] mb-16 px-12 lg:pt-10 max-w-[1580px]  2xl:max-w-[1380px] xl:max-w-[1150px]  m-auto  lg:px-4">
        <h3 className="text-[#003B71] font-bold text-3xl lg:text-2xl mb-10 text-center">
          {tovsiye}
        </h3>
        <div className="grid grid-cols-12 gap-4 ">
          {data?.tovsiyemektup &&
            data?.tovsiyemektup?.map((cur, i) => (
              <div
                key={i}
                className="col-span-4 lg:col-span-6 md:col-span-12 recommendation"
              >
                <div className="bg-[#E7EFF7] p-8 relative hover:bg-[#003B71] transition-all">
                  <h3 className="capitalize text-[#5B748D] text-xl mb-6 shortText">
                    {cur?.name1}
                  </h3>
                  <div className="text-[#003B71] longText">
                    <h5 className="font-medium text-xl">{cur?.name2}</h5>
                    <p className="uppercase">{cur?.name3}</p>
                  </div>
                  <Link
                    target="_blank"
                    href={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.file}`}
                    className="absolute w-max flex certificats_btn
          items-center gap-3 capitalize text-[#003B71] font-medium bottom-5 transition-all right-5 bg-white py-3 px-6 opacity-0 invisible"
                  >
                    {showpdf}
                    <span>
                      <img src="/eve-svg.svg" alt="svg" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Recommendation;
