"use client";

import Loading from "@/app/loading";
import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import CommonData from "../Statements/CommonData";
import GlobalBanner from "../GlobalBanner/GlobalBanner";
import CommonDataNextBtn from "../Statements/CommonDataNextBtn";
import Transition from "../Transition/Transition";

const CommunityUpdates = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [kslugDetails, setKslugDetails] = useState({
    section_bg: "",
    community_banner_title_en: "",
    community_banner_src: "",
    pagination: "",
  });
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/community?page=${page}`)
      .then((res) => res.json())
      .then((newData) => {
        setKslugDetails({
          section_bg: newData?.section_bg,
          community_banner_title_en: newData?.community_banner_title_en,
          community_banner_src: newData?.community_banner_src,
          pagination: newData?.pagination,
        });
        setData([...data, ...newData?.comunity]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "community updates",
      link: "#",
    },
  ];

  const hrefLink = "community-updates";

  const handleMoreImage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading || !data) return <Loading />;
  return (
    <>
      <Transition>
        <Breadcrumb pageNames={pageNames} />
        <div className="mb-4">
          <GlobalBanner
            longtext={kslugDetails?.community_banner_title_en}
            bgColor={kslugDetails?.section_bg}
            images={kslugDetails?.community_banner_src}
          />
        </div>
        <CommonData cachedData={data} href={hrefLink} />
        <CommonDataNextBtn
          page={page}
          handleMoreImage={handleMoreImage}
          cachedData={data}
          next={kslugDetails?.pagination?.total}
        />
      </Transition>
    </>
  );
};

export default CommunityUpdates;
