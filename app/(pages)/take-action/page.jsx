import TakeAction from "@/app/(components)/TakeAction/TakeAction";

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/take`);
  const data = await response.json();

  const removeHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };
  const cleanedDescription = removeHtmlTags(data?.take_action?.take_action_banner_title_en);
  const cleanedDescription2 = removeHtmlTags(data?.take?.[0]?.intro_text_en);

  return {
    title: `Take Action - ${cleanedDescription}`,
    description: cleanedDescription2,
    openGraph: {
      title: `Take Action - ${cleanedDescription}`,
      description: cleanedDescription2,
      url: "https://azcanet.ca/take-action",
      siteName: "azcanet.ca",
      images: [
        {
          url: `${data?.take_action?.take_action_banner_src}`,
          secure_url: `${data?.take_action?.take_action_banner_src}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page() {
  return <TakeAction />;
}
