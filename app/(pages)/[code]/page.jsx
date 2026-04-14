import {
  fetchData,
  fetchFooterSettings,
  fetchTranslations,
} from "@/app/fetch/GlobalFetch";

import FirstComponent from "@/app/(components)/containers/Home/HomeComponents/FirstComponent";
import HomeLogos from "@/app/(components)/containers/Home/HomeComponents/Logos";
import Counters from "@/app/(components)/containers/Home/HomeComponents/Counters";
import HomeVideo from "@/app/(components)/containers/Home/HomeComponents/HomeVideo";
import Appeal from "@/app/(components)/containers/Home/HomeComponents/Appeal";
import HomeServices from "@/app/(components)/containers/Home/HomeComponents/HomeServices";
import HomeNews from "@/app/(components)/containers/Home/HomeComponents/HomeNews";
import Trainers from "@/app/(components)/containers/Trainers/Trainers";
import Customers from "@/app/(components)/containers/Customers/Customers";
import Header from "@/app/(components)/layout/Header/Index";
import Footer from "@/app/(components)/layout/Footer/Index";

export async function generateMetadata({ params }) {
  const data = await fetchFooterSettings(params?.code);
  const baseUrl = "https://irtmac.az/";
  const pictureBaseUrl = process.env.NEXT_PUBLIC_PICTURE;
  const logoUrl = `${pictureBaseUrl}/${data?.settings?.logo}`;
  const faviconUrl = `${pictureBaseUrl}/${data?.settings?.favicon}`;

  return {
    title: data?.settings?.title,
    description: data?.settings?.description,
    icons: {
      icon: faviconUrl, // Dinamik favicon URL-i
      apple: faviconUrl, // Əgər apple-touch-icon da eynidirsə
    },
    openGraph: {
      title: data?.settings?.title,
      description: data?.settings?.meta_description,
      url: baseUrl,
      siteName: "irtmac.az",
      images: [
        {
          url: logoUrl, // Dinamik logo URL-i
          secure_url: logoUrl, // Dinamik logo URL-i
          width: 600,
          height: 600,
        },
      ],
    },
  };
}
const getData = async (params) => {
  const data_footer = await fetchFooterSettings(params?.code);
  const data_translate = await fetchTranslations(params?.code);
  const data_main = await fetchData(params?.code, "main_page");
  return { data_footer, data_translate, data_main };
};

export default async function page({ params }) {
  const { data_footer, data_translate, data_main } = await getData(params);
  return (
    <>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <FirstComponent data={data_main?.slayder_translate} />
      <HomeLogos data={data_main?.partnyorlar} />

      <Counters data={data_main?.statistika_translate} />

      <HomeVideo
        data={data_main?.video_bolmnesi}
        params={params?.code}
        readmore={data_translate?.readmore}
      />

      <HomeServices
        params={params}
        data={data_main?.xidmetler}
        data_translate={data_translate}
      />
      <Trainers
        trainers_short={data_translate?.trainers_short}
        trainers_long={data_translate?.trainers_long}
        data={data_main?.telimciler}
        seemore={data_translate?.showmore}
        params={params?.code}
      />
      <Appeal data={data_main?.xidmetler} data_translate={data_translate} />
      <Customers
        customers={data_main?.reyler}
        customers_text={data_translate?.customers}
        customers_long={data_translate?.customers_long}
      />
      <HomeNews
        data={data_main?.xeberler}
        blog={data_translate?.blog}
        params={params}
        showmore={data_translate?.showmore}
        count1={data_translate?.count1}
        news_title={data_translate?.news_title}
        readmore={data_translate?.readmore}
      />
      <Footer
        data={data_footer}
        params={params}
        footer_text={data_translate?.footer_text}
      />
    </>
  );
}
