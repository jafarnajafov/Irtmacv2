import CompnayShows from "@/app/(components)/containers/CompnayShows/CompnayShows";
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
  const data_kiv = await fetchData(params?.code, `kiv`);
  return { data_footer, data_translate, data_kiv };
};
export async function generateMetadata({ params }) {
  const data = await fetchFooterSettings(params?.code);

  return {
    title: data?.settings?.title,
    description: data?.settings?.description,
    icons: {
      icon: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.favicon}`, // Dinamik favicon URL-i
      apple: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.favicon}`, // Əgər apple-touch-icon da eynidirsə
    },
    openGraph: {
      title: data?.settings?.title,
      description: data?.settings?.meta_description,
      url: "https://irtmac.az/",
      siteName: "irtmac.az",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.logo}`,
          secure_url: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.logo}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  const { data_footer, data_translate, data_kiv } = await getData(params);
  return (
    <>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <CompnayShows
        data={data_kiv}
        download={data_translate?.download}
        companytab1={data_translate?.companytab1}
        companytab2={data_translate?.companytab2}
        companytab3={data_translate?.companytab3}
      />
      <Footer data={data_footer} params={params} />
    </>
  );
}
