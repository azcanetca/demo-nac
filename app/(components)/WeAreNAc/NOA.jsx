"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { useVideoModal } from "../CustumYoutubeModal/useVideoModal";
import CustumYoutubeModal from "../CustumYoutubeModal/CustumYoutubeModal";

const AnimatedEditorialIntro = ({ dataSection1, dataCounter }) => {
  // const stats = [
  //   { id: 1, count: dataCounter?.events, title: "Organized Events" },
  //   { id: 2, count: dataCounter?.parliament, title: "Chapters" },
  //   { id: 3, count: dataCounter?.programs, title: "Page Audience" },
  // ];

  // const statsContainerRef = useRef(null);

  // useEffect(() => {
  //   const statsContainer = statsContainerRef.current;
  //   if (!statsContainer) return;

  //   // Her bir sayıyı canlandıracak fonksiyon
  //   const animateCount = (element) => {
  //     const target = parseInt(element.dataset.target, 10);
  //     let current = 0;
  //     const increment = target / 150; // Animasyon hızını ayarlar (daha büyük sayı = daha yavaş)

  //     const updateCount = () => {
  //       current += increment;
  //       if (current < target) {
  //         // Sayıyı yuvarlayıp, formatlayıp elemente yazdır
  //         element.innerText = Math.ceil(current).toLocaleString("en-US");
  //         requestAnimationFrame(updateCount); // Bir sonraki frame'de tekrar çalıştır
  //       } else {
  //         element.innerText = target.toLocaleString("en-US"); // Son değeri garantile
  //       }
  //     };

  //     updateCount();
  //   };

  //   // Intersection Observer'ı oluştur
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         // Element ekrana girdi mi?
  //         if (entry.isIntersecting) {
  //           // Tüm '.counter' elemanlarını bul ve animasyonu başlat
  //           const counters = statsContainer.querySelectorAll(".counter");
  //           counters.forEach(animateCount);

  //           // Animasyon bir kere çalıştıktan sonra observer'ı durdur
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5, // Elementin en az %50'si göründüğünde tetikle
  //     }
  //   );

  //   // Observer'ı istatistikler konteynerını izlemesi için başlat
  //   observer.observe(statsContainer);

  //   // Bileşen kaldırıldığında observer'ı temizle
  //   return () => observer.disconnect();
  // }, []);

  const { isModalOpen, handleCloseModal, currentVideoUrl, containerRef } =
    useVideoModal();

  return (
    <>
      <div ref={containerRef} className="bg-gray-50 font-sans ">
        <div className="container mx-auto px-4 py-8 2xl:px-[30px] md:px-[15px]">
          <div className="grid grid-cols-12 gap-8 md:gap-0 items-center  ">
            <div className="relative col-span-7 group lg:col-span-12">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={1000}
                  height={750}
                  src={dataSection1?.section_one_src}
                  alt="Azerbaijani Canadians community gathering"
                />
              </div>
              <button
                data-videolink={dataSection1?.section_one_video_link}
                className="absolute play-button  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#ec5a44] text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
              >
                <FaPlay className="text-xl ml-1" />
              </button>
            </div>

            <div className="col-span-5 lg:col-span-12 z-10 -ml-24 lg:ml-0 md:mt-[20px]">
              <div className="bg-white rounded-2xl shadow-xl p-8 xl:p-4">
                <div>
                  <h3 className="text-gray-400 md:text-[14px] font-semibold tracking-widest uppercase">
                    {dataSection1?.section_one_title_new_en}
                  </h3>
                  <h1 className="text-4xl xl:text-2xl md:text-[15px] font-bold text-gray-800 mt-2 leading-tight">
                    {dataSection1?.section_one_title_1_en}
                  </h1>
                  <p
                    className="mt-6 md:mt-2 text-base md:text-lg text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: dataSection1?.section_one_text_en,
                    }}
                  ></p>
                </div>

                {/* <div
                  ref={statsContainerRef}
                  className="mt-10 pt-8 border-t border-gray-200"
                >
                  <div className="flex justify-between items-start text-center max-md:flex-col max-md:text-left max-md:gap-6">
                    {stats.map((item) => (
                      <div key={item.id} className="px-2">
                        <p
                          className="counter text-4xl font-bold text-[#ec5a44]"
                          data-target={item.count}
                        >
                          0
                        </p>
                        <p className="mt-1 text-sm text-gray-500 uppercase tracking-wider">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <CustumYoutubeModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          videoUrl={currentVideoUrl}
        />
      </div>
    </>
  );
};

export default AnimatedEditorialIntro;
