"use client";

import { useEffect, useState } from "react";
import GlobalBanner from "../GlobalBanner/GlobalBanner";
import TakeComponnet from "./TakeComponnet";
import Loading from "@/app/loading";
import Transition from "../Transition/Transition";

const TakeAction = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/take`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const [activeDraft, setActiveDraft] = useState(0);
  const filteredData = data?.take?.filter(
    (item) => item?.draft === activeDraft
  );
  const [fadeOutClass, setFadeOutClass] = useState("");
  const handleButtonClick = (draft) => {
    setActiveDraft(draft);
    setFadeOutClass("fadeOutNoa");
    setTimeout(() => {
      setFadeOutClass("");
    }, 200);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFadeOutClass("");
      window.scrollTo(0, 0);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [fadeOutClass]);

  if (loading && !data?.take) return <Loading />;
  return (
    <>
      <Transition>
        <div className="mb-4">
          <GlobalBanner
            longtext={data?.take_action?.take_action_banner_title_en}
            bgColor={data?.section_bg}
            images={data?.take_action?.take_action_banner_src}
          />
        </div>
        <div className="px-[100px] py-[20px] 2xl:px-[50px] lg:p-[20px]">
          <div className="flex items-center justify-center gap-4">
            <button
              className={`text-white font-semibold rounded-md uppercase p-3 ${
                activeDraft === 0 ? "bg-[#adc4e6]" : "bg-[#759acd]"
              }`}
              type="button"
              onClick={() => handleButtonClick(0)}
            >
              past
            </button>
            <button
              className={`text-white font-semibold rounded-md uppercase p-3 ${
                activeDraft === 1 ? "bg-[#adc4e6]" : "bg-[#759acd]"
              }`}
              type="button"
              onClick={() => handleButtonClick(1)}
            >
              current
            </button>
          </div>
          {filteredData?.map((item) => (
            <TakeComponnet key={item?.id} data={item} fade={fadeOutClass} />
          ))}
        </div>
      </Transition>
    </>
  );
};

export default TakeAction;
