// components/TakeImages.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper stillerini import et
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

// Opsiyonel: Daha iyi bir slider deneyimi için navigasyon ve pagination stillerini de ekleyebilirsiniz

import "swiper/css/pagination";

const TakeImages = ({ data }) => {
  return (
    <>
      <Swiper
        loop={true}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }} // Tıklanabilir noktalar ekler
        modules={[Autoplay, Pagination]}
        className="mySwiper rounded-xl overflow-hidden shadow-lg" // Hafif bir gölge ve yuvarlak kenarlar
      >
        {data?.map((img) => (
          <SwiperSlide key={img?.id}>
            <Image
              width={1000}
              height={500} // Yükseklik-genişlik oranını biraz değiştirdim
              src={img?.src}
              alt={img?.id || "Article image"}
              className="w-full h-[450px] lg:h-[300px] object-cover" // Yüksekliği artırdım
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TakeImages;
