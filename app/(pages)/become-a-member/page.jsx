import BecomeAMember from "@/app/(components)/BecomeAMember/BecomeAMember";

export async function generateMetadata() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/become-a-member`
  );
  const data = await response.json();

  const removeHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  };
  const cleanedDescription = removeHtmlTags(data?.become_member_text_en);

  return {
    title: `Become A Member - ${data?.become_a_member_banner_title_en}`,
    description: cleanedDescription,
    openGraph: {
      title: `Become A Member - ${data?.become_a_member_banner_title_en}`,
      description: cleanedDescription,
      url: "https://azcanet.ca/become-a-member",
      siteName: "azcanet.ca",
      images: [
        {
          url: `${data?.become_a_member_banner_src}`,
          secure_url: `${data?.become_a_member_banner_src}`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page() {
  return <BecomeAMember />;
}
