"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Image from "next/image";
import Tabs from "@/app/Tab/Tab";
import Share from "../Share/Share";
import { CopyNotification } from "../CopyNotification/CopyNotification";
import Loading from "@/app/loading";
import Transition from "../Transition/Transition";

const CurrentIsuses = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/current-isuses`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const [showNotification, setShowNotification] = useState(false);
  const [copiedLink, setCopiedLink] = useState("");

  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "current Isuses",
      link: "#",
    },
  ];

  const href = `${process.env.NEXT_PUBLIC_LINK}/current-issues`;

  const CopyLinkTitle = () => {
    const link = window?.location?.href;
    setCopiedLink(link);
    setShowNotification(true);
    navigator?.clipboard?.writeText(link);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  if (loading && !data?.currentctg) return <Loading />;

  return (
    <>
      <Transition>
        <Breadcrumb pageNames={pageNames} />
        <Image
          src={data?.currentIsuses}
          width={1000}
          height={300}
          alt=""
          className="w-full h-[350px] lg:h-[250px] object-cover"
        />
        <div className="px-[150px] 2xl:px-[50px] lg:px-[20px]">
          <div className="mt-[20px]">
            <Tabs>
              {data?.currentctg?.map((data) => (
                <Tabs.Panel key={data?.id} title={data?.name_en}>
                  <div className="pt-[50px]">
                    <p
                      className="font-[700] text-[35px] lg:text-[20px] md:text-[16px] tracking-[0.7px] text-[#212529]"
                      dangerouslySetInnerHTML={{
                        __html: data && data?.title_en,
                      }}
                    ></p>
                    <div
                      className="tab-content lg:text-[13px] "
                      dangerouslySetInnerHTML={{
                        __html: data && data?.text_en,
                      }}
                    ></div>
                  </div>
                  <Share
                    copyLink={CopyLinkTitle}
                    href={href}
                    title={data?.name_en}
                  />
                </Tabs.Panel>
              ))}
            </Tabs>
          </div>

          {showNotification && <CopyNotification link={copiedLink} />}
        </div>
      </Transition>
    </>
  );
};

export default CurrentIsuses;