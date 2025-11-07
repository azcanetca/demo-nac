import Link from "next/link";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const AltMenu = ({
  refkey,
  openAltMenu,
  items,
  refkey2,
  isMobile,
  openSubCategory,
}) => {
  return (
    <>
      <li
        ref={refkey}
        onClick={openAltMenu}
        className={` nav_item flex gap-2 xl:gap-0  h-full  cursor-pointer  xl:transition-all xl:ease-out     tl  items-center justify-center text-lg font-semibold text-[#fff] border-[1px] border-solid border-transparent  relative z-[250]  xl:justify-start xl:bg-transparent xl:text-[#ec5a44] xl:border-b-[1px] bg:border-solid xl:border-b-[#0000008a] 2xl:text-[13px] md:p-[4px] xl:flex-col xl:items-start`}
      >
        <div className="w-full h-full  p-[8px] lg:p-[2px] uppercase bg-[#ec5a44] xl:bg-transparent rounded-md">
          {items?.alt_menu?.length > 0 ? (
            <div className="flex items-center">
              <h1 className="text-white xl:text-[#ec5a44] 2xl:text-[13px]">
                {items?.menu_en}
              </h1>
              <FaAngleDown className={`xl:text-[#ec5a44] `} />
            </div>
          ) : (
            <Link href={`/${items?.slug_en}`} className="flex items-center">
              <h1 className="text-white xl:text-[#ec5a44] 2xl:text-[13px]">
                {items?.menu_en} 
              </h1>
            </Link>
          )}
          {items?.alt_menu && items?.alt_menu?.length > 0 && (
            <ul
              ref={refkey2}
              className={`absolute top-0 left-0 right-0 alt_item flex w-max xl:static bg-[#fff] xl:bg-transparent flex-col tlss rounded-md py-[7px] px-[20px] xl:px-[5px] tl opacity-0 invisible xl:opacity-100 xl:visible  ${
                isMobile
                  ? openSubCategory === items?.alt_menu
                    ? "xl:flex h-auto bg-[#fff]"
                    : "xl:hidden h-0"
                  : ""
              }`}
            >
              {items?.alt_menu?.map((item, i) => {
                return (
                  <li
                    key={i}
                    className="text-[#4f4f4f] capitalize  hover:text-[#ec5a44] tl inline-block text-[14px]"
                  >
                    <Link
                      className="py-[14px] xl:py-[5px] inline-block"
                      href={`/${item?.slug_en}`}
                    >
                      {item?.menu_en}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </li>
    </>
  );
};

export default AltMenu;
