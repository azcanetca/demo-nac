import MediaClientComponent from "@/app/(components)/Media/MediaClientComponent";
import MediaClientComponent_two from "@/app/(components)/Media/MediaClientComponent_two";
import Share from "@/app/(components)/Share/Share";
import Loading from "@/app/loading";

export async function generateMetadata({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/media/${params?.id}/${params?.slug}`
  );
  const data = await response.json();

  const removeHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };

  const cleanedDescription2 = removeHtmlTags(data?.take?.intro_text_en);

  return {
    title: `Media - ${data?.media?.title_en}`,
    description: cleanedDescription2,
    openGraph: {
      title: `Media - ${data?.media?.title_en}`,
      description: cleanedDescription2,
      url: `https://azcanet.ca/media/${params?.id}/${params?.slug}`,
      siteName: "azcanet.ca",
      images: [
        {
          url: `${data?.media?.src?.[0]?.src}`,
          secure_url: `${data?.media?.src?.[0]?.src}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/media/${params?.id}/${params?.slug}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  if (!data || !data?.random_media) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <MediaClientComponent params={params} data={data} />
      <div className="tab-content px-[100px] py-[50px] 2xl:px-[50px] lg:px-[20px] media">
        <div
          dangerouslySetInnerHTML={{
            __html: data?.media?.text_en && data?.media?.text_en,
          }}
        ></div>
        <MediaClientComponent_two data={data} params={params} />
      </div>
    </>
  );
}
