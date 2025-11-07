import HomePage from "./(components)/HomePage/HomePage";

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/settings`);
  const data = await response.json();

  return {
    title: data?.settings?.seo_head_title_1,
    description: data?.settings?.seo_head_title_2,
    keywords: data?.settings?.seo_head_title_3,
    openGraph: {
      title: data?.settings?.seo_head_title_1,
      description: data?.settings?.seo_head_title_2,
      keywords: data?.settings?.seo_head_title_3,
      url: "https://azcanet.ca",
      siteName: data?.settings?.seo_head_title_1,
      images: [
        {
          url: `${data?.settings?.headerlogo}`,
          secure_url: `${data?.settings?.headerlogo}`,
          width: 200,
          height: 200,
        },
      ],
    },
  };
}

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/banner`, {
    cache: "no-store",
  });
  const data = await res.json();

  return <HomePage data={data} />;
}
