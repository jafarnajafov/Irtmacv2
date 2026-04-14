import BlogItem from "@/app/(components)/containers/News/BlogItem";
import PortfolioSingle from "@/app/(components)/containers/Portfolio/PortfolioSingle";
import Footer from "@/app/(components)/layout/Footer/Index";
import Header from "@/app/(components)/layout/Header/Index";
import {
  fetchData,
  fetchFooterSettings,
  fetchTranslations,
} from "@/app/fetch/GlobalFetch";

const getData = async (params) => {
  const data_footer = await fetchFooterSettings(params?.code);
  const data_translate = await fetchTranslations(params?.code);
  const blogs = await fetchData(
    params?.code,
    `media/${params?.id}/${params?.slug}`
  );
  return { data_footer, data_translate, blogs };
};

export async function generateMetadata({ params }) {
  const { data_footer, data_translate, blogs } = await getData(params);
  return {
    title: `${data_footer?.settings?.title}- ${blogs?.blog?.name}`,
    description: blogs?.blog?.text,
    icons: {
      icon: `${process.env.NEXT_PUBLIC_PICTURE}/${data_footer?.settings?.favicon}`, // Dinamik favicon URL-i
      apple: `${process.env.NEXT_PUBLIC_PICTURE}/${data_footer?.settings?.favicon}`, // Əgər apple-touch-icon da eynidirsə
    },
    openGraph: {
      title: `${data_footer?.settings?.title}- ${blogs?.blog?.name}`,
      description: blogs?.blog?.text,
      url: `${process.env.NEXT_PUBLIC_SITE_NAME}/${params?.code}/xeberler/${params.id}`,
      siteName: "irtmac.az",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_PICTURE}/${blogs?.blog?.cover}`,
          secure_url: `${process.env.NEXT_PUBLIC_PICTURE}/${blogs?.blog?.cover}`,
          width: 800,
          height: 400,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  const { data_footer, data_translate, blogs } = await getData(params);
  return (
    <>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <PortfolioSingle
        params={params?.code}
        media={blogs?.media}
        random={blogs?.randomedia}
        header_5_text={data_translate?.header_5_text}
        media_long={data_translate?.media_long}
        readmore={data_translate?.readmore}
      />
      <Footer data={data_footer} params={params} />
    </>
  );
}
