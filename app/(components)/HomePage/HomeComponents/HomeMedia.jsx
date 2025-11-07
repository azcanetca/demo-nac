"use client";

import { useEffect, useState } from "react";
import MediaComponnet from "../../MediaComponnet/MediaComponnet";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

const HomeMedia = ({ shuffle }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/home-media`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  let mediaData = data?.media;

  if (shuffle && mediaData) {
    mediaData = shuffle(Array?.from(mediaData));
  }

  return (
    <div className="px-[50px] py-[20px] mb-10 lg:py-[20px] lg:px-[20px] ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {mediaData &&
          mediaData?.slice(0, 4).map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <MediaComponnet href={item?.slug_en} item={item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default HomeMedia;
