import CommunityUpdates from "@/app/(components)/CommunityUpdates/CommunityUpdates";

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/community`);
  const data = await response.json();

  const removeHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };
  const cleanedDescription = removeHtmlTags(data?.comunity?.[0]?.intro_text_en);

  return {
    title: `Community Updates - ${data?.comunity?.[0]?.title_en}`,
    description: cleanedDescription,
    openGraph: {
      title: `Community Updates - ${data?.comunity?.[0]?.title_en}`,
      description: cleanedDescription,
      url: "https://azcanet.ca/community-updates",
      siteName: "azcanet.ca",
      images: [
        {
          url: `${data?.comunity?.[0]?.src?.[0]?.src}`,
          secure_url: `${data?.comunity?.[0]?.src?.[0]?.src}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page() {
  return <CommunityUpdates />;
}
