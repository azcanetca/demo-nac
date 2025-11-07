import {
  generateKeywordsFromWords,
  stripHTML,
} from "@/app/(components)/seo/seo";
import VolunterAtNac from "@/app/(components)/VolunterAtNac/VolunterAtNac";
import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async () => {
  const volunter_nac = await fetchData("volunter_nac");
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { volunter_nac, header, nac_footer, settingsData };
};

export async function generateMetadata() {
  try {
    const { settingsData, volunter_nac } = await getData();
    const baseUrl = `${process.env.NEXT_DOAMIN_REAL}`;
    const logoUrl = `${volunter_nac?.volunteer_banner_src}`;
    const faviconUrl = `${settingsData?.settings?.favicon}`;
    const generatedKeywords = generateKeywordsFromWords(
      volunter_nac?.volunteer_banner_title_en
    );
    const desc = stripHTML(volunter_nac?.volunteer_banner_title_en);

    return {
      title: `${settingsData?.settings?.title} - ${volunter_nac?.volunteer_banner_m_text_en}`,
      description: desc,
      keywords: generatedKeywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settingsData?.settings?.title} - ${volunter_nac?.volunteer_banner_m_text_en}`,
        description: desc,
        keywords: generatedKeywords,
        url: `https://azcanet.ca/volunter-at-nac`,
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
            alt: volunter_nac?.volunteer_banner_m_text_en,
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
  const { volunter_nac, header, nac_footer, settingsData } = await getData();
  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <VolunterAtNac data={volunter_nac} />
      <Footer footer={nac_footer} />
    </>
  );
}
