import WeAreNac from "@/app/(components)/WeAreNAc/WeAreNac";
export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/wearewnac-meta`);
  const data = await response.json();

  const removeHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };
  const cleanedDescription = removeHtmlTags(data?.description);

  return {
    title: `We Are Nac - ${data?.title}`,
    description: cleanedDescription,
    openGraph: {
      title: data?.title,
      description: cleanedDescription,
      url: "https://azcanet.ca/we-are-nac",
      siteName: "azcanet.ca",
      images: [
        {
          url: `${data?.picture}`,
          secure_url: `${data?.picture}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}
export default async function page() {
  return <WeAreNac />;
}
