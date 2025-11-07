import VolunterAtNac from "@/app/(components)/VolunterAtNac/VolunterAtNac";

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/volunter_nac`);
  const data = await response.json();

  const removeHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };
  const cleanedDescription = removeHtmlTags(data?.volunteer_banner_title_en);

  return {
    title: `Volunteer At Nac - ${data?.volunteer_banner_m_text_en}`,
    description: cleanedDescription,
    openGraph: {
      title: `Volunteer At Nac - ${data?.volunteer_banner_m_text_en}`,
      description: cleanedDescription,
      url: "https://azcanet.ca/volunter-at-nac",
      siteName: "azcanet.ca",
      images: [
        {
          url: `${data?.volunteer_banner_src}`,
          secure_url: `${data?.volunteer_banner_src}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page() {
  return <VolunterAtNac />;
}
