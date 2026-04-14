import {
  fetchData,
  fetchFooterSettings,
  fetchTranslations,
} from "@/app/fetch/GlobalFetch";

import Header from "@/app/(components)/layout/Header/Index";

import Footer from "@/app/(components)/layout/Footer/Index";
import Instructions from "@/app/(components)/containers/Instructions/Instructions";

const getData = async (params) => {
  const data_footer = await fetchFooterSettings(params?.code);
  const data_translate = await fetchTranslations(params?.code);
  const data_telim = await fetchData(params?.code, "telimler");
  return { data_footer, data_translate, data_telim };
};

export async function generateMetadata({ params }) {
  const { data_footer, data_translate } = await getData(params);

  return {
    title: `${data_footer?.settings?.title} - ${data_translate?.header_3_text}`,
    description: data_footer?.settings?.description,
    icons: {
      icon: `${process.env.NEXT_PUBLIC_PICTURE}/${data_footer?.settings?.favicon}`, // Dinamik favicon URL-i
      apple: `${process.env.NEXT_PUBLIC_PICTURE}/${data_footer?.settings?.favicon}`, // Əgər apple-touch-icon da eynidirsə
    },
    openGraph: {
      title: `${data_footer?.settings?.title} - ${data_translate?.header_3_text}`,
      description: data_footer?.settings?.meta_description,
      url: "https://irtmac.az/",
      siteName: "irtmac.az",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_PICTURE}/${data_footer?.settings?.logo}`,
          secure_url: `${process.env.NEXT_PUBLIC_PICTURE}/${data_footer?.settings?.logo}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  const { data_footer, data_translate, data_telim } = await getData(params);

  return (
    <>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <Instructions
        data={data_telim}
        header_3_text={data_translate?.header_3_text}
        params={params}
        readmore={data_translate?.readmore}
        newText={data_translate?.new}
      />
      <Footer data={data_footer} params={params} />
    </>
  );
}
