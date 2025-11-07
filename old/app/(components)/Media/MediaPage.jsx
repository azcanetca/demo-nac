"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import GlobalBanner from "../GlobalBanner/GlobalBanner";
import MediaItemComponnet from "./MediaItemComponnet";
import Transition from "../Transition/Transition";

const MediaPage = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [kslugDetails, setKslugDetails] = useState({
    media_src: "",
    section_bg: "",
    media_title_en: "",
    media_text_en: "",
    pagination: "",
  });
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/media?page=${page}`)
      .then((res) => res?.json())
      .then((newData) => {
        setKslugDetails({
          media_src: newData?.media_src,
          section_bg: newData?.section_bg,
          media_title_en: newData?.media_title_en,
          media_text_en: newData?.media_text_en,
          pagination: newData?.pagination,
        });
        setDatas([...datas, ...newData?.media]);
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
      name: "media",
      link: "#",
    },
  ];

  const handleMoreImage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const grid = "col-span-3 xl:col-span-4 lg:col-span-6 md:col-span-12";
  if (loading || !datas) return <Loading />;

  return (
    <>
      <Transition>
        <div className="mt-16">
          <Breadcrumb pageNames={pageNames} />
        </div>
        <div className="mb-4">
          <GlobalBanner
            longtext={kslugDetails?.media_title_en}
            longtext2={kslugDetails?.media_text_en}
            bgColor={kslugDetails?.section_bg}
            images={kslugDetails?.media_src}
          />
        </div>
        <div className="mt-6 grid grid-cols-12 gap-6 px-[100px] 2xl:px-[50px] lg:px-[20px]">
          {datas &&
            datas?.map((item, i) => {
              return <MediaItemComponnet key={i} item={item} classes={grid} />;
            })}
        </div>
        <div className="flex items-center justify-center mt-4">
          {page < kslugDetails?.pagination?.last_page &&
            (loading ? (
              <h3>Loading...</h3>
            ) : (
              <button
                onClick={handleMoreImage}
                className="border-[1px] border-solid border-[#ec5a44] text-[#ec5a44] p-[10px] font-semibold text-lg lg:text-sm uppercase rounded-md tl hover:bg-[#ec5a44] hover:text-white"
              >
                See more
              </button>
            ))}
        </div>
      </Transition>
    </>
  );
};

export default MediaPage;
