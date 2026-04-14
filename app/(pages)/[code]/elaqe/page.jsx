import Contact from "@/app/(components)/containers/Contact/Contact";
import Footer from "@/app/(components)/layout/Footer/Index";
import Header from "@/app/(components)/layout/Header/Index";
import {
  fetchFooterSettings,
  fetchTranslations,
} from "@/app/fetch/GlobalFetch";

const getData = async (params) => {
  const data_footer = await fetchFooterSettings(params?.code);
  const data_translate = await fetchTranslations(params?.code);

  return { data_footer, data_translate };
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
  const { data_footer, data_translate } = await getData(params);
  return (
    <>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <Contact
        contact={data_translate?.contact}
        contact_1={data_translate?.contact_1}
        adSoyad_1={data_translate?.adSoyad}
        mesaj_1={data_translate?.mesaj}
        sending_1={data_translate?.sending}
        send_1={data_translate?.send}
        phones_1={data_translate?.phones_1}
        emails_1={data_translate?.email}
        map_1={data_translate?.map}
        contact_text_2={data_translate?.contact_text_2}
        contact_text_3={data_translate?.contact_text_3}
        contact_text_4={data_translate?.contact_text_4}
        contact_text_5={data_translate?.contact_text_5}
        settingsNumber={data_footer?.settings?.number}
        settingsEmail={data_footer?.settings?.email}
        seetingsAdress={data_footer?.settings?.adresslang}
        map={data_footer?.settings?.map}
        grafig={data_footer?.settings?.grafig}
      />
      <Footer data={data_footer} params={params} />
    </>
  );
}
