"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const Mission = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/involve`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="">
        <div className="relative">
          <Image
            src={data?.involve?.src}
            width={1000}
            height={400}
            alt="involve banner"
            className="!w-full h-[650px] object-cover lg:h-[400px] md:hidden"
          />
          <div className="hidden md:block ">
            <Image
              src={data?.involve?.src_mobile}
              width={1000}
              height={400}
              alt="involve banner"
              className="!w-full h-[650px] object-cover lg:h-[400px]   "
            />
          </div>
          <div className="absolute w-[50%] lg:w-full top-[50%] left-[4%] md:mt-5 md:mb-5 translate-x-[0%] md:static translate-y-[-50%] md:translate-y-[0] text-black md:px-[30px]">
            <span className="font-normal  text-[24px] lg:text-[18px]">
              {data?.involve?.title_1_en}
            </span>
            <h2 className="font-bold text-4xl mt-2 lg:text-xl">
              {data?.involve?.title_2_en}
            </h2>
            <p
              className="font-[400] text-[15px]  py-[1rem] mt-3"
              dangerouslySetInnerHTML={{
                __html: data && data?.involve?.text_en,
              }}
            ></p>
            <div className="relative mt-3">
              <Link
                href="/we-are-nac"
                className="flex items-center gap-3 bg-[#ec5a44] w-fit px-2 py-3 md:px-2 md:py-2 cursor-pointer text-white rounded-lg"
              >
                <h1 className=" text-[16px] uppercase  font-semibold md:text-[13px]">
                  GET TO KNOW US
                </h1>
                <FaAngleRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
