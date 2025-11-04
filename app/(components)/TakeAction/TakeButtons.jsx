"use client";

import { useState } from "react";

const TakeButtons = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);

  const filteredData = data?.filter((item) => item?.draft === activeTab);
  return (
    <>
      <div className="inline-flex rounded-lg gap-[24px] shadow-sm bg-white p-1">
        <button
          type="button"
          onClick={() => setActiveTab(0)}
          className={`px-6 py-2 text-sm font-semibold outline-none rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ec5a44] focus:ring-offset-2 ${
            activeTab === 0
              ? "bg-[#ec5a44] text-white shadow"
              : "text-gray-600 hover:bg-slate-100"
          }`}
        >
          Past
        </button>
        <button
          type="button"
          onClick={() => setActiveTab(1)}
          className={`px-6 py-2 text-sm font-semibold outline-none rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ec5a44] focus:ring-offset-2 ${
            activeTab === 1
              ? "bg-[#ec5a44] text-white shadow"
              : "text-gray-600 hover:bg-slate-100"
          }`}
        >
          Current
        </button>
      </div>
    </>
  );
};

export default TakeButtons;
