import {
  generateKeywordsFromWords,
  stripHTML,
} from "@/app/(components)/seo/seo";
import SupportUs from "@/app/(components)/SupportUs/SupportUs";
import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async () => {
  const support = await fetchData("support-us");
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { support, header, nac_footer, settingsData };
};

export async function generateMetadata() {
  try {
    const { settingsData, support } = await getData();
    const baseUrl = `${process.env.NEXT_DOAMIN_REAL}`;
    const logoUrl = `${support?.search_banner_src}`;
    const faviconUrl = `${settingsData?.settings?.favicon}`;
    const generatedKeywords = generateKeywordsFromWords(
      support?.support_top_title_2
    );
    const desc = stripHTML(support?.support_top_title_2);

    return {
      title: `${settingsData?.settings?.title} - ${support?.support_top_title}`,
      description: desc,
      keywords: generatedKeywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settingsData?.settings?.title} - ${support?.support_top_title}`,
        description: desc,
        keywords: generatedKeywords,
        url: `https://azcanet.ca/supportus`,
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
            alt: support?.support_top_title,
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
  const { support, header, nac_footer, settingsData } = await getData();
  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <SupportUs data={support} />
      <Footer footer={nac_footer} />
    </>
  );
}
