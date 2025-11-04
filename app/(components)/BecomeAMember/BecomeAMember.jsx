import Breadcrumb from "../Breadcrumb/Breadcrumb";
import GlobalBanner from "../GlobalBanner/GlobalBanner";
import AccordionItem from "./AccordionItem";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import SharedBanner from "../GlobalBanner/SharedBanner";

const BecomeAMember = ({ data }) => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "become a member",
      link: "#",
    },
  ];

  return (
    <div className=" mb-[60px] ">
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
          className="py-[30px]  tab-content media lg:text-sm"
          dangerouslySetInnerHTML={{
            __html: `${data?.become_member_text_en}`,
          }}
        />
        {data?.faq?.length > 0 && (
          <div className={`${data?.faq?.length > 0 ? "py-[30px] " : " "}`}>
            <AccordionItem accordionItems={data?.faq} />
          </div>
        )}
        <div className="py-[0px] ">
          <Link
            href={data?.google_form}
            target="_blank"
            className=" px-[16px] py-[10px] w-fit bg-[#ec5a44] hover-effect uppercase hover:bg-white hover:text-[#ec5a44] border border-[#ec5a44] text-white rounded-[4px] font-[400] flex items-center hover:gap-[20px] gap-[10px]"
          >
            {data?.google_form_name}
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BecomeAMember;
