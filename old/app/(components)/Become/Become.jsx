import Link from "next/link";
import SharedBanner from "../GlobalBanner/SharedBanner";

const Become = ({ data }) => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "Become a member",
      link: "#",
    },
  ];
  return (
    <div>
      <div className="pt-[68px] md:pt-[63px] bg-gray-50">
        <SharedBanner
          images={data?.become_a_member_banner_src}
          pageNames={pageNames}
          title_en={data?.become_a_member_banner_title_en}
          imgClass={`h-[380px] md:h-[280px]`}
          justify="justify-start lg:items-start "
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div
          className=" tab-content media md:text-sm pt-[30px]"
          dangerouslySetInnerHTML={{
            __html: `${data?.become_member_text_en}`,
          }}
        />
        <div className="mb-[40px]">
          <Link
            href={`${data?.google_form}`}
            target="_blank"
            className="bg-[#ec5a44] rounded-[6px] px-[30px] py-[10px] text-[15px] text-white"
          >
            {data?.google_form_name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Become;
