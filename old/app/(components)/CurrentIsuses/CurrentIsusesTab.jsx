"use client";
import { Tab } from "@chakra-ui/react";
import Link from "next/link";

const CurrentIsusesTab = ({ data }) => {
  return (
    <>
      <Tab
        className="bg-[#759acd]  me-5 text-white uppercase rounded-[5px] text-[16px] lg:text-[14px] font-[600]"
        _selected={{
          background: "#ec5a44",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        <Link className=" p-[10px] lg:p-[5px] w-full h-full  rounded-[5px] flex  " href={`/current-issues/${data?.slug_en}`}>{data?.name_en}</Link>
      </Tab>
    </>
  );
};

export default CurrentIsusesTab;
