"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import Image from "next/image";

const MarqueeMoments = ({ data, text1 }) => {
  const extendedGalleryImages = React.useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }

    return Array.from({ length: 5 }).flatMap(() => data);
  }, [data]);

  return (
    <div className="bg-[#7d63a720] py-20 xl:py-10 md:mt-[2rem] mt-[5rem] overflow-hidden rotate-[-2deg]">
      <div className="container mx-auto px-4  pb-8 md:px-8 rotate-[2deg]">
        <div className="text-center ">
          <h2 className="text-4xl xl:text-3xl md:text-xl font-bold bg-clip-text text-[#d43300]">
            {text1}
          </h2>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 group rotate-[2deg]">
        <div className="absolute inset-0 flex items-center opacity-20 blur-sm">
          <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {extendedGalleryImages?.map((item, i) => (
              <div key={`bg-${i}`} className="flex-shrink-0 px-4">
                <div className="w-64 h-40 bg-slate-700 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>

        <LightGallery
          elementClassNames="flex w-max rotate-[2deg] animate-marquee group-hover:[animation-play-state:paused]"
          speed={1500}
        >
          {extendedGalleryImages?.map((item, i) => (
            <a
              href={item?.src}
              key={`fg-${i}`}
              className="flex-shrink-0 px-4 block"
              aria-label={item?.title_en}
            >
              <Image
                src={item?.src}
                alt={item?.title_en}
                width={500}
                height={700}
                className="
                  w-auto h-64 max-md:h-48 object-cover rounded-2xl shadow-lg 
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-cyan-400/20 hover:shadow-2xl
                "
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
};

export default MarqueeMoments;
