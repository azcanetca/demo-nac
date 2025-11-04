"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import GlobalBanner from "../GlobalBanner/GlobalBanner";
import CommonData from "./CommonData";
import CommonDataNextBtn from "./CommonDataNextBtn";
import Transition from "../Transition/Transition";

const Statements = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [kslugDetails, setKslugDetails] = useState({
    section_bg: "",
    statements_banner_title_az: "",
    statements_banner_title_en: "",
    statements_banner_src: "",
    pagination: "",
  });
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/statements?page=${page}`)
      .then((res) => res?.json())
      .then((newData) => {
        setKslugDetails({
          section_bg: newData?.section_bg,
          statements_banner_title_az: newData?.statements_banner_title_az,
          statements_banner_title_en: newData?.statements_banner_title_en,
          statements_banner_src: newData?.statements_banner_src,
          pagination: newData?.pagination,
        });
        setDatas([...datas, ...newData?.data]);
      })
      .catch((error) => {
        console.log("error", error);
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
      name: "statements",
      link: "#",
    },
  ];
  const hrefLink = "statements";

  const handleMoreImage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading && !datas?.data) return <Loading />;

  return (
    <>
      <Transition>
        <div className="mt-16">
          <Breadcrumb pageNames={pageNames} />
        </div>
        <div className="mb-4">
          <GlobalBanner
            longtext={kslugDetails?.statements_banner_title_en}
            bgColor={kslugDetails?.section_bg}
            images={kslugDetails?.statements_banner_src}
          />
        </div>
        <CommonData cachedData={datas} href={hrefLink} />
        <CommonDataNextBtn
          page={page}
          next={kslugDetails?.pagination?.per_page}
          cachedData={datas?.data}
          handleMoreImage={handleMoreImage}
        />
      </Transition>
    </>
  );
};

export default Statements;
