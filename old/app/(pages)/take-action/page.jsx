import {
  generateKeywordsFromWords,
  stripHTML,
} from "@/app/(components)/seo/seo";
import TakeAction from "@/app/(components)/TakeAction/TakeAction";
import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async () => {
  const nac_take = await fetchData(`nac_take`);
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { nac_take, header, nac_footer, settingsData };
};

export async function generateMetadata() {
  try {
    const { settingsData, nac_take } = await getData();
    const baseUrl = `${process.env.NEXT_DOAMIN_REAL}`;
    const logoUrl = `${nac_take?.take_action?.take_action_banner_src}`;
    const faviconUrl = `${settingsData?.settings?.favicon}`;
    const generatedKeywords = generateKeywordsFromWords(
      nac_take?.take_action?.take_action_banner_title_en
    );

    return {
      title: `${settingsData?.settings?.title} - ${nac_take?.take_action?.take_action}`,

      keywords: generatedKeywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settingsData?.settings?.title} - ${nac_take?.take_action?.take_action}`,

        keywords: generatedKeywords,
        url: `https://azcanet.ca/take-action`,
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
            alt: nac_take?.take_action?.take_action,
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
  const { nac_take, header, nac_footer, settingsData } = await getData();
  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <TakeAction data={nac_take} />
      <Footer footer={nac_footer} />
    </>
  );
}
