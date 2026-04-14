import MaxWidth from "../../MaxWidth/MaxWidth";
import SharedTabs from "../../global_containers/Tabs/Tabs";

const TabContent = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>Bu bölüm üçün içerik bulunamadı.</p>;
  }

  return (
    <div className="flex flex-col border border-[#009ade] rounded-[20px] overflow-hidden col-span-12">
      {items?.map((item, index) => (
        <div
          key={item.id}
          className={`grid grid-cols-12 ${
            index !== items.length - 1 ? "border-b border-[#009ade]" : ""
          }`}
        >
          <div className="col-span-2 py-[40px] px-[40px] lg:py-[15px] lg:px-[10px] md:px-[3px] md:py-[25px] flex justify-center items-center bg-[#f0f6f9] border-r border-[#009ade]">
            {item?.name && (
              <p className="text-[16px] lg:text-[12px]">{item.name}</p>
            )}
          </div>

          <div className="col-span-8 flex justify-start items-center pl-[20px] lg:pl-[5px] md:py-[10px] md:px-[10px]  border-r border-[#009ade]">
            <div
              className="text-[16px] text-[#002d74] lg:text-[12px]"
              dangerouslySetInnerHTML={{ __html: `${item?.text}` }}
            />
          </div>

          <div className="col-span-2 flex justify-center items-center">
            {item.text2 && (
              <p className="text-[16px] text-[#002d74] lg:text-[12px]">
                {item.text2}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const InstructionsSlug = ({ data }) => {
  const tabsData = data?.alt_menu?.map((tabItem) => ({
    id: tabItem.id,
    name: tabItem.text,
    content: <TabContent items={tabItem.alt_menu} />,
  }));

  return (
    <section className=" mb-[80px] mt-[250px] 2xl:mt-[200px] lg:mt-[150px] md:mt-[120px] min-h-[60vh] lg:px-[20px]">
      <MaxWidth>
        <h3 className="text-center text-[36px] lg:text-[20px] text-[#002d74] font-['TTForsTrial-Bold']">
          {data?.title}
        </h3>
        <div className="mt-[40px] lg:mt-[20px]">
          <SharedTabs
            tabs={tabsData}
            activeColor={`text-[#fff] bg-[#009ade]`}
            nonActiveColor={`text-[#002d74] border border-[#009ade]`}
            h2Class="text-[16px] md:text-[14px] py-[11px] px-[73px] md:px-[20px] md:py-[6px] rounded-[60px]"
            activeTabClass={`bg-[#009ade] rounded-[60px] text-[#002d74]`}
            customStyle={`flex items-center w-max m-auto`}
          />
        </div>
      </MaxWidth>
    </section>
  );
};

export default InstructionsSlug;
