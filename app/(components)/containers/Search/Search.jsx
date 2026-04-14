"use client";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import PortfolioResults from "../../global_containers/SearchResults/PortfolioResults";
import BlogResults from "../../global_containers/SearchResults/BlogResults";
import ServiceResults from "../../global_containers/SearchResults/ServiceResults";

const SearchPage = ({ params, found, found2 }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const searchParams = useSearchParams();
  const query = searchParams?.get("q");

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_MAIN_URL}/${params?.code}/search?q=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data?.blogs);
        setPortfolio(data?.portfolios);
        setServices(data?.services);
      });
  }, [query]);

  return (
    <section className={`min-h-[70vh] px-16 mb-24 pt-20 lg:pt-10 lg:px-6 `}>
      <div className="search_page relative pl-4 ">
        <div className="flex items-center text-[#003B71] text-2xl">
          <h3 className="font-medium pr-3">"{query}"</h3>
          <p>{found}</p>
        </div>
        <div className="flex flex-col gap-2 text-2xl text-[#003B71]">
          <div className="flex items-center gap-2">
            <p>
              {(blogs && blogs?.length) +
                (portfolio && portfolio?.length) +
                (services && services?.length)}
            </p>
            <p>{found2}</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <ul className="flex flex-col w-[80%] lg:w-full">
          <PortfolioResults portfolio={portfolio} params={params} />
          <BlogResults blogs={blogs} params={params} />

          <ServiceResults services={services} params={params} />
        </ul>
      </div>
    </section>
  );
};

export default SearchPage;
