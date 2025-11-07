// components/ScrollingText.js

import React from "react";

const ScrollingText = ({ title, section_bg, webkit_text_color }) => {
  const repeatedText = Array(4).fill(title).join("\u00A0\u00A0\u00A0\u00A0");

  return (
    <div className="relative flex overflow-hidden  py-4 group">
      <div className="whitespace-nowrap animate-marquee1">
        <span
          style={{
            WebkitTextStroke: `2px ${section_bg}`,
            color: `${webkit_text_color}`,
          }}
          className={`mx-4 text-[12rem] 2xl:text-[8rem] lg:text-[4rem]  font-black `}
        >
          {repeatedText}
        </span>
      </div>

      <div className="absolute top-[5%]  whitespace-nowrap animate-marquee2 ">
        <span
          style={{
            WebkitTextStroke: `2px ${section_bg}`,
            color: `${webkit_text_color}`,
          }}
          className={`text-[12rem] webkit md:text-[10rem] lg:text-[8rem] font-black `}
        >
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default ScrollingText;
