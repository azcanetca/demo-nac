import Statements from "@/app/(components)/Statements/Statements";

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/statements`);
  const data = await response.json();

  const removeHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };
  const cleanedDescription = removeHtmlTags(data?.data?.[0]?.text_en);

  return {
    title: `Statements - ${data?.statements_banner_title_en}`,
    description: cleanedDescription,
    openGraph: {
      title: `Statements - ${data?.statements_banner_title_en}`,
      description: cleanedDescription,
      url: "https://azcanet.ca/statements",
      siteName: "azcanet.ca",
      images: [
        {
          url: `${data?.statements_banner_src}`,
          secure_url: `${data?.statements_banner_src}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page() {
  return <Statements />;
}
