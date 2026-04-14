import Link from "next/link";

const Certificats = ({ sertifikatlar, data, showpdf }) => {
  return (
    <>
      <section className="pt-20 min-h-[90vh] px-12 lg:pt-10 mb-24 max-w-[1580px]  2xl:max-w-[1380px] xl:max-w-[1150px]  m-auto  lg:px-4">
        <h3 className="text-[#003B71] font-bold text-3xl mb-10 text-center">
          {sertifikatlar}
        </h3>
        <div className="grid grid-cols-12 gap-4 ">
          {data?.sertifikat?.map((cur, i) => (
            <div
              key={i}
              className="col-span-4 lg:col-span-6 md:col-span-12 certificats "
            >
              <div className="bg-[#E7EFF7] p-8 relative hover:bg-[#003B71] transition-all h-full">
                <h3 className="capitalize text-[#5B748D] text-xl mb-6 shortText">
                  {cur?.name1}
                </h3>
                <p className="text-[#003B71] font-medium longText  w-[70%]">
                  {cur?.name2}
                </p>
                <Link
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.file}`}
                  className="absolute w-max flex certificats_btn
            items-center gap-3 capitalize text-[#003B71] font-medium bottom-5 transition-all right-5 bg-white py-3 px-6 opacity-0 invisible"
                >
                  {showpdf}
                  <span>
                    <img src="/eve-svg.svg" alt="eve" />
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

export default Certificats;
