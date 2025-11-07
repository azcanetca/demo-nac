import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "swiper/css/pagination";
import Image from "next/image";

const WeAreSomeMoments = ({ data }) => {
  return (
    <>
      <div className="px-[50px] py-[20px] mb-10 mt-20 lg:py-[20px] lg:px-[20px] some_moments ">
        <div className="flex items-center justify-center mb-10 w-full text-black font-bold  ">
          <h1 className="text-center text-5xl 2xl:text-2xl lg:text-xl">
            Some moments of N.A.C.
          </h1>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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
                slidesPerView: 5,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 8,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="h-[250px] lg:h-[300px]"
          >
            {data &&
              data?.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="swiper_hover">
                      <div className="relative overflow-hidden">
                        <div className="w-full">
                          <LightGallery elementClassNames="custom-wrapper-class">
                            <a href={item?.src ? item?.src : ""}>
                              <Image
                                src={item?.src ? item?.src : ""}
                                alt=""
                                width={1000}
                                height={500}
                                className="w-full object-cover h-[200px]  rounded-[10px]"
                              />
                            </a>
                          </LightGallery>
                        </div>
                      </div>
                      <p className="font-bold text-[16px] mt-2 text-[#212529] line-clamp-2 transition-all ease-linear">
                        {item?.title_en}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default WeAreSomeMoments;
