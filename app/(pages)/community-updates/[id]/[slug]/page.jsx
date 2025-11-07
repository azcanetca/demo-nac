import ComunutySlug from "@/app/(components)/CommunityUpdates/ComunutySlug";

export async function generateMetadata({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/community/${params?.id}/${params?.slug}`
  );
  const data = await response.json();

  const removeHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };

  const cleanedDescription2 = removeHtmlTags(data?.comunity?.intro_text_en);

  return {
    title: `Community Updates - ${data?.comunity?.title_en}`,
    description: cleanedDescription2,
    openGraph: {
      title: `Community Updates - ${data?.comunity?.title_en}`,
      description: cleanedDescription2,
      url: `https://azcanet.ca/media/${params?.id}/${params?.slug}`,
      siteName: "azcanet.ca",
      images: [
        {
          url: `${data?.comunity?.src?.[0]?.src}`,
          secure_url: `${data?.comunity?.src?.[0]?.src}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  return <ComunutySlug params={params} />;
}
