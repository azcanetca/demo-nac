"use client";
import React, { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import Link from "next/link";

import Transition from "../Transition/Transition";
import Image from "next/image";

const Search = () => {
  // const searchParams = useSearchParams();
  // const query = searchParams?.get("q");
  // const [loading, setLoading] = useState(true);
  // const [blogs, setBlogs] = useState([]);
  // const [results, setResults] = useState([]);
  // const [selectedItem, setSelectedItem] = useState(null);
  // const searchTab = useRef();

  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_API}/search`)
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data));
  // }, [query]);

  // useEffect(() => {
  //   if (query !== "") {
  //     let filterData = blogs?.filter((i) => {
  //       return i?.title_en?.toLowerCase()?.includes(query)
  //         ? i?.title_en?.toLowerCase()?.includes(query)
  //         : i?.intro_text_en?.toLowerCase()?.includes(query);
  //     });
  //     setTimeout(() => {
  //       if (filterData?.length > 0) {
  //         setResults(filterData);
  //       } else {
  //         setResults([]);
  //       }
  //       setLoading(false);
  //     }, 1000);
  //   } else {
  //     setResults([]);
  //   }
  // }, [query, blogs]);

  return (
    <Transition>
      <div className="mt-24 min-h-[60vh]">
        <div className="px-[100px] py-[20px] lg:py-[20px] lg:px-[20px]">
          {results?.length === 0 && (
            <h2 className="text-center">
              No information was found for this keyword{" "}
              <span className="font-semibold">"{query}"</span>.
            </h2>
          )}
          {results?.length > 0 && (
            <h3 className="text-xl font-medium capitalize mb-6">results: </h3>
          )}

          {results?.map((cur, i) => {
            return (
              <div
                key={i}
                ref={searchTab}
                className={`border-2 relative px-[10px] py-[15px] mb-3 bg-[#f6f6f6] transition-all rounded-md `}
              >
                <div className="flex items-center  gap-2">
                  <div className="">
                    {cur &&
                      cur.src &&
                      cur.src
                        ?.filter((elem) => elem?.is_cover === 1)
                        ?.slice(0, 1)
                        ?.map((elem, j) => {
                          return (
                            <div
                              key={j}
                              className="w-full relative overflow-hidden"
                            >
                              <Image
                                src={elem?.src}
                                alt={cur?.title_en}
                                width={1000}
                                height={1000}
                                className="object-cover w-[60px] h-[60px] rounded-full"
                              />
                            </div>
                          );
                        })}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      className="underline hover:text-red-600 tl text-[14px]"
                      href={`/m/${cur?.id}/${cur?.slug_en}`}
                    >
                      {cur?.title_en}
                    </Link>
                    <div
                      className="font-medium text-[14px]"
                      dangerouslySetInnerHTML={{ __html: cur?.intro_text_en }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* {results?.map((result, index) => {
          const keyid = nanoid();
          const isSelected = selectedItem === index; // Check if the item is selected

          return (
            <div key={keyid}>
              {Object?.keys(result).map((key) => {
                const value = result[key];
                const title = value?.title_en || value?.title_1_en;
                const text = value?.intro_text_en || value?.text_en;

                const charsToReplace = query ? new RegExp(query) : undefined;

                console.log("s", result);

                const newText = text
                  ?.toLowerCase()
                  ?.replace(
                    charsToReplace,
                    `<span class="bg-red-600 text-white">${query}</span>`
                  );

                return (
                  <div
                    key={key}
                    ref={searchTab}
                    className={`border-2 relative px-[10px] py-[15px] mb-3 bg-[#f6f6f6] transition-all rounded-md ${
                      isSelected ? "h-full " : "h-[120px] "
                    } overflow-x-scroll `}
                  >
                    <div className="flex items-start flex-col gap-2">
                      <Link
                        className="underline hover:text-red-600 tl text-[14px]"
                        href={`${key}/${value?.slug_en}`}
                      >
                        {title}
                      </Link>
                      <div
                        className="font-medium text-[14px]"
                        dangerouslySetInnerHTML={{ __html: newText }}
                      ></div>
                    </div>
                    <div className="sticky z-30 bottom-[-15px]  m-auto border-none outline-none  left-0 right-0 flex items-end justify-end text-black">
                      <button
                        className="px-4 py-2 capitalize font-bold w-[40px] tls h-[40px] grid place-content-center overflow-hidden bg-white rounded-full"
                        onClick={() => openSearch(index)}
                      >
                        {isSelected ? (
                          <FaAnglesUp className=" anime" />
                        ) : (
                          <FaAnglesDown className="anime" />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })} */}
        </div>
      </div>
    </Transition>
  );
};

export default Search;
