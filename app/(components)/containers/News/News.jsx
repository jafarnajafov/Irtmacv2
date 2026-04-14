import BredcumPages from "../../global_containers/BredcumPages";
import NewsItem from "./NewsItem";
import Pagination from "../../global_containers/Pagination";
import MaxWidth from "../../MaxWidth/MaxWidth";
const News = ({
  params,
  count1,
  blogs,
  pagination,
  header_13_text,
  showmore,
  news_title,
}) => {
  return (
    <>
      <section className=" mt-[250px] 2xl:mt-[200px] lg:mt-[180px] md:mt-[120px] lg:px-[20px] mb-[100px] ">
        <MaxWidth>
          <BredcumPages name={header_13_text} longtext={count1} />
          <div className="grid grid-cols-12 gap-6 pt-10">
            {blogs?.map((cur, i) => {
              const blogDate = cur?.created_at;
              let date = new Date(blogDate);
              let blogFullDate =
                date?.getDate() +
                "." +
                date?.getMonth() +
                "." +
                date?.getFullYear();
              return (
                <NewsItem
                  id={i}
                  key={i}
                  href={`/${params?.code}/xeberler/${cur?.id}/${cur?.slug}`}
                  img={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.cover}`}
                  tagName={cur?.tagname}
                  data={blogFullDate}
                  name={cur?.name}
                  text={cur?.text}
                  readmore={showmore}
                  news_title={news_title}
                />
              );
            })}
          </div>
          {pagination && pagination?.last_page > 1 && (
            <Pagination
              totalPage={pagination?.last_page}
              currentPage={pagination?.current_page}
              basePath={`/${params?.code}/xeberler`}
            />
          )}
        </MaxWidth>
      </section>
    </>
  );
};

export default News;
