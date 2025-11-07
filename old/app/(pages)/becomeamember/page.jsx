import Become from "@/app/(components)/Become/Become";

import { generateKeywordsFromWords } from "@/app/(components)/seo/seo";

import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async () => {
  const become = await fetchData("become_a_member");
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { become, header, nac_footer, settingsData };
};

export async function generateMetadata() {
  try {
    const { settingsData, become } = await getData();

    const logoUrl = `${become?.become_a_member_banner_src}`;
    const faviconUrl = `${settingsData?.settings?.favicon}`;
    const generatedKeywords = generateKeywordsFromWords(
      become?.become_member_text_en
    );

    return {
      title: `${settingsData?.settings?.title} - ${become?.become_a_member_banner_title_en}`,
      description: become?.become_a_member_banner_title_en,
      keywords: generatedKeywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settingsData?.settings?.title} - ${become?.become_a_member_banner_title_en}`,
        description: become?.become_a_member_banner_title_en,
        keywords: generatedKeywords,
        url: `https://azcanet.ca/become-a-member`,
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
            alt: settingsData?.settings?.title,
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
  const { become, header, nac_footer, settingsData } = await getData();
  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <Become data={become} />
      <Footer footer={nac_footer} />
    </>
  );
}
