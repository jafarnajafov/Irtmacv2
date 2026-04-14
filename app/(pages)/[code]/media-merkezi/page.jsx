import Portfolio from "@/app/(components)/containers/Portfolio/Portfolio";
import Footer from "@/app/(components)/layout/Footer/Index";
import Header from "@/app/(components)/layout/Header/Index";
import {
  fetchData,
  fetchFooterSettings,
  fetchTranslations,
} from "@/app/fetch/GlobalFetch";

// Portfolyo verilerini kategori ID'sine ve sayfaya göre çeken yeni bir yardımcı fonksiyon
const fetchPortfolioByCategory = async (lang, categoryId, page = 1) => {
  if (!categoryId) return null; // Kategori ID'si yoksa veri çekme
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_MAIN_URL}/${lang}/portfolio/${categoryId}?page=${page}`,
      { cache: "no-store" } // veya revalidate süresi belirleyebilirsiniz
    );
    if (!res.ok) {
      throw new Error("Failed to fetch portfolio data");
    }
    return res.json();
  } catch (error) {
    console.error("fetchPortfolioByCategory Error:", error);
    return null; // Hata durumunda null dön
  }
};

const getData = async (params) => {
  const data_footer = await fetchFooterSettings(params?.code);
  const data_translate = await fetchTranslations(params?.code);
  const data_kateqoriya = await fetchData(
    params?.code,
    "portfolio-kateqoriyalari"
  );

  // İlk kategorinin ID'sini al
  const firstCategoryId = data_kateqoriya?.categories?.[0]?.id;

  // İlk kategorinin portfolyo verilerini sunucuda çek
  const initial_portfolio_data = await fetchPortfolioByCategory(
    params?.code,
    firstCategoryId
  );

  return {
    data_footer,
    data_translate,
    data_kateqoriya,
    initial_portfolio_data, // Çekilen ilk veriyi de döndür
  };
};

export async function generateMetadata({ params }) {
  const data = await fetchFooterSettings(params?.code);
  return {
    title: data?.settings?.title,
    description: data?.settings?.description,
    icons: {
      icon: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.favicon}`,
      apple: `${process.env.NEXT_PUBLIC_PICTURE}/${data?.settings?.favicon}`,
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
  const {
    data_footer,
    data_translate,
    data_kateqoriya,
    initial_portfolio_data, // Veriyi burada al
  } = await getData(params);

  return (
    <>
      <Header
        params={params}
        data_translate={data_translate}
        data_footer={data_footer}
      />
      <Portfolio // Portfolio bileşenine yeni veriyi de gönder
        data_cat={data_kateqoriya}
        initial_data={initial_portfolio_data}
        portfolio={data_translate?.portfolio}
        media_long={data_translate?.media_long}
        params={params?.code}
        readmore={data_translate?.readmore}
      />
      <Footer data={data_footer} params={params} />
    </>
  );
}
