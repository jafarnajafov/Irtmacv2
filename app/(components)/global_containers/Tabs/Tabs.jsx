// components/global_containers/Tabs/Tabs.jsx

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SharedTabs = ({
  tabs, // Yeni prop: [{ id, name, content }, ...] şeklinde bir dizi
  customStyle,
  h2Class,
  activeTabClass,
  activeColor,
  nonActiveColor,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0); // Artık index'i tutuyoruz
  const [sliderStyle, setSliderStyle] = useState({
    width: 0,
    left: 0,
    height: 0,
    opacity: 0,
  });

  // Her bir sekme butonu için bir ref dizisi oluşturuyoruz
  const tabRefs = useRef([]);
  const tabsContainerRef = useRef(null);

  const updateSlider = useCallback(() => {
    if (!tabsContainerRef.current) return;

    const activeTabElement = tabRefs.current[activeTabIndex];

    if (activeTabElement) {
      setSliderStyle({
        width: activeTabElement.offsetWidth,
        left: activeTabElement.offsetLeft,
        height: activeTabElement.offsetHeight,
        opacity: 1,
      });
    } else {
      // Eğer aktif sekme bulunamazsa slider'ı gizle
      setSliderStyle({ width: 0, left: 0, height: 0, opacity: 0 });
    }
  }, [activeTabIndex]);

  // Aktif sekme değiştiğinde veya bileşen ilk yüklendiğinde slider'ı güncelle
  useEffect(() => {
    const timer = setTimeout(() => {
      updateSlider();
    }, 50); // DOM'un güncellenmesi için küçük bir gecikme
    return () => clearTimeout(timer);
  }, [updateSlider]);

  // Pencere boyutu değiştiğinde slider'ı yeniden hesapla
  useEffect(() => {
    window.addEventListener("resize", updateSlider);
    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, [updateSlider]);

  // Eğer gösterilecek sekme yoksa, bileşeni hiç render etme
  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col ">
      <div className={`${customStyle}`} ref={tabsContainerRef}>
        <div className="flex items-center justify-center relative  gap-[24px]">
          <div className="flex items-center justify-center relative gap-[24px] lg:gap-0  lg:flex-col">
            {tabs?.map((tab, index) => (
              <button
                key={tab?.id || index}
                ref={(el) => (tabRefs.current[index] = el)} // Ref'i diziye ata
                onClick={() => setActiveTabIndex(index)}
                className={`lg:mb-[10px] ${h2Class} ${
                  activeTabIndex === index ? activeColor : nonActiveColor
                } relative z-10  transition-colors duration-300 ease-in-out`}
              >
                {tab?.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sekme İçeriklerini Dinamik Olarak Oluşturma */}
      <div className="mt-[40px] lg:mt-[20px]">
        {tabs?.map((tab, index) => (
          <div
            key={tab?.id || index}
            className={`transition-all duration-500 ease-in-out grid grid-cols-12 borders ${
              activeTabIndex === index
                ? "opacity-100 visible"
                : "opacity-0 max-h-0 invisible overflow-hidden"
            }`}
          >
            {tab?.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharedTabs;
