"use client";

import Loading from "@/app/loading";
import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import GlobalBanner from "../GlobalBanner/GlobalBanner";
import Transition from "../Transition/Transition";

const VolunterAtNac = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/volunter_nac`)
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
      name: "Volunteer At Nac",
      link: "#",
    },
  ];

  if (loading && !data?.volunter_nac) return <Loading />;
  return (
    <>
      <Transition>
        <div className="mt-16">
          <Breadcrumb pageNames={pageNames} />
        </div>
        <div className="mb-4">
          <GlobalBanner
            longtext={data?.volunteer_banner_m_text_en}
            bgColor={data?.section_bg}
            images={data?.volunteer_banner_src}
          />
        </div>
        <div
          className="py-[30px] px-[100px] 2xl:px-[50px] lg:px-[20px] tab-content media md:text-sm"
          dangerouslySetInnerHTML={{
            __html: data?.volunteer_banner_title_en,
          }}
        />
      </Transition>
    </>
  );
};

export default VolunterAtNac;
