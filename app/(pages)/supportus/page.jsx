import SupportUs from "@/app/(components)/SupportUs/SupportUs";

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/settings`);
  const data = await response.json();

  return {
    title: `${data?.settings?.title} - Support Us`,
    description: data?.settings?.description,
    openGraph: {
      title: `${data?.settings?.title} - Support Us`,
      description: data?.settings?.meta_description,
      url: "https://azcanet.ca/supportus",
      siteName: "azcanet.ca",
      images: [
        {
          url: `${data?.settings?.headerlogo}`,
          secure_url: `${data?.settings?.headerlogo}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page() {
  return <SupportUs />;
}
