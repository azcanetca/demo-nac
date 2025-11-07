import CurrentIsuses from "@/app/(components)/CurrentIsuses/CurrentIsuses";

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/current-isuses`);
  const data = await response.json();

  const removeHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };
  const cleanedDescription = removeHtmlTags(data?.currentctg?.[0]?.text_en);

  return {
    title: `Current Isuses - ${data?.currentctg?.[0]?.name_en}`,
    description: cleanedDescription,
    openGraph: {
      title: `Current Isuses - ${data?.currentctg?.[0]?.name_en}`,
      description: cleanedDescription,
      url: "https://azcanet.ca/current-isuses",
      siteName: "azcanet.ca",
      images: [
        {
          url: `${data?.currentIsuses}`,
          secure_url: `${data?.currentIsuses}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page({params}) {
  return <CurrentIsuses params={params} />;
}
