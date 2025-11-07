import StatmentsSlig from "@/app/(components)/Statements/StatmentsSlig";

export async function generateMetadata({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/statements/${params?.id}/${params?.slug}`
  );
  const data = await response.json();

  const removeHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };
  const cleanedDescription = removeHtmlTags(data?.statements?.text_en);

  return {
    title: `Statements - ${data?.statements?.title_en}`,
    description: cleanedDescription,
    openGraph: {
      title: `Statements - ${data?.statements?.title_en}`,
      description: cleanedDescription,
      url: "https://azcanet.ca/statements",
      siteName: "azcanet.ca",
      images: [
        {
          url: `${data?.statements.src?.[0]?.src}`,
          secure_url: `${data?.statements.src?.[0]?.src}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  return <StatmentsSlig params={params} />;
}
