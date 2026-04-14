import BlogResults from "./SearchResults/BlogResults";
import PortfolioResults from "./SearchResults/PortfolioResults";
import ServiceResults from "./SearchResults/ServiceResults";
import SearchSpinner from "./SearchSpinner";


const Search = ({
  notFound,
  loading,
  inputValue,
  portfolio,
  services,
  blogs,
  closeSearch,
  netice,
  params,
}) => {
  return (
    <div>
      {loading && <SearchSpinner />}
      {!loading && notFound && inputValue?.trim() !== "" && (
        <p className="px-2 py-4  text-black w-full flex items-center justify-center  font-semibold">
          {netice}
        </p>
      )}
      {(!!blogs.length || !!portfolio.length || !!services.length) && (
        <ul
          className={`flex flex-col mt-4  ${
            portfolio?.length < 4 && services?.length < 4 && blogs?.length < 4
              ? ""
              : "h-[250px] overflow-y-scroll"
          }`}
        >
          <PortfolioResults
            params={params}
            portfolio={portfolio}
            closeSearch={closeSearch}
          />
          <BlogResults
            params={params}
            blogs={blogs}
            closeSearch={closeSearch}
          />

          <ServiceResults
            params={params}
            services={services}
            closeSearch={closeSearch}
          />
        </ul>
      )}
    </div>
  );
};

export default Search;
