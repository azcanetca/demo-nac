"use client";

import Image from "next/image";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RiMenu5Fill } from "react-icons/ri";

import { useEffect, useState } from "react";

const FlagPart = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/flags`)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <section className=" mb-40">
      <div className="max-w-[1500px] m-auto">
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-4xl font-bold mb-5 capitalize text-[#ec5a44]">
            what we do
          </h3>
          <span className="block mb-10 text-[#ec5a44] text-4xl">
            <RiMenu5Fill />
          </span>
        </div>
        <div className="grid  grid-cols-12 gap-20">
          <div className="col-span-4 ">
            <ul className="flex flex-col gap-5 justify-around h-full">
              <li className="flex items-start gap-6">
                <span className="text-[#ec5a44] text-3xl">
                  <HiMiniBars3BottomLeft />
                </span>
                <div className="flex flex-col gap-4 ">
                  <div
                    className="mt-[-5px] font-bold text-xl"
                    dangerouslySetInnerHTML={{
                      __html:
                        packages?.data?.title1_en && packages?.data?.title1_az,
                    }}
                  />
                  <div
                    className=" "
                    dangerouslySetInnerHTML={{
                      __html:
                        packages?.data?.title1_en && packages?.data?.title1_en,
                    }}
                  />
                </div>
              </li>
              <li className="flex items-start gap-6">
                <span className="text-[#ec5a44] text-3xl">
                  <HiMiniBars3BottomLeft />
                </span>
                <div className="flex flex-col gap-4 ">
                  <div
                    className="mt-[-5px] font-bold text-xl"
                    dangerouslySetInnerHTML={{
                      __html:
                        packages?.data?.title1_en && packages?.data?.title2_az,
                    }}
                  />
                  <div
                    className=" "
                    dangerouslySetInnerHTML={{
                      __html:
                        packages?.data?.title1_en && packages?.data?.title2_en,
                    }}
                  />
                </div>
              </li>
              <li className="flex items-start gap-6">
                <span className="text-[#ec5a44] text-3xl">
                  <HiMiniBars3BottomLeft />
                </span>
                <div className="flex flex-col gap-4 ">
                  <div
                    className="mt-[-5px] font-bold text-xl"
                    dangerouslySetInnerHTML={{
                      __html:
                        packages?.data?.title1_en && packages?.data?.title3_az,
                    }}
                  />
                  <div
                    className=" "
                    dangerouslySetInnerHTML={{
                      __html:
                        packages?.data?.title1_en && packages?.data?.title3_en,
                    }}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-4 flex items-center justify-center">
            <Image
              width={1000}
              height={400}
              src={`${process.env.NEXT_PUBLIC_STORAGE}/flag/${packages?.data?.image}`}
            />
          </div>
          <div className="col-span-4 ">
            <ul className="flex flex-col  gap-5 justify-around h-full">
              <li className="flex items-start gap-6">
              <div className="flex flex-col gap-4 items-end text-justify">
                  <div
                    className="mt-[-5px] font-bold text-xl"
                    dangerouslySetInnerHTML={{
                      __html:
                        packages?.data?.title1_en && packages?.data?.title4_az,
                    }}
                  />
                  <div
                    className=" "
                    dangerouslySetInnerHTML={{
                      __html:
                        packages?.data?.title1_en && packages?.data?.title4_en,
                    }}
                  />
                </div>
                <span className="text-[#ec5a44] text-3xl">
                  <HiMiniBars3BottomLeft />
                </span>
              </li>
              <li className="flex items-start gap-6">
              <div className="flex flex-col gap-4 items-end text-justify">
                  <div
                    className="mt-[-5px] font-bold text-xl"
                    dangerouslySetInnerHTML={{
                      __html:
                        packages?.data?.title1_en && packages?.data?.title5_az,
                    }}
                  />
                  <div
                    className=" "
                    dangerouslySetInnerHTML={{
                      __html:
                        packages?.data?.title1_en && packages?.data?.title5_en,
                    }}
                  />
                </div>
                <span className="text-[#ec5a44] text-3xl">
                  <HiMiniBars3BottomLeft />
                </span>
              </li>
              <li className="flex items-start gap-6">
              <div className="flex flex-col gap-4 items-end text-justify">
                  <div
                    className="mt-[-5px] font-bold text-xl  "
                    dangerouslySetInnerHTML={{
                      __html:
                        packages?.data?.title1_en && packages?.data?.title6_az,
                    }}
                  />
                  <div
                    className=" "
                    dangerouslySetInnerHTML={{
                      __html:
                        packages?.data?.title1_en && packages?.data?.title6_en,
                    }}
                  />
                </div>
                <span className="text-[#ec5a44] text-3xl">
                  <HiMiniBars3BottomLeft />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagPart;
