"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import CommonDataInenr from "./CommonDataInenr";

import Transition from "../Transition/Transition";

const StatmentsSlig = ({ params }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API}/statements/${params?.id}/${params?.slug}`
    )
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
      name: "statements",
      link: "/statements",
    },
    {
      name: `${data?.statements?.title_en}`,
      link: `#`,
    },
  ];
  if (loading || !data) return <Loading />;

  return (
    <>
      <Transition>
        <div className="mt-16">
          <Breadcrumb pageNames={pageNames} />
        </div>
        <CommonDataInenr
          images={data?.statements?.src}
          title1={data?.statements?.title_en}
          title2={data?.statements?.text_en}
        />
      </Transition>
    </>
  );
};

export default StatmentsSlig;
