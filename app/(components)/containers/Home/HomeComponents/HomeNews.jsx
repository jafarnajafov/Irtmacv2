import Bredcump from "@/app/(components)/global_containers/Bredcump";
import NewsGrid from "./NewsGrid";
import MaxWidth from "@/app/(components)/MaxWidth/MaxWidth";

const HomeNews = ({
  data,
  blog,
  params,
  showmore,
  count1,
  news_title,
  readmore,
}) => {
  return (
    <section className="mb-[80px]  lg:px-[20px]">
      <MaxWidth>
        <Bredcump
          name={blog}
          href={`/${params?.code}/xeberler`}
          seeall={showmore}
          longtext={count1}
        />
        <NewsGrid
          data={data}
          params={params}
          news_title={news_title}
          readmore={readmore}
        />
      </MaxWidth>
    </section>
  );
};

export default HomeNews;
