"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import GlobalBanner from "../GlobalBanner/GlobalBanner";

import Transition from "../Transition/Transition";

const ComunutySlug = ({ params }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API}/community/${params?.id}/${params?.slug}`
    )
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
      name: "comunity",
      link: "/community-updates",
    },
    {
      name: `${data?.comunity?.title_en}`,
      link: `#`,
    },
  ];

  const filter = data?.comunity?.src?.filter((img) => img?.is_cover === 0);

  if (loading || !data) return <Loading />;
  return (
    <>
      <Transition>
        <div className="mt-16">
          <Breadcrumb pageNames={pageNames} />
        </div>
        <div>
          <GlobalBanner
            bgColor={data?.section_bg}
            images={filter}
            longtext={data?.comunity?.title_en}
            longtext2={data?.comunity?.intro_text_en}
          />
        </div>
        <div className="w-full mt-3 px-[100px] 2xl:px-[50px] lg:px-[20px] min-h-[100px] contentstatments">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.comunity?.text_en && data?.comunity?.text_en,
            }}
          ></div>
        </div>
      </Transition>
    </>
  );
};

export default ComunutySlug;
