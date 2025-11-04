"use client";
import React, { useEffect, useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [fadeOutClass, setFadeOutClass] = useState("");
  const [isOpen, setIsOpen] = useState("");

  const handleChangeTab = (i) => {
    setFadeOutClass("fadeOutNoa");
    setTimeout(() => {
      setActiveTab(i);
      setIsOpen(i);
      setFadeOutClass("");
    }, 300);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFadeOutClass("");
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [fadeOutClass]);

  return (
    <>
      <div className="flex   items-center gap-[15px] flex-wrap">
        {children?.map((child, i) => (
          <button
            type="button"
            key={i}
            onClick={() => handleChangeTab(i)}
            className={`p-[10px] lg:p-[5px] rounded-[5px] uppercase text-[16px] lg:text-[14px] font-[600] min-w-[22%] ${
              activeTab === i
                ? "font-[700] bg-[#ec5a44] text-white shadow-[0_4px_13px_rgba(236,90,68,.6),0_2px_3px_rgba(236,90,68,.41)]"
                : "border bg-[#759acd] border-[#759acd] text-white  "
            }
              
            `}
          >
            {child?.props?.title}
          </button>
        ))}
      </div>
      <div className={`${isOpen} ${fadeOutClass}`}>{children?.[activeTab]}</div>
    </>
  );
};

export default Tabs;

Tabs.Panel = function ({ children }) {
  return <>{children}</>;
};