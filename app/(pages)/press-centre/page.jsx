import PressCentre from "@/app/(components)/PressCentre/PressCentre";
import {
  generateKeywordsFromWords,
  stripHTML,
} from "@/app/(components)/seo/seo";
import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async (page, category) => {
  const params = new URLSearchParams();
  params.append("page", page);

  if (category) {
    params.append("category", category);
  }
  const nac_press_center = await fetchData(
    `nac_press_center?${params.toString()}`
  );
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { nac_press_center, header, nac_footer, settingsData };
};

export async function generateMetadata() {
  try {
    const { settingsData, nac_press_center } = await getData();
    const baseUrl = `${process.env.NEXT_DOAMIN_REAL}`;
    const logoUrl = `${nac_press_center?.src}`;
    const faviconUrl = `${settingsData?.settings?.favicon}`;
    const generatedKeywords = generateKeywordsFromWords(
      nac_press_center?.media?.[0]?.text_en
    );
    const desc = stripHTML(nac_press_center?.media?.[0]?.text_en);

    return {
      title: `${settingsData?.settings?.title} - ${nac_press_center?.press_centre}`,
      description: desc,
      keywords: generatedKeywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settingsData?.settings?.title} - ${nac_press_center?.press_centre}`,
        description: desc,
        keywords: generatedKeywords,
        url: `https://azcanet.ca/press-centre`,
        siteName: `${process.env.NEXT_DOAMIN_REAL}`,
        type: "website",
        image: logoUrl,
        images: [
          {
            url: logoUrl,
            secure_url: logoUrl,
            width: 300,
            height: 300,
            type: "image/webp",
            alt: nac_press_center?.press_centre,
          },
        ],
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}

export default async function Page({ searchParams }) {
  const currentPage = searchParams?.page || "1";
  const currentCategory = searchParams?.category || "";

  const { nac_press_center, header, nac_footer, settingsData } = await getData(
    currentPage,
    currentCategory
  );

  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <PressCentre data={nac_press_center} />
      <Footer footer={nac_footer} />
    </>
  );
}
