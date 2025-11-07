import Image from "next/image";
import React from "react";

const WeAreAbout = ({
  title,
  title2 = null,
  text,
  text2 = null,
  url,
  bg,
  order = "",
  our_story,
}) => {
  const accentColor = "#7d63a7";
  return (
    <>
      <div className="bg-slate-50 py-20 xl:py-10 md:py-4 2xl:px-[30px] md:px-[15px]">
        <div className="container mx-auto px-4 lg:px-8 md:px-0">
          <div className="grid grid-cols-12 items-center gap-16 lg:gap-0">
            <div className="relative p-8 col-span-6 lg:col-span-12  sm:p-4 lg:mb-[20px]">
              <div
                className="absolute top-0 left-0 h-full w-full rounded-2xl transform -rotate-3 transition-transform duration-300 group-hover:rotate-0"
                style={{ backgroundColor: `${accentColor}20` }}
              ></div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={url}
                  width={1000}
                  height={800}
                  alt={title || "Our Story Image"}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div
              className={`flex flex-col col-span-6 lg:col-span-12 md:mt-[20px] md:px-[10px] justify-center ${order}`}
            >
              <h3
                className="font-semibold uppercase tracking-wider mb-3"
                style={{ color: accentColor }}
              >
                {our_story}
              </h3>
              <h2 className="text-4xl xl:text-2xl md:text-xl font-bold text-gray-800 leading-tight ">
                {title}
              </h2>
              <div
                className="mt-6 md:mt-2 text-lg xl:text-[14px] md:text-[12px] text-gray-600 leading-relaxed prose max-w-none"
                dangerouslySetInnerHTML={{ __html: `${text}` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeAreAbout;
