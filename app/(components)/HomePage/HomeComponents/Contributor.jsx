"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Contributor = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/contributor`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="relative ">
        <Image
          src={data?.p_mission?.pmission_src}
          width={1000}
          height={400}
          alt="press banner"
          className="!w-full h-[550px] object-cover lg:h-[400px]"
        />
        <div className="absolute w-[50%] lg:w-full top-[50%]  left-[4%] md:left-0 translate-x-[0%] translate-y-[-50%] text-black">
          <h2 className="font-bold text-[40px] lg:text-[30px] md:text-[20px]  md:px-[20px]">
            {data?.p_mission?.pmission_title_1_en}
          </h2>
          <p
            className="font-[400] text-[15px]  py-[1rem] mt-5 lg:py-[10px] lg:w-full md:px-[20px]"
            dangerouslySetInnerHTML={{
              __html: data && data?.p_mission?.pmission_text_en,
            }}
          ></p>
          <div className="mt-5">
            <div className="flex items-center gap-3  w-fit  h-full  cursor-pointer  md:px-[20px]">
              <Link
                href="/supportus"
                target="_blank"
                className="w-full h-full flex items-center gap-4 border-2 px-2 py-3 rounded-md bg-[#ec5a44]"
              >
                <h1 className=" text-[16px] text-white uppercase  font-semibold">
                  {data?.p_mission?.pmission_button_en}
                </h1>
                <FaArrowRightLong className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contributor;
