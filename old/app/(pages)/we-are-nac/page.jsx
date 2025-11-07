import {
  generateKeywordsFromWords,
  stripHTML,
} from "@/app/(components)/seo/seo";
import WeAreNac from "@/app/(components)/WeAreNAc/WeAreNac";
import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async () => {
  const wearewnac = await fetchData("wearewnac");
  const wearewnac_meta = await fetchData("wearewnac-meta");
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { wearewnac, wearewnac_meta, header, nac_footer, settingsData };
};

export async function generateMetadata() {
  try {
    const { settingsData, wearewnac_meta } = await getData();
    const baseUrl = `${process.env.NEXT_DOAMIN_REAL}`;
    const logoUrl = `${wearewnac_meta?.picture}`;
    const faviconUrl = `${settingsData?.settings?.favicon}`;
    const generatedKeywords = generateKeywordsFromWords(
      wearewnac_meta?.description
    );
    const desc = stripHTML(wearewnac_meta?.description);

    return {
      title: `${settingsData?.settings?.title} - ${wearewnac_meta?.title}`,
      description: desc,
      keywords: generatedKeywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settingsData?.settings?.title} - ${wearewnac_meta?.title}`,
        description: desc,
        keywords: generatedKeywords,
        url: `https://azcanet.ca/we-are-nac`,
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
            alt: wearewnac_meta?.title,
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

export default async function page() {
  const { wearewnac, header, nac_footer, settingsData } = await getData();
  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <WeAreNac wearewnac={wearewnac} />
      <Footer footer={nac_footer} />
    </>
  );
}
