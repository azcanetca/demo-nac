"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import GlobalBanner from "../GlobalBanner/GlobalBanner";
import Loading from "@/app/loading";
import Transition from "../Transition/Transition";

const TakeActionItem = ({ params }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API}/take-action/${params?.id}/${params?.slug}`
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
      name: "take action",
      link: "/take-action",
    },
    {
      name: `${data?.take?.title_en}`,
      link: `#`,
    },
  ];

  if (loading && !data?.take) return <Loading />;

  return (
    <>
      <Transition>
        <div className="mt-16">
          <Breadcrumb pageNames={pageNames} />
          <GlobalBanner
            bgColor={data?.section_bg}
            images={data?.take?.src}
            longtext={data?.take?.title_en}
            intro={data?.take?.intro_text_en}
          />
          <div className=" w-full mt-3 px-[100px] 2xl:px-[50px] lg:px-[20px] min-h-[100px]">
            <p className="contentstatments">{data?.take?.intro_text_en}</p>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default TakeActionItem;
