"use client";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { SlideshowLightbox } from "lightbox.js-react";
import VideoSingle from "./VideoSingle";

const CompnayShows = ({
  data,
  companytab1,
  companytab2,
  companytab3,
  download,
}) => {
  const saveFile = (src) => {
    saveAs(src);
  };

  return (
    <>
      <section className="pt-16 min-h-[72vh] mb-20 lg:pt-10 max-w-[1580px] px-12  2xl:max-w-[1380px] xl:max-w-[1150px]  m-auto lg:px-4">
        <Tabs className="">
          <TabList className=" flex justify-center lg:flex-col items-center mb-10 gap-6 lg:gap-2">
            <Tab
              className="py-3 px-14 border border-[#003B71] transition-all lg:w-full"
              _selected={{ color: "white", bg: "#003B71" }}
            >
              {companytab1}
            </Tab>
            <Tab
              className="py-3 px-14  border border-[#003B71] transition-all lg:w-full"
              _selected={{ color: "white", bg: "#003B71" }}
            >
              {companytab2}
            </Tab>
            <Tab
              className="py-3 px-14  border border-[#003B71] transition-all lg:w-full"
              _selected={{ color: "white", bg: "#003B71" }}
            >
              {companytab3}
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <div className="grid grid-cols-12 gap-6">
                {data?.tab1 &&
                  data?.tab1?.map((cur, i) => {
                    return (
                      <div
                        key={i}
                        className="col-span-4 lg:col-span-6 md:col-span-12"
                      >
                        <div className="relative  overflow-hidden trans !cursor-zoom-in">
                          <SlideshowLightbox className="!cursor-zoom-in">
                            <img
                              src={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.image}`}
                              alt={cur?.id}
                              className="img-fluid !h-[245px] "
                            />
                          </SlideshowLightbox>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-12 gap-6">
                {data?.tab3 &&
                  data?.tab3?.map((cur, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          saveFile(
                            `${process.env.NEXT_PUBLIC_PICTURE}/${cur?.file}`
                          );
                        }}
                        className="col-span-3 lg:col-span-4 md:col-span-12 border border-[#E7EFF7] services_group h-full bg-[#E7EFF7]"
                      >
                        <div className=" py-8 px-8 lg:py-4 lg:px-4 flex items-start flex-col text-[#003B71] relative overflow-hidden top ">
                          <h4 className="font-medium text-2xl lg:text-xl mb-3">
                            {cur?.name1}
                          </h4>
                          <p className="lg:text-sm text-start">{cur?.name2}</p>
                          <img
                            src="/absolute_pic.svg"
                            className="absolute top-0 right-[-100%] h-full"
                            alt="absolute_pic"
                          />
                        </div>
                        <div className="bg-[#fff]  flex  py-3 px-8 w-full justify-between items-center bottom">
                          <h3 className=" text-[#003B71] capitalize">
                            {download}
                          </h3>
                          <img src="/download-black.svg" alt="download" />
                          <img
                            src="/download.svg"
                            className="hidden"
                            alt="download"
                          />
                        </div>
                      </button>
                    );
                  })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-12 gap-6">
                {data?.tab2 &&
                  data?.tab2?.map((cur, i) => {
                    return (
                      <VideoSingle
                        key={i}
                        picture={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.image}`}
                        item={cur}
                      />
                    );
                  })}
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </>
  );
};

export default CompnayShows;
