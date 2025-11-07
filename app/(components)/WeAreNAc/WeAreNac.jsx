"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import NOA from "./NOA";
import Loading from "@/app/loading";
import WeAreAbout from "./WeAreAbout";
import WeAreSomeMoments from "./WeAreSomeMoments";
import WeAreWhatCanYou from "./WeAreWhatCanYou";
import Transition from "../Transition/Transition";

const WeAreNac = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/wearewnac`)
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
      name: "We are nac",
      link: "#",
    },
  ];

  if (loading && !data?.moments) return <Loading />;

  return (
    <>
      <Transition>
        <div className="pt-[65px]">
          <Breadcrumb pageNames={pageNames} />
          <NOA dataSection1={data?.section_1} dataCounter={data?.counter} />
          <WeAreAbout
            title={data?.section_2?.section_two_title_1_en}
            text={data?.section_2?.section_two_text_en}
            url={data?.section_2?.section_two_src}
            bg={data?.section_2?.section_two_bg}
          />
          <WeAreAbout
            title={data?.section_3_4?.section_three_title_1_en}
            title2={data?.section_3_4?.section_four_title_1_en}
            text={data?.section_3_4?.section_three_text_en}
            text2={data?.section_3_4?.section_four_text_en}
            url={data?.section_3_4?.section_three_src}
            bg={data?.section_3_4?.section_three_bg}
          />
          <WeAreSomeMoments data={data?.moments} />
          <WeAreWhatCanYou data={data?.all} />
        </div>
      </Transition>
    </>
  );
};

export default WeAreNac;
