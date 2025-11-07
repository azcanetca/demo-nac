"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link"; // Buton linkleri için Next.js'in Link component'ini kullanmak daha iyidir.

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ data }) => {
  // Eğer data henüz gelmediyse veya boşsa, bir yükleniyor durumu veya boş bir component göster
  if (!data || data.length === 0) {
    return (
      <section className="w-screen relative left-1/2 -translate-x-1/2 h-[900px] xl:h-[400px] bg-gray-200 flex items-center justify-center">
        <p>Loading slides...</p>
      </section>
    );
  }

  return (
    <section className="w-screen   relative left-1/2 -translate-x-1/2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // Temel ayarlar
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        className="w-full h-[850px] 2xl:h-[600px] md:h-[450px]"
      >
        {data?.banner &&
          data?.banner?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full h-full relative">
                {item.video ? (
                  <video
                    src={`${item?.video}`}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  ></video>
                ) : (
                  <img
                    src={`${item.src}`}
                    alt={item.title_en || "Banner Image"}
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-black bg-opacity-70"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full px-4">
                  <h1 className="text-[35px] 2xl:text-[25px] lg:text-[20px] md:text-[16px] font-bold mb-4">
                    {item.title_en}
                  </h1>
                  <p className="text-lg md:text-xl max-w-3xl mx-auto mb-[60px]">
                    {item.text_en}
                  </p>

                  {item.link && item.button_en && (
                    <Link href={`${item?.link}`}>
                      <span className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                        {item.button_en}
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
