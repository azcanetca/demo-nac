import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommonData = ({ cachedData, href }) => {
  return (
    <>
      <div>
        {cachedData &&
          cachedData?.map((cur, i) => {
            const apiDate = cur?.date;
            const formattedDate = new Date(apiDate).toLocaleDateString(
              "en-GB",
              {
                day: "numeric",
                month: `short`,
                year: "numeric",
              }
            );
            return (
              <div
                key={i}
                className={`grid  grid-cols-12 gap-16 md:gap-4 px-[100px] md:m-[10px] md:mb-[30px] md:border-[1px] md:border-[#ccc] md:rounded-lg 2xl:px-[50px] lg:px-[20px] md:p-[10px] mt-5 pt-10`}
              >
                <div className=" col-span-7 lg:col-span-6 md:col-span-12 ">
                  <div className="flex items-start justify-center flex-col h-full w-[90%] lg:w-full">
                    <h2 className="font-bold text-xl lg:text-lg  md:text-sm relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-[#ec5a44]">
                      {cur?.title_en}
                    </h2>
                    <p
                      className="pt-4 line-clamp-2 "
                      dangerouslySetInnerHTML={{
                        __html: cur && cur?.intro_text_en,
                      }}
                    ></p>
                    <div className="w-full md:flex md:justify-end">
                      <Link
                        className="mt-2 lg:mt-0 lg:text-right font-semibold text-xl md:text-lg"
                        href={`/${href}/${cur?.id}/${cur?.slug_en}`}
                      >
                        See more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-span-5 lg:col-span-6 md:col-span-12 md:order-[-1] overflow-hidden rounded-md ">
                  {cur?.src &&
                    cur?.src
                      ?.filter((elem) => elem?.is_cover === 1)
                      ?.map((item, i) => {
                        return (
                          <div
                            key={i}
                            className="relative overflow-hidden rounded-md "
                          >
                            <Image
                              src={item?.src}
                              alt="picture"
                              width={1000}
                              height={400}
                              className="w-full object-cover h-[300px] lg:h-[200px] rounded-md overflow-hidden"
                            />

                            <span className="absolute bottom-0 left-0 w-max h-[20px] rounded-tr-md flex items-center justify-center p-[16px] text-[17px] text-white bg-[#ec5a44] md:text-[14px]">
                              {formattedDate}
                            </span>
                          </div>
                        );
                      })}
                  {cur?.src?.length === 0 && (
                    <Image
                      width={1000}
                      height={400}
                      alt="no image"
                      src={"/no_image.jpg"}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CommonData;
