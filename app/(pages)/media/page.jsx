import MediaPage from "@/app/(components)/Media/MediaPage";

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/media-meta`);
  const data = await response.json();

  const removeHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };
  const cleanedDescription = removeHtmlTags(data?.media_text_en);

  return {
    title: `Media - ${data?.media_title_en}`,
    description: cleanedDescription,
    openGraph: {
      title: `Media - ${data?.media_title_en}`,
      description: cleanedDescription,
      url: "https://azcanet.ca/media",
      siteName: "azcanet.ca",
      images: [
        {
          url: `${data?.media_src}`,
          secure_url: `${data?.media_src}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page() {
  return <MediaPage />;
}
