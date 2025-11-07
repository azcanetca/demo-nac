// components/PressCentre.js
"use client";

// Gerekli hook'ları import edelim
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SharedBanner from "../GlobalBanner/SharedBanner";
import CampaignCard from "../TakeAction/TakeComponnet";
import { FiSearch } from "react-icons/fi";
import MyPagination from "../MyPagination/MyPagination";

const PressCentre = ({ data }) => {
  const breadcrumbData = [
    { name: "Home Page", link: "/" },
    { name: "Press Centre", link: "/press-centre" },
  ];

  const router = useRouter();
  const searchParams = useSearchParams();

  // Arama input'unun değerini tutmak için state
  // Başlangıç değerini URL'den alıyoruz
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("category") || ""
  );

  // --- ARTIK CLIENT-SIDE FİLTRELEMEYE GEREK YOK ---
  // Backend zaten filtrelenmiş veriyi gönderiyor.
  // const filteredMedia = data?.media?.filter(...) -> BU SATIRI SİLİYORUZ

  const paginationData = data?.pagination;

  // Debouncing: Kullanıcının yazmayı bırakmasını beklemek için
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // URL'i güncelle
      const params = new URLSearchParams(searchParams);
      if (searchTerm) {
        params.set("category", searchTerm);
        params.set("page", "1"); // Yeni arama her zaman 1. sayfadan başlamalı
      } else {
        params.delete("category");
      }
      // router.push yeni bir sunucu isteği tetikler ve sayfa yeniden render olur
      router.push(`/press-centre?${params.toString()}`);
    }, 500); // 500ms bekle

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, router]); // Sadece searchTerm değiştiğinde çalışır

  return (
    <>
      <div className="pt-[68px] md:pt-[63px] bg-gray-50">
        <SharedBanner
          images={data?.src}
          pageNames={breadcrumbData}
          title_en={data?.press_centre}
          imgClass="h-[500px] 2xl:h-[400px] md:h-[250px]"
          hiddenclass={`md:hidden`}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <div className="relative max-w-lg mx-auto">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search by category (e.g., Media, Statements...)"
                className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm outline-none transition-shadow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="pb-16 lg:pb-24">
            {/* Artık `data.media` kullanıyoruz, `filteredMedia` değil */}
            {data?.media && data.media.length > 0 ? (
              <div className="grid grid-cols-12 gap-8">
                {data.media.map((item) => (
                  <CampaignCard
                    key={item.id}
                    data={item}
                    pageName="press-centre"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-700">
                  {data?.no_found_presss}
                </h3>
                <p className="mt-2 text-gray-500">{data?.no_found_presss_2}</p>
              </div>
            )}
          </div>
          {/* Pagination component'inin de arama terimini bilmesi gerekiyor */}
          {paginationData && paginationData.last_page > 1 && (
            <MyPagination
              totalPage={paginationData.last_page}
              currentPage={paginationData.current_page}
              basePath={`/press-centre`}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PressCentre;
