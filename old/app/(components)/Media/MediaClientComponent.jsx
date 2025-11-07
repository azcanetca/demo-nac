"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const MediaClientComponent = ({ data }) => {

  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "media",
      link: "/media",
    },
    {
      name: `${data?.media?.title_en}`,
      link: `#`,
    },
  ];
  const grid = "col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12";
  if (!data || !data?.random_media) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <div className="mt-16">
      <Breadcrumb pageNames={pageNames} />
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mediadetails"
      >
        {data?.media?.src &&
          data?.media?.src?.map((item, i) => (
            <SwiperSlide key={i}>
              <Image
                src={item?.src}
                alt={item?.name}
                width={1000}
                height={350}
                className="w-full h-[350px] lg:h-[250px] object-cover"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MediaClientComponent;
