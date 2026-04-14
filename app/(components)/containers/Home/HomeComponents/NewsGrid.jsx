import NewsItem from "../../News/NewsItem";

const NewsGrid = ({ data, params, news_title, readmore }) => {
  return (
    <div className="grid grid-cols-12 gap-6 pt-10">
      {data?.map((cur, i) => {
        return (
          <NewsItem
            key={i}
            id={i}
            href={`${params?.code}/xeberler/${cur?.id}/${cur?.slug}`}
            img={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.cover}`}
            tagName={cur?.tagname}
            data={cur?.fakedate}
            name={cur?.name}
            text={cur?.text}
            news_title={news_title}
            readmore={readmore}
          />
        );
      })}
    </div>
  );
};

export default NewsGrid;
