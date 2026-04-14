import Bredcump from "../../global_containers/Bredcump";
import MaxWidth from "../../MaxWidth/MaxWidth";
import NewsGallery from "./NewsGallery";
import NewsItem from "./NewsItem";

const BlogItem = ({
  data,
  random_blogs,
  params,
  other_blogs,
  count1,
  showmore2,
  news_title,
  copy1,
  params1,
  share,
}) => {
  return (
    <>
      <section className="mt-[250px] 2xl:mt-[200px] lg:mt-[180px] md:mt-[120px] lg:px-[20px] mb-[100px]">
        <MaxWidth>
          <h3 className="text-[#003B71] font-semibold text-[32px] lg:text-[20px] text-center mb-10 lg:mb-0 ">
            {data?.name}
          </h3>
          <div
            className="text-[#002d74] text-[18px] lg:text-[15px] lg:mt-[30px] text-center"
            dangerouslySetInnerHTML={{
              __html: `${data?.text}`,
            }}
          />
          {data?.images?.length > 0 && <NewsGallery images={data?.images} />}

          <div className="mt-[60px]">
            <Bredcump
              name={other_blogs}
              href={`${params?.code}/xeberler`}
              longtext={count1}
            />
            <div className="grid grid-cols-12 gap-6 pt-10">
              {random_blogs?.map((cur, i) => {
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
                    href={`/${params}/xeberler/${cur?.id}/${cur?.slug}`}
                    img={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.cover}`}
                    tagName={cur?.tagname}
                    data={blogFullDate}
                    name={cur?.name}
                    text={cur?.text}
                    readmore={showmore2}
                    news_title={news_title}
                    show={true}
                    copy1={copy1}
                    params1={params1}
                    share={share}
                  />
                );
              })}
            </div>
          </div>
        </MaxWidth>
      </section>
    </>
  );
};

export default BlogItem;
