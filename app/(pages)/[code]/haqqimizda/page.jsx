import {
  fetchData,
  fetchFooterSettings,
  fetchTranslations,
} from "@/app/fetch/GlobalFetch";

import Header from "@/app/(components)/layout/Header/Index";
import About from "@/app/(components)/containers/About/About";
import Footer from "@/app/(components)/layout/Footer/Index";

const getData = async (params) => {
  const data_footer = await fetchFooterSettings(params?.code);
  const data_translate = await fetchTranslations(params?.code);
  const data_about = await fetchData(params?.code, "about_company");
  return { data_footer, data_translate, data_about };
};

export async function generateMetadata({ params }) {
  const { data_footer, data_about } = await getData(params);

  return {
    title: `${data_footer?.settings?.title} - ${data_about?.haqqimizda?.title}`,
    description: data_footer?.settings?.description,
    icons: {
      icon: "/fav.png",
      apple: "/fav.png",
    },
    openGraph: {
      title: `${data_footer?.settings?.title} - ${data_about?.haqqimizda?.title}`,
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
  const { data_footer, data_translate, data_about } = await getData(params);

  return (
    <>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <About data={data_about} />
      <Footer data={data_footer} params={params} />
    </>
  );
}
