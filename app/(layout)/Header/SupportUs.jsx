import Link from "next/link";
import React from "react";

const SupportUs = ({ mobileSupport }) => {
  return (
    <>
      <li
        style={{
          background: mobileSupport,
        }}
        className={` flex gap-2 h-full  p-[8px] cursor-pointer   uppercase rounded-md tl  items-center justify-center text-lg font-semibold text-white border-[1px] border-solid border-transparent xl:items-start xl:justify-start xl:bg-transparent xl:text-[#ec5a44] 2xl:text-[13px] md:p-[4px]`}
      >
        <Link
          href="/supportus"
          target="_blank"
          className="text-white xl:text-[#ec5a44]"
        >
          support us
        </Link>
      </li>
    </>
  );
};

export default SupportUs;
