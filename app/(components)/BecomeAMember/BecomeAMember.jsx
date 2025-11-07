"use client";

import Loading from "@/app/loading";
import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import GlobalBanner from "../GlobalBanner/GlobalBanner";
import AccordionItem from "./AccordionItem";
import Transition from "../Transition/Transition";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const BecomeAMember = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/become-a-member`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

  if (loading || !data) return <Loading />;

  return (
    <>
      <Transition>
        <div className="mb-4 mt-16">
          <Breadcrumb pageNames={pageNames} />
          <GlobalBanner
            longtext={data?.become_a_member_banner_title_en}
            bgColor={data?.section_bg}
            images={data?.become_a_member_banner_src}
          />
        </div>
        <div
          className="py-[30px] px-[100px] 2xl:px-[50px] lg:px-[20px] tab-content media lg:text-sm"
          dangerouslySetInnerHTML={{
            __html: data?.become_member_text_en,
          }}
        />
        {data?.faq?.length > 0 && (
          <div
            className={`${
              data?.faq?.length > 0
                ? "py-[30px] px-[100px] 2xl:px-[50px] lg:px-[20px] md:px-[10px]"
                : " "
            }`}
          >
            <AccordionItem accordionItems={data?.faq} />
          </div>
        )}
        <div className="py-[0px] px-[100px] 2xl:px-[50px] lg:px-[20px] md:px-[10px]">
          <Link
            href={data?.google_form}
            target="_blank"
            className=" px-[16px] py-[10px] w-fit bg-[#ec5a44] hover-effect uppercase hover:bg-white hover:text-[#ec5a44] border border-[#ec5a44] text-white rounded-[4px] font-[400] flex items-center hover:gap-[20px] gap-[10px]"
          >
            {data?.google_form_name}
            <FaArrowRight />
          </Link>
        </div>
      </Transition>
    </>
  );
};

export default BecomeAMember;
