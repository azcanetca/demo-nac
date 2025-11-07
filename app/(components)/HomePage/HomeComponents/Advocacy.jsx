"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Advocacy = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/advocacy`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const targetSlug = "our-advocacy";
  const press_menu = useRef();
  const pressCentreItem = data?.header?.find(
    (item) => item?.slug_en === targetSlug
  );

  const altMenuItems = pressCentreItem ? pressCentreItem?.alt_menu : [];

  const openPressMenu = () => {
    press_menu?.current?.classList?.toggle("hidden");
  };

  return (
    <>
      <div className="md:pt-5">
        <div className="relative">
          <Image
            src={data?.advocacy?.src}
            width={1000}
            height={400}
            alt="involve banner"
            className="!w-full h-[650px] object-cover lg:h-[400px] md:hidden"
          />
          <div className="hidden md:block ">
            <Image
              src={data?.advocacy?.src_mobile}
              width={1000}
              height={400}
              alt="involve banner"
              className="!w-full h-[650px] object-cover lg:h-[400px]   "
            />
          </div>
          <div className="absolute w-[40%] md:w-full lg:w-full top-[50%] flex justify-end  flex-col right-[0%] lg:px-[30px]  md:mt-5 md:mb-5 translate-x-[0%] md:static translate-y-[-50%] md:translate-y-[0] text-black md:px-[30px]">
            <span className="font-normal  text-[24px] lg:text-[18px]">
              {data?.advocacy?.title_1_en}
            </span>
            <h2 className="font-bold text-4xl mt-2 lg:text-xl">
              {data?.advocacy?.title_2_en}
            </h2>
            <p
              className="font-[400] text-[15px]  py-[1rem] pr-3 mt-3 "
              dangerouslySetInnerHTML={{
                __html: data && data?.advocacy?.text_en,
              }}
            ></p>
            <div className="relative ">
              <div
                onClick={openPressMenu}
                className="flex items-center gap-3 bg-[#ec5a44] w-fit px-2 py-3 cursor-pointer rounded-lg text-white"
              >
                <h1 className=" text-[16px] uppercase  font-semibold ">
                  take action
                </h1>
                <FaAngleDown />
              </div>
              <ul
                ref={press_menu}
                className="absolute bottom-[-125px] lg:bottom-auto lg:top-[-130px] lg:border-[1px] bg:border-[#ccc] left-0 right-0 lg:bg-[#f6f6f6] bg-white w-fit hidden transition-all "
              >
                {altMenuItems &&
                  altMenuItems?.map((item, i) => (
                    <li
                      className="text-black cursor-pointer hover:bg-[#ec5a44] w-full  h-full flex  transition-all hover:text-white"
                      key={i}
                    >
                      <Link
                        className="w-full h-full px-2 py-2"
                        href={item?.slug_en ? item?.slug_en : ""}
                      >
                        {item?.menu_en}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advocacy;
