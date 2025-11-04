"use client";

import { usePathname } from "next/navigation";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { RiMenuUnfold2Fill } from "react-icons/ri";

import { useEffect, useRef, useState } from "react";

import SupportUs from "./SupportUs";
import Link from "next/link";

import { GrFormNextLink } from "react-icons/gr";
import MobileMenu from "./MobileMenu";

const Header = ({ data, footer, settings }) => {
  const [isMobile, setIsMobile] = useState(false);

  const refMobile = useRef();
  const mobileOverlay = useRef();

  const [scrolledFromTop, setScrollTop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);
    }

    return function () {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
  }, []);

  function scrollHandler(event) {
    if (typeof window !== "undefined") {
      window.pageYOffset >= 50 ? setScrollTop(true) : setScrollTop(false);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1099);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function openMobileMenu() {
    const refMob = refMobile?.current?.classList;

    if (refMob?.contains("left-[-300%]")) {
      refMob?.replace("left-[-300%]", "left-0");
      mobileOverlay?.current?.classList?.add("active");
    }
  }
  function closeMobileMenu() {
    const refMob = refMobile?.current?.classList;

    if (refMob?.contains("left-0")) {
      refMob?.replace("left-0", "left-[-300%]");
      mobileOverlay?.current?.classList?.remove("active");
    }
  }

  const mobileSupport = isMobile ? "" : data?.navbar_colors?.navbar_btn;

  const pathname = usePathname();

  return (
    <>
      <header
        className={`bg-[#00274D] w-full  px-[120px] py-[15px] 2xl:px-[40px] md:px-[20px] transition_card $`}
      >
        <nav className="flex justify-between items-center  ">
          <ul className="flex flex-1 items-center gap-3 text-white text-[14px]">
            <li>
              <a
                href={`${footer?.representative_link}`}
                target="_blank"
                className="border border-[#ffffff8a] px-2 py-1 md:text-[11px]  rounded-md"
              >
                {footer?.representative}
              </a>
            </li>
          </ul>
          <div className="flex flex-1  items-center  justify-end">
            <ul className="flex items-center justify-center gap-6 md:gap-3 text-white text-[16px] md:text-[13px]">
              <li className="flex">
                <a href={`${footer?.sosials?.facebook}`} target="_blank">
                  <FaFacebook />
                </a>
              </li>
              <li className="flex">
                <a href={`${footer?.sosials?.instagram}`} target="_blank">
                  <FaInstagramSquare />
                </a>
              </li>
              <li className="flex">
                <a href={`${footer?.sosials?.linkedin}`} target="_blank">
                  <FaLinkedin />
                </a>
              </li>
              <li className="flex">
                <a href={`${footer?.sosials?.twitter}`} target="_blank">
                  <FaTwitter />
                </a>
              </li>
              <li className="flex">
                <a href={`${footer?.sosials?.youtube}`} target="_blank">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <header
        className={`w-full z-[200]  transition_card  left-0 right-0  m-auto ${
          scrolledFromTop ? "fixed top-0 z-[250] bg-[#fff] tls" : "absolute"
        } ${
          pathname === "/" ? "" : "bg-[#00274D] border-t border-[#1468bd8a]"
        } `}
      >
        <nav className="flex justify-between items-center w-full py-[15px] px-[120px] 2xl:px-[40px] md:px-[20px]">
          <div className="flex items-center flex-1">
            <Link href="/">
              {scrolledFromTop ? (
                <img
                  src={`${settings?.settings?.headerlogo}`}
                  alt={footer?.sosials?.unvan_en}
                  className="max-w-24"
                />
              ) : (
                <img
                  src={`${footer?.headerlogo_white}`}
                  alt={footer?.sosials?.unvan_en}
                  className="max-w-24"
                />
              )}
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center lg:hidden ">
            <ul className="flex flex-1 items-center justify-center gap-10 text-white ">
              {footer?.header?.map((item) => {
                return (
                  <li
                    key={item?.id}
                    className="font-semibold uppercase text-[16px]  tl hover:text-[#ec5a44]"
                  >
                    {item?.alt_menu?.length > 0 ? (
                      <div className="relative group cursor-pointer w-max ">
                        <h3
                          className={` ${
                            scrolledFromTop ? "text-[#000]" : "text-[#fff]"
                          }`}
                        >
                          {item?.menu_en}
                        </h3>
                        <ul className="absolute top-[30px] tl left-[-80px]  rounded-md group-hover:opacity-100 group-hover:visible w-[300px] bg-[#fff] text-black opacity-0 invisible tls">
                          {item?.alt_menu?.map((cur) => {
                            return (
                              <li key={cur?.id} className="alt_menu_border">
                                {cur?.alt_menu?.length > 0 ? (
                                  <div className="flex items-center justify-between w-full  px-4 py-2 relative group_2_h3 tl">
                                    <h3 className="hover:text-[#ec5a44] tl">
                                      {cur?.menu_en}
                                    </h3>
                                    <span>
                                      <GrFormNextLink />
                                    </span>
                                    <ul className="absolute right-[-355px]  w-[350px] top-0 rounded-md tl  bg-[#fff] text-black opacity-0 invisible tls group_2">
                                      {cur?.alt_menu?.map((elm) => (
                                        <li
                                          key={elm?.id}
                                          className="flex items-center justify-between  px-4 py-2 w-full"
                                        >
                                          <Link
                                            href={`/${cur?.slug_en}/${elm?.id}/${elm?.slug_en}`}
                                            className={`hover:text-[#ec5a44] tl w-full flex ${
                                              scrolledFromTop
                                                ? "text-[#000]"
                                                : "text-[#000]"
                                            }`}
                                          >
                                            {elm?.name_en}
                                          </Link>
                                          <span>
                                            <GrFormNextLink />
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : (
                                  <Link
                                    href={`/${cur?.slug_en}`}
                                    className="flex items-center  justify-between w-full px-4 py-2 "
                                  >
                                    <h3
                                      className={`hover:text-[#ec5a44] tl  ${
                                        scrolledFromTop
                                          ? "text-[#000]"
                                          : "text-[#000]"
                                      }`}
                                    >
                                      {cur?.menu_en}
                                    </h3>
                                    <span>
                                      <GrFormNextLink />
                                    </span>
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        href={`/${item?.slug_en}`}
                        className={`flex items-center w-max ${
                          scrolledFromTop ? "text-[#000]" : "text-[#fff]"
                        }`}
                      >
                        <h2 className=" ">{item?.menu_en}</h2>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            ref={mobileOverlay}
            onClick={closeMobileMenu}
            className="mobile-menu-overlay overflow-x-hidden block fixed left-0 top-0 bottom-0 right-0 z-[100] overlay "
          ></div>
          <MobileMenu
            ref1={refMobile}
            closeMobileMenu={closeMobileMenu}
            data={footer?.header}
          />
          <div className="flex-1 flex justify-end lg:hidden">
            <SupportUs mobileSupport={mobileSupport} />
          </div>
          <div className="hidden lg:block">
            <span
              onClick={openMobileMenu}
              className={`${
                scrolledFromTop ? "text-black" : "text-white"
              } text-[30px] cursor-pointer`}
            >
              <RiMenuUnfold2Fill />
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
