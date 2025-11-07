import CurrentIsuses from "@/app/(components)/CurrentIsuses/CurrentIsuses";
import {
  generateKeywordsFromWords,
  stripHTML,
} from "@/app/(components)/seo/seo";

import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async (params) => {
  const current = await fetchData(
    `current-isuses/${params?.id}/${params?.slug}`
  );
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { current, header, nac_footer, settingsData };
};

export async function generateMetadata({ params }) {
  try {
    const { settingsData, current } = await getData(params);
    const baseUrl = `${process.env.NEXT_DOAMIN_REAL}`;
    const logoUrl = `${current?.data?.image}`;
    const faviconUrl = `${settingsData?.settings?.favicon}`;
    const generatedKeywords = generateKeywordsFromWords(current?.data?.text_en);
    const desc = stripHTML(current?.data?.text_en);

    return {
      title: `${settingsData?.settings?.title} - ${current?.data?.title_en}`,
      description: desc,
      keywords: generatedKeywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settingsData?.settings?.title} - ${current?.data?.title_en}`,
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
            alt: current?.data?.title_en,
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

export default async function page({ params }) {
  const { current, header, nac_footer, settingsData } = await getData(params);
  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <CurrentIsuses params={params} data={current?.data} />
      <Footer footer={nac_footer} />
    </>
  );
}
