// components/TakeAction/TakeAction.js
"use client";

import { useState } from "react";

import CampaignCard from "./TakeComponnet";
import SharedBanner from "../GlobalBanner/SharedBanner";

const TakeAction = ({ data }) => {
  // 0 for 'Past', 1 for 'Current'
  const [activeTab, setActiveTab] = useState(0);

  const filteredData = data?.take?.filter((item) => item?.draft === activeTab);

  const breadcrumbData = [
    { name: "Home Page", link: "/" },
    { name: "Take Action", link: "/take-action" },
  ];

  return (
    <>
      <div>
        <SharedBanner
          images={data?.take_action?.take_action_banner_src}
          pageNames={breadcrumbData}
          title_en={data?.take_action?.take_action}
          imgClass={`h-[380px] md:h-[250px]`}
          justify="justify-start"
        />
      </div>

      <section className="bg-slate-50 py-10 md:py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:mb-10">
          {/* Modern Toggle Switch */}
          <div className="flex justify-center  mb-12 md:mb-6">
            <div className="inline-flex rounded-lg gap-[24px] shadow-sm bg-white p-1">
              <button
                type="button"
                onClick={() => setActiveTab(1)}
                className={`px-6 py-2 text-sm font-semibold outline-none rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ec5a44] focus:ring-offset-2 ${
                  activeTab === 1
                    ? "bg-[#ec5a44] text-white shadow"
                    : "text-gray-600 hover:bg-slate-100"
                }`}
              >
                Past
              </button>
              <button
                type="button"
                onClick={() => setActiveTab(0)}
                className={`px-6 py-2 text-sm font-semibold outline-none rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ec5a44] focus:ring-offset-2 ${
                  activeTab === 0
                    ? "bg-[#ec5a44] text-white shadow"
                    : "text-gray-600 hover:bg-slate-100"
                }`}
              >
                Current
              </button>
            </div>
          </div>

          {/* Campaign Cards List */}
          <div className=" grid grid-cols-12 gap-[24px]">
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <CampaignCard
                  key={item.id}
                  data={item}
                  index={index}
                  pageName="take-action"
                />
              ))
            ) : (
              <div className="text-center py-12 col-span-12">
                <h3 className="text-2xl font-semibold text-gray-700">
                  No campaigns to show.
                </h3>
                <p className="mt-2 text-gray-500">Please check back later.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TakeAction;
