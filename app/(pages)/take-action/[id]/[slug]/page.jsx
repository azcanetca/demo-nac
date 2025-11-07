import TakeActionItem from "@/app/(components)/TakeAction/TakeActionItem";

export async function generateMetadata({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/take-action/${params?.id}/${params?.slug}`
  );
  const data = await response.json();

  const removeHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };
  
  const cleanedDescription2 = removeHtmlTags(data?.take?.intro_text_en);

  return {
    title: `Take Action - ${data?.take?.title_en}`,
    description: cleanedDescription2,
    openGraph: {
      title: `Take Action - ${data?.take?.title_en}`,
      description: cleanedDescription2,
      url: `https://azcanet.ca/take-action/${params?.id}/${params?.slug}`,
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

export default async function page({ params }) {
  return <TakeActionItem params={params} />;
}
