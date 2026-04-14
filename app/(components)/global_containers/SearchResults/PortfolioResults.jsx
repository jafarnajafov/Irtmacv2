import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleScrollToBottom } from "../../handleScrollToBottom/handleScrollToBottom";

const PortfolioResults = ({ portfolio, closeSearch, params }) => {
  const doubleClick = () => {
    closeSearch;
    handleScrollToBottom();
  };

  const path = usePathname();


  

  return (
    <>
      {portfolio &&
        portfolio?.map((cur, i) => {
          return (
            <li
              onClick={doubleClick}
              key={i}
              className=" hover:bg-[#F7F7FA] trans mb-1 px-3 test"
            >
              <Link
                href={`/${params?.code}/p/${cur?.id}`}
                className={`flex w-full h-full py-3 items-center gap-4 ${
                  path === `/${params?.code}/search`
                    ? "border-b border-[#C5CEE0] justify-between"
                    : ""
                }`}
              >
                <div
                  className={`${
                    path === `/${params?.code}/search` ? "hidden " : ""
                  }`}
                >
                  <span className="block pr-4">
                    <img src="/search-lg.svg" alt="search" />
                  </span>
                </div>
                <h3 className="font-medium capitalize lg:text-sm">
                  {cur?.title}
                </h3>
                {/* <span className={`${path === "/search" ? "" : "hidden"}`}>
                  <img src="/right-2.svg" alt="" />
                </span> */}
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default PortfolioResults;
