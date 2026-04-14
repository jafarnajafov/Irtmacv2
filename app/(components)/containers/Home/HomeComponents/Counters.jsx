import MaxWidth from "@/app/(components)/MaxWidth/MaxWidth";

const Counters = ({ data }) => {
  const numbersCard = [
    {
      id: 1,
      text: data?.stat1,
      title: data?.name1,
    },
    {
      id: 2,
      text: data?.stat2,
      title: data?.name2,
    },
    {
      id: 3,
      text: data?.stat3,
      title: data?.name3,
    },
    {
      id: 4,
      text: data?.stat4,
      title: data?.name4,
    },
  ];

  return (
    <section className="mt-[80px] md:mt-[40px] lg:px-[20px]">
      <MaxWidth>
        <div className="grid grid-cols-12 gap-[60px] lg:gap-0">
          <div className="col-span-6 lg:col-span-12 flex flex-col justify-center ">
            <h3 className="mb-6 font text-[36px] 2xl:text-[25px] md:text-[18px] text-[#003B71]">
              {data?.title}
            </h3>
            <p className="text-[#003B71] text-[14px] md:text-[12px]">
              {data?.text}
            </p>
          </div>
          <div className="col-span-6 lg:col-span-12 counts mt-10">
            <ul className="grid grid-cols-12 bg-[#009ADE] rounded-[30px] p-[40px] 2xl:p-[20px] box-s">
              {numbersCard?.map((cur, i) => (
                <li
                  key={cur?.id || i}
                  className={`col-span-6  flex flex-col items-center justify-center py-[40px] md:py-[20px]  border-solid border-[#002D742a]
  ${i < 2 ? "border-b" : ""}
  ${i % 2 === 0 ? "border-r" : ""}`}
                >
                  <p className="text-[#fff] font-['TTForsTrial-Bold'] text-[64px] 2xl:text-[40px] md:text-[20px]">
                    {cur?.text}
                  </p>
                  <span className="text-[#fff] text-[16px]">{cur?.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default Counters;
