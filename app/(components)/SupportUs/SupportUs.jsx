"use client";

import Loading from "@/app/loading";
import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Link from "next/link";
import Transition from "../Transition/Transition";

const SupportUs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/support-us`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "Support Us",
      link: "#",
    },
  ];

  const cards = [
    {
      id: 1,
      link: `${data?.support_card_1_link}`,
      title: `${data?.support_credit_card}`,
      text: `${data?.support_card_1_text}`,
    },
    {
      id: 2,
      link: "#",
      title: `${data?.support_e_transfer}`,
      text: `${data?.support_card_2_text}`,
    },
    {
      id: 3,
      link: "#",
      title: `${data?.support_e_cheque}`,
      text: `${data?.support_card_3_text}`,
    },
  ];

  if (loading && !data) return <Loading />;
  return (
    <>
      <Transition>
        <div className="mt-16">
          <Breadcrumb pageNames={pageNames} />
        </div>
        <div className="mt-5 lg:mt-0 py-[30px] px-[150px] 2xl:px-[50px] lg:px-[20px] text-center">
          <p
            className="uppercase text-2xl lg:text-lg font-bold mb-3 mt-6 "
            dangerouslySetInnerHTML={{
              __html: data?.support_top_title,
            }}
          ></p>
          <p
            className="text-lg lg:text-sm px-5 py-0 m-0 md:px-1"
            dangerouslySetInnerHTML={{
              __html: data?.support_top_title_2,
            }}
          ></p>
          <p
            className="text-lg lg:text-sm px-5 py-0 mt-5"
            dangerouslySetInnerHTML={{
              __html: data?.support_top_title_3,
            }}
          ></p>
          <div className="grid grid-cols-12 gap-6 mt-10 mb-20 lg:mb-4">
            {cards &&
              cards?.map((elem, i) => {
                return (
                  <div
                    key={i}
                    className="col-span-4 xl:col-span-6 lg:col-span-12 tl hover:scale-105"
                  >
                    <div className="flex items-center justify-center flex-col  h-full">
                      <Link
                        href={elem?.link}
                        className="inline-block w-full h-full "
                      >
                        <div className="h-full border-[1px] border-solid border-[#ec5a44] rounded-md">
                          <div className="bg-[#ec5a44] px-[15px] py-[10px]">
                            <h3 className="text-white uppercase font-semibold">
                              {elem?.title}
                            </h3>
                          </div>
                          <div className="mt-3 px-[10px] py-[20px]">
                            <h6 className="uppercase text-sm">{elem?.text}</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
          <div
            className="contentstatments "
            dangerouslySetInnerHTML={{
              __html: data?.support_bottom_text,
            }}
          ></div>
        </div>
      </Transition>
    </>
  );
};

export default SupportUs;
