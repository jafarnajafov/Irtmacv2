import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useState } from "react";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const Lang = ({ toggle, switchLang, langs, scrolledFromTop }) => {
  const [language, setLanguage] = useState("az");
  const [selectedLangs, setSelectedLangs] = useState([]);
  const router = useRouter();
  const pathname = usePathname();

  // URL'den veya LocalStorage'dan dili belirle
  useEffect(() => {
    const pathLang = pathname.split("/")[1];
    const savedLang = localStorage.getItem("irtmac") || "az";
    const validLang = langs.includes(pathLang) ? pathLang : savedLang;

    if (validLang !== language) {
      setLanguage(validLang);

      localStorage.setItem("irtmac", validLang);
    }
  }, [pathname, language, langs]);

  // Seçilen dili filtrele
  useEffect(() => {
    setSelectedLangs(langs.filter((lang) => lang !== language));
  }, [language, langs]);

  // Dil değiştir ve URL'yi güncelle
  const langSwitcher = async (lang) => {
    setLanguage(lang);
    localStorage.setItem("irtmac", lang);

    // URL'deki mevcut path'i koruyarak sadece dili değiştir
    const currentPath = pathname.split("/").slice(2).join("/") || "";
    router.replace(`/${lang}/${currentPath}`);
    toggle(false);
  };

  return (
    <div className="relative text-white px-4 py-1 md:px-1 ">
      <div
        onClick={toggle}
        className="flex items-center cursor-pointer justify-center"
      >
        <button className={` capitalize text-[18px] md:text-[14px]`}>
          {language}
        </button>
        <p className="flex pl-3">
          <FaAngleDown className="w-[25px] h-[14px]" />
        </p>
      </div>
      {switchLang && (
        <div className="absolute mt-6 md:mt-0 top-[3.2rem] left-[-19px] lg:left-[-10px] md:left-[-30px] md:top-[35px] z-[100] flex flex-col text-left overflow-hidden items-center justify-center bg-[#fff] box-shadow2  ">
          {selectedLangs?.map((lang, index) => (
            <button
              className="z-[50] capitalize text-[18px] text-[#002D74] border border-[#f4f6f6] lang_border gap-[12px] n  langText xl:text-[13px] hover:bg-[--orange] services_card_link shaodo11  py-3   trans  w-[110px] flex justify-center items-center lg:w-[88px] "
              key={index}
              onClick={() => langSwitcher(lang)}
            >
              {lang}
              <span>
                <Image
                  src={"/lang.svg"}
                  width={15}
                  height={15}
                  className="object-cover"
                  alt="lang"
                />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lang;
