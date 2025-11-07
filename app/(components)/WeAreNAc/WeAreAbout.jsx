import Image from "next/image";
import React from "react";

const WeAreAbout = ({ title, title2 = null, text, text2 = null, url, bg }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="px-[183px]  xl:px-[40px] md:p-[50px] sm:py-[50px] sm:px-[18px] py-[60px] bg-cover bg-full text-white flex lg:flex-col items-center gap-[24px]"
      >
        <div className="w-[50%] lg:w-full">
          {title2 !== null && (
            <h3 className="text-[34px] lg:text-[22px] font-[700] ps-[18px] relative before:content-[''] before:w-[8px] before:h-full before:left-0 before:absolute before:bg-white">
              {title2}
            </h3>
          )}
          {text2 !== null && (
            <p
              className="pt-[20px] mb-[10px] text-justify text-[16px] lg:text-[13px] font-[400]"
              dangerouslySetInnerHTML={{ __html: text2 }}
            ></p>
          )}
          <h3 className="text-[34px] lg:text-[22px] font-[700] pt-4 lg:pt-0 ps-[18px] relative before:content-[''] before:w-[8px] before:h-full before:left-0 before:absolute before:bg-white">
            {title}
          </h3>
          <p
            className="pt-[20px] text-justify text-[16px] font-[400] lg:text-[13px]"
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
        </div>
        <div className="w-[50%] lg:w-full">
          <Image
            src={url ? url : ""}
            width={1000}
            height={500}
            alt={`Picture of the ${title}`}
            className="w-full h-auto object-cover object-center rounded-[4px] overflow-hidden"
          />
        </div>
      </div>
    </>
  );
};

export default WeAreAbout;
