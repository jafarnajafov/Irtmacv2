"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import Lang from "./Lang";
import Search from "../../global_containers/Search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MaxWidth from "../../MaxWidth/MaxWidth";
const Header = ({ params, data_translate, data_footer }) => {
  const [scrolledFromTop, setScrollTop] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  const mobileRef = useRef();
  const searchParams = useSearchParams();
  const overlayDiv = useRef();
  const serachComponent = useRef();
  const searchInputRef = useRef();
  const [searchInput, setSearchInput] = useState("");
  const [openCategory, setOpenCategory] = useState(null);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const activePage = usePathname();

  const mobileHeader = [
    {
      id: 1,
      title: `${data_translate?.header_1_text}`,
      href: `/${params?.code}`,
      subMenu: null,
    },
    {
      id: 2,
      title: `${data_translate?.header_2_text}`,
      href: null,
      subMenu: [
        {
          id: 1,
          title: `${data_translate?.header_2_text}`,
          href: `/${params?.code}/haqqimizda`,
        },
        {
          id: 2,
          title: `${data_translate?.rehber}`,
          href: `/${params?.code}/rehberin-muracieti`,
        },
      ],
    },
    {
      id: 3,
      title: `${data_translate?.header_3_text}`,
      href: `/${params?.code}/telimler`,
      subMenu: null,
    },
    {
      id: 4,
      title: `${data_translate?.header_4_text}`,
      href: `/${params?.code}/telimciler`,
      subMenu: null,
    },
    {
      id: 5,
      title: `${data_translate?.header_5_text}`,
      href: null,
      subMenu: [
        {
          id: 1,
          title: `${data_translate?.header_5_text}`,
          href: `/${params?.code}/media-merkezi`,
        },
        {
          id: 2,
          title: `${data_translate?.blog}`,
          href: `/${params?.code}/xeberler`,
        },
      ],
    },
    {
      id: 6,
      title: `${data_translate?.faq_header}`,
      href: `/${params?.code}/faq`,
      subMenu: null,
    },
    {
      id: 7,
      title: `${data_translate?.header_6_text}`,
      href: `/${params?.code}/elaqe`,
      subMenu: null,
    },
  ];

  const handleOpen = (name) => () => {
    setOpenCategory((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    if (searchInput && searchInput.trim() !== "") {
      setLoading(true);
      const delay = setTimeout(() => {
        fetch(
          `${process.env.NEXT_PUBLIC_MAIN_URL}/${params?.code}/search?q=${searchInput}`
        )
          .then((res) => res.json())
          .then((data) => {
            setBlogs(data?.blogs);
            setPortfolio(data?.portfolios);
            setServices(data?.services);
          })
          .finally(() => setLoading(false));
      }, 1000);

      return () => clearTimeout(delay);
    } else {
      setLoading(false);
      setPortfolio([]);
      setServices([]);
      setBlogs([]);
    }
  }, [searchInput]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);
    }

    return function () {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
  }, []);
  function scrollHandler(event) {
    if (typeof window !== "undefined") {
      window.pageYOffset >= 50 ? setScrollTop(true) : setScrollTop(false);
    }
  }

  function openSearch() {
    const serach = serachComponent?.current?.classList;
    if (serach.contains("top-[-100%]")) {
      serach?.replace("top-[-100%]", "top-0");
      overlayDiv?.current?.classList?.add("active");
    }
    searchInputRef.current.focus();

    setSearchInput("");
  }

  function closeSearch() {
    const serach = serachComponent?.current?.classList;
    if (serach.contains("top-0")) {
      serach?.replace("top-0", "top-[-100%]");
      overlayDiv?.current?.classList?.remove("active");
    }

    setSearchInput("");
  }

  function openMobileMenu() {
    const menuClassList = mobileRef?.current?.classList;
    if (menuClassList?.contains("left-[-100%]")) {
      menuClassList?.replace("left-[-100%]", "left-0");
      overlayDiv?.current?.classList?.add("active");
      if (typeof window !== "undefined") {
        let html = document.querySelector("html");
        html.classList.add("active");
      }
    }
  }
  function closeMobileMenu() {
    const menuClassList = mobileRef?.current?.classList;
    if (menuClassList?.contains("left-0")) {
      menuClassList?.replace("left-0", "left-[-100%]");
      overlayDiv?.current?.classList?.remove("active");
      if (typeof window !== "undefined") {
        let html = document.querySelector("html");
        html.classList.remove("active");
      }
    }
    closeSearch();
  }

  useEffect(() => {
    const menuClassList = mobileRef?.current?.classList;
    if (activePage !== "/" || activePage === "/") {
      menuClassList?.replace("left-0", "left-[-100%]");
      setOpen(false);
      overlayDiv?.current?.classList?.remove("active");
    }
  }, [activePage]);

  let language;
  if (typeof window !== "undefined") {
    language = localStorage.getItem("i18nextLng");
    let html = document.querySelector("html");
    html.classList.remove("active");
  }

  const langSwitcher = async () => {
    setOpen(false);
  };
  const langs = ["az", "en", "ru"];

  const langChecker = useCallback((lang = "az") => {
    if (typeof localStorage !== "undefined") {
      return lang !== localStorage.getItem("i18nextLng");
    }
  }, []);

  const myLang = langs?.filter(langChecker);

  const createQueryString = useCallback(
    (name, value) => {
      const params =
        searchParams !== undefined
          ? new URLSearchParams(searchParams || undefined)
          : "";
      params?.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const onCodeClose = (e) => {
    if (e.keyCode === 27) {
      closeSearch();
      setPortfolio([]);
      setServices([]);
      setBlogs([]);
    } else if (e.keyCode === 13) {
      closeSearch();
      const query =
        searchInput !== undefined ? createQueryString("q", searchInput) : "";
      router.push(`/${params?.code}/search/?${query}`);
    }
  };
  const pathname = usePathname();

  return (
    <>
      <header className="bg-[#002D74]  py-[25px] 2xl:py-[10px] 2xl:h-[55px] md:h-[45px] 2xl:px-[20px] md:px-[10px] absolute top-0 left-0 right-0 h-[80px] z-[305]">
        <MaxWidth>
          <div className="flex justify-between items-center">
            <p className="text-white text-[14px] 2xl:text-[12px] md:text-[10px]">
              {data_footer?.settings?.description}
            </p>
            <div className="flex gap-[20px] items-center">
              {/* <button
                onClick={openSearch}
                className=" px-4 py-2  cursor-pointer "
              >
                <img
                  className="w-[20px]"
                  src="/header_search.svg"
                  alt="search"
                />
              </button> */}
              <div>
                <Lang
                  toggle={() => setOpen(!open)}
                  langs={langs}
                  scrolledFromTop={scrolledFromTop}
                  switchLang={
                    open && (
                      <div className="absolute  mt-6 right-[-30px] top-[8px] h-[50px] z-50   flex flex-col text-left items-center justify-center ">
                        {myLang?.map((lang, index) => (
                          <button
                            className={`z-[200] capitalize 0 text-[15px] xl:text-[13px]  transitions  overflow-hidden px-6 py-1 rounded-lg text-white`}
                            key={index}
                            onClick={() => langSwitcher(lang)}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    )
                  }
                />
              </div>
            </div>
          </div>
        </MaxWidth>
      </header>

      <header
        className={`w-full rounded-br-[20px]  rounded-bl-[20px] md:rounded-br-[0px] md:rounded-bl-[0px] left-0 right-0 header-tr z-[300] bg-[#009ADE] 
           ${
             scrolledFromTop
               ? "fixed py-[26px] top-[0px] md:py-[15px] md:px-[20px]"
               : "absolute py-[46px] top-[80px] 2xl:py-[30px] md:py-[15px] 2xl:px-[20px] 2xl:top-[54px] md:top-[45px]"
           }`}
      >
        <MaxWidth>
          <nav className="  flex justify-between  ">
            <div className="  flex items-center justify-center md:justify-between lg:pl-4 md:pl-0">
              <Link href={`/${params?.code}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_PICTURE}/${data_footer?.settings?.logob}`}
                  alt="header_logo_white"
                  className="w-[212px] 2xl:w-[120px]  object-cover"
                />
              </Link>
            </div>
            <div className="left  flex justify-start lg:hidden">
              <ul className="flex items-center gap-2 uppercase font-normal header-colors 2xl:pr-[40px] xl:pr-[0px]">
                {mobileHeader?.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li
                      key={item.id}
                      className="px-4 xl:px-2 2xl:px-2 child_li w-max trans relative text-white font-['TTForsTrial-Medium']"
                    >
                      {item?.href === null ? (
                        <h3 className="w-max text-[14px] cursor-pointer">
                          {item.title}
                        </h3>
                      ) : (
                        <Link className="w-max text-[14px]" href={item?.href}>
                          {item.title}
                        </Link>
                      )}

                      {item?.subMenu?.length > 0 && (
                        <ul className="absolute opacity-0 invisible trans child_li_ul overflow-hidden top-[28px] w-max header_border left-[-20px] z-50 bg-[#ffff] css-box-shadow rounded-[7px]">
                          {item?.subMenu?.map((cur, i) => (
                            <li
                              key={cur?.id || i}
                              className="text-[#009ade] text-[16px] px-[20px] py-[10px] hover:bg-[#009ade] trans hover:text-white"
                            >
                              <Link href={cur?.href}>{cur?.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {isActive && (
                        <span className="absolute left-[50%] translate-x-[-50%] -bottom-3 w-[48px]  h-[2px] bg-[#002D74]"></span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <Link
                href={`/${params?.code}/telimciler`}
                className="bg-[#fff] py-[15px] 2xl:py-[8px] lg:hidden px-[36px] text-[16px] uppercase text-[#002D74] font-['TTForsTrial-Medium'] rounded-[60px]"
              >
                {data_translate?.header_4_text}
              </Link>
            </div>

            <div className=" items-center hidden lg:flex">
              <div
                onClick={openMobileMenu}
                className="burger hidden lg:block mobile_header_open"
              >
                <RxHamburgerMenu className="text-[25px] text-white cursor-pointer" />
              </div>
            </div>
          </nav>
        </MaxWidth>
      </header>
      <header
        ref={mobileRef}
        className="mobile-menu fixed top-0 pt-28 pl-16 left-[-100%] z-[1000] h-full w-[400px] md:w-full bg-white trans  "
      >
        <p
          onClick={closeMobileMenu}
          className="absolute top-10 right-10 cursor-pointer"
        >
          <IoMdClose className="text-[20px]" />
        </p>
        <ul className="flex flex-col gap-2">
          {mobileHeader &&
            mobileHeader?.map((cur, i) => {
              return (
                <li
                  key={i}
                  onClick={handleOpen(cur?.title)}
                  className="relative"
                >
                  {cur?.href === null ? (
                    <h3 className=" flex text-[17px] capitalize items-center gap-2 cursor-pointer trans hover:text-[#003B71]">
                      {cur?.title}
                      <span>
                        {openCategory === cur?.title ? (
                          <FaChevronUp className="text-sm" />
                        ) : (
                          <FaChevronDown className="text-sm" />
                        )}
                      </span>
                    </h3>
                  ) : (
                    <Link
                      className="text-[17px] capitalize trans hover:text-[#003B71]"
                      href={`${cur?.href}`}
                    >
                      {cur?.title}
                    </Link>
                  )}
                  {cur?.subMenu !== null && (
                    <ul
                      className={`trans gap-3 ${
                        openCategory === cur?.title
                          ? "flex visible h-full flex-col mt-3  ml-2  mb-3 "
                          : " invisible h-0"
                      }`}
                    >
                      {cur &&
                        openCategory === cur?.title &&
                        cur?.subMenu?.map((elem, i) => {
                          return (
                            <li
                              className="cursor-pointer trans hover:text-[#003B71]"
                              key={i}
                            >
                              <Link
                                href={`${elem?.href}`}
                                className="flex h-full w-full capitalize text-[17px]"
                              >
                                {elem?.title}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </li>
              );
            })}
        </ul>
      </header>
      <div
        ref={serachComponent}
        className="fixed top-[-100%] left-0 right-0 w-full bg-white  py-6 z-[500] trans "
      >
        <div className="relative mx-8 lg:mx-3">
          <span className="absolute top-3 left-4">
            <img src="/search-lg.svg" alt="search" />
          </span>
          <input
            value={searchInput}
            ref={searchInputRef}
            onKeyUp={(e) => onCodeClose(e)}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={data_translate?.search}
            type="text"
            className="w-full border border-[#E9ECF4] rounded-full py-3 pl-12 pr-10 shadow-none outline-none"
          />
          <span
            onClick={closeSearch}
            className="absolute top-[18px] right-4 cursor-pointer"
          >
            <img src="/close.svg" alt="close" />
          </span>
        </div>
        <Search
          notFound={!portfolio?.length && !services?.length && !blogs?.length}
          loading={loading}
          inputValue={searchInput}
          portfolio={portfolio}
          services={services}
          blogs={blogs}
          closeSearch={closeSearch}
          netice={data_translate?.netice}
          params={params}
        />
      </div>
      <div
        onClick={closeMobileMenu}
        ref={overlayDiv}
        className="mobile-menu-overlay overflow-x-hidden block fixed left-0 top-0 bottom-0 right-0 z-[100] overlay "
      />
    </>
  );
};

export default Header;
