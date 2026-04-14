"use client"; // Bu bileşen interaktif olduğu için "use client" olarak işaretlenmeli

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import PortfolioItem from "./PortfolioItem";
import Pagination from "../../global_containers/Pagination";
import { toSlug } from "../../global_containers/Convert";

// Bu bileşen artık tüm interaktifliği yönetiyor
const PortfolioTabs = ({ categories, initialData, params, readmore }) => {
  const [alldata, setData] = useState(initialData); // Başlangıç verisini sunucudan al
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories?.[0]?.id
  );
  const [page, setPage] = useState(1);
  const isInitialMount = useRef(true); // İlk render'ı takip etmek için bir ref

  useEffect(() => {
    // Bu useEffect'in ilk render'da çalışmasını engelliyoruz,
    // çünkü ilk veri zaten sunucudan geldi.
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Sadece kategori veya sayfa değiştiğinde yeni veri çek
    if (selectedCategoryId !== null) {
      fetch(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/${params}/portfolio/${selectedCategoryId}?page=${page}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [selectedCategoryId, page, params]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleTabChange = (index) => {
    const newCategoryId = categories?.[index]?.id;
    setSelectedCategoryId(newCategoryId);
    setPage(1); // Sekme değiştiğinde her zaman 1. sayfaya dön
  };

  return (
    <Tabs className="lg:px-4" onChange={handleTabChange}>
      <TabList className="flex justify-center lg:flex-col flex-wrap items-center mb-10 gap-6">
        {categories?.map((cur, i) => (
          <Tab
            key={i}
            className="py-[10px] px-[34px] text-[16px] border lg:w-full rounded-[60px] border-[#009ade] transition-all"
            _selected={{ color: "white", bg: "#009ade" }}
          >
            {cur?.title}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {categories?.map((cur, i) => (
          <TabPanel key={cur?.id || i} p={0}>
            <div className="grid grid-cols-12 gap-[24px]">
              {alldata?.portfolios?.map((item, i) => {
                const slug = toSlug(item?.title);
                return (
                  <PortfolioItem
                    key={item?.id || i}
                    id={item?.id}
                    href={`/${params}/media-merkezi/${item?.id}/${slug}`}
                    title={item?.title}
                    img={`${process.env.NEXT_PUBLIC_PICTURE}/${item?.image}`}
                    readmore={readmore}
                    tag={item?.tag}
                  />
                );
              })}
            </div>
            {alldata?.total_pages > 1 && (
              <Pagination
                totalPage={alldata?.total_pages}
                currentPage={page}
                onPageChange={handlePageChange}
              />
            )}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default PortfolioTabs;
