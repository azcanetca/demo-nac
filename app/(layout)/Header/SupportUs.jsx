import Link from "next/link";
import React from "react";

const SupportUs = ({ mobileSupport }) => {
  return (
    <>
      <li
        style={{
          background: mobileSupport,
        }}
        className={` flex gap-2 h-full    px-[6px] py-[4px] cursor-pointer   uppercase rounded-md tl  items-center justify-center text-lg font-semibold text-white border-[1px] border-solid border-transparent xl:items-start xl:justify-start   2xl:text-[13px] md:p-[4px]`}
      >
        <Link
          href="/supportus"
          target="_blank"
          className="text-black xl:text-[#ec5a44] flex  w-max"
        >
          support us
        </Link>
      </li>
    </>
  );
};

export default SupportUs;
