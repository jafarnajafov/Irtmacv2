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
  const data_kateqoriya_item = await fetchData(params?.code, `p/${params?.id}`);
  return { data_footer, data_translate, data_kateqoriya_item };
};

export async function generateMetadata({ params }) {
  const data = await fetchData(params?.code, `p/${params?.id}`);

  return {
    title: `RIGHTWELLTON - ${data?.portfolio?.title}`,
    description: data?.portfolio?.text,
    icons: {
      icon: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.favicon}`, // Dinamik favicon URL-i
      apple: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.favicon}`, // Əgər apple-touch-icon da eynidirsə
    },
    openGraph: {
      title: data?.portfolio?.name,
      description: data?.portfolio?.meta_descrtextiption,
      url: `/logo.png`,
      siteName: "irtmac.az",
      images: [
        {
          url: `/logo.png`,
          secure_url: `/logo.png`,
          width: 800,
          height: 400,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  const { data_footer, data_translate, data_kateqoriya_item } = await getData(
    params
  );
  return (
    <>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <PortfolioSingle
        params={params}
        data={data_kateqoriya_item}
        problem_1={data_translate?.problem_1}
        problem_2={data_translate?.problem_2}
        portfolio_1={data_translate?.portfolio_1}
        portfolio_2={data_translate?.portfolio_2}
        portfolio_3={data_translate?.portfolio_3}
        portfolio_4={data_translate?.portfolio_4}
        portfolio_5={data_translate?.portfolio_5}
        portfolio_6={data_translate?.portfolio_6}
        portfolio_7={data_translate?.portfolio_7}
        otherWorks={data_translate?.otherWorks}
        showmore={data_translate?.showmore}
        readmore={data_translate?.readmore}
      />
      <Footer data={data_footer} params={params} />
    </>
  );
}
