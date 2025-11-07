"use client";

import Loading from "@/app/loading";

import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import Share from "../Share/Share";
import { CopyNotification } from "../CopyNotification/CopyNotification";
import MediaItemComponnet from "./MediaItemComponnet";
import Transition from "../Transition/Transition";
import useCopyLinkTitle from "../CopyLinkTitle/CopyLinkTitle";

const MediaSlug = ({ params, data }) => {
  const shareHref = `${process.env.NEXT_PUBLIC_LINK}media/${params?.id}/${params?.slug}`;

  const { CopyLinkTitle, link, copiedLink, showNotification } =
    useCopyLinkTitle();

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
    <>
      <Transition>
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
                    alt=""
                    width={1000}
                    height={350}
                    className="w-full h-[350px] lg:h-[250px] object-cover"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="tab-content px-[100px] py-[50px] 2xl:px-[50px] lg:px-[20px] media">
            <p
              dangerouslySetInnerHTML={{
                __html: data?.media?.text_en && data?.media?.text_en,
              }}
            ></p>
            <Share
              href={shareHref}
              title={data?.media?.title_en}
              copyLink={CopyLinkTitle}
              ref={link}
            />
          </div>
          {showNotification && <CopyNotification link={copiedLink} />}
          <h3 className="font-bold text-4xl 2xl:text-2xl lg:text-xl ml-12 mb-3 mt-3 px-[50px] lg:px-[20px] capitalize">
            More News
          </h3>
          <div className="mt-6 grid grid-cols-12 gap-6 px-[100px] 2xl:px-[50px] lg:px-[20px]">
            {data?.random_media &&
              data?.random_media?.map((item, i) => {
                return (
                  <MediaItemComponnet key={i} item={item} classes={grid} />
                );
              })}
          </div>
        </div>
      </Transition>
    </>
  );
};

export default MediaSlug;
