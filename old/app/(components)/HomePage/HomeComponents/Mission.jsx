"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// Dönüm noktaları için farklı ikonlar kullanalım
import { FaFlag, FaAward, FaUsers, FaArrowRight } from "react-icons/fa";

const Mission = ({ mission_api }) => {
  const timelineData = [
    {
      title: mission_api?.section_2?.section_two_title_1_en,
      description: mission_api?.section_2?.section_two_text_en,
      icon: FaFlag,
    },
    {
      title: mission_api?.section_3_4?.section_three_title_1_en,
      description: mission_api?.section_3_4?.section_three_text_en,
      icon: FaAward,
    },
    {
      title: mission_api?.section_3_4?.section_four_title_1_en,
      description: mission_api?.section_3_4?.section_four_text_en,
      icon: FaUsers,
    },
  ];

  return (
    <section className="bg-white  py-24 2xl:py-12  lg:py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Bölüm Başlığı */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[20px] 2xl:text-[17px] font-semibold  text-red-600">
            {mission_api?.our_journey}
          </span>
          <h2 className="mt-2 text-[35px] 2xl:text-[25px] md:text-[20px] font-bold tracking-tight text-gray-900  ">
            {mission_api?.our_journey_text2}
          </h2>
          <p className="mt-6 text-[20px] md:text-[14px]  text-gray-600 dark:text-gray-400">
            {mission_api?.our_journey_text3}
          </p>
        </div>

        {/* İnteraktif Zaman Tüneli */}
        <div className="relative mt-20 lg:mt-[30px]">
          {/* Merkezi Dikey Çizgi */}
          <div
            className="absolute lg:hidden left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200"
            aria-hidden="true"
          ></div>

          {/* Dönüm Noktaları */}
          <div className="space-y-16 md:space-y-8">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              // Animasyon varyantları
              const cardVariants = {
                hidden: { opacity: 0, x: isEven ? -100 : 100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              };
              const iconVariants = {
                hidden: { scale: 0 },
                visible: {
                  scale: 1,
                  transition: { duration: 0.4, delay: 0.3 },
                },
              };

              return (
                <div key={index} className="relative flex items-center">
                  {/* İkon Konteyneri (merkezde) */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={iconVariants}
                    className="absolute left-[48%] lg:hidden z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-red-600 text-white shadow-lg"
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>

                  {/* İçerik Kartı (sağda veya solda) */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                    className={`w-2/5 lg:w-full lg:m-auto ${
                      isEven ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    <div
                      className={`p-6 rounded-lg shadow-md lg:text-center ${
                        isEven ? "text-right" : "text-left"
                      } bg-gray-50 hover:scale-105  transition_card`}
                    >
                      <h3 className="mt-1 text-lg font-semibold text-red-600">
                        {item?.title}
                      </h3>
                      <div
                        className="mt-2 text-sm text-gray-600 dark:text-gray-400"
                        dangerouslySetInnerHTML={{
                          __html: `${item?.description}`,
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sonuç ve Eylem Çağrısı */}
        <div className="mt-24 lg:mt-10 text-center">
          <h3 className="text-3xl md:text-lg font-bold text-gray-900 ">
            {mission_api?.our_journey_text4}
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {mission_api?.our_journey_text5}
          </p>
          <div className="mt-8">
            <Link href={`/${mission_api?.our_journey_link}`}>
              <div className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                {mission_api?.our_journey_link_text}
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
