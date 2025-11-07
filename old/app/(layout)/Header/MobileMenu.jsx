"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const MobileMenu = ({ ref1, closeMobileMenu, data }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);

  const handleOpen = (name) => () => {
    setOpenCategory((prev) => (prev === name ? null : name));
    // Ana kategori değiştiğinde, alt kategori menüsünü kapat
    setOpenSubCategory(null);
  };

  const handleSubOpen = (name) => (event) => {
    // Tıklamanın üst menüyü kapatmasını engelle
    event.stopPropagation();
    setOpenSubCategory((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <div
        ref={ref1}
        className="fixed top-0 left-[-300%] tran1 w-[350px] md:w-full z-[150] h-full bg-white px-[40px] py-[60px] overflow-y-auto"
      >
        <span
          onClick={closeMobileMenu}
          className="absolute top-5 right-5 text-black text-[25px] cursor-pointer"
        >
          <MdOutlineClose />
        </span>
        <ul className="flex flex-col gap-y-2">
          {data?.map((cur) => (
            // Ana kategorinin li elemanı
            <li
              onClick={handleOpen(cur?.menu_en)}
              key={cur?.id}
              className="cursor-pointer"
            >
              {cur?.alt_menu && cur.alt_menu.length > 0 ? (
                <h3 className=" flex text-[17px]  items-center justify-between uppercase gap-2 trans hover:text-[#003B71]">
                  {cur?.menu_en}
                  <span>
                    {openCategory === cur?.menu_en ? (
                      <FaChevronUp className="text-sm" />
                    ) : (
                      <FaChevronDown className="text-sm" />
                    )}
                  </span>
                </h3>
              ) : (
                <Link
                  className="flex text-[17px]  items-center uppercase gap-2 trans hover:text-[#003B71]"
                  href={`/${cur?.slug_en}`}
                  onClick={closeMobileMenu}
                >
                  {cur?.menu_en}
                </Link>
              )}

              {/* İkinci seviye menü (cur.alt_menu) */}
              <ul
                className={`trans gap-1 overflow-hidden ${
                  openCategory === cur?.menu_en
                    ? "flex visible h-auto flex-col mt-1 ml-2 mb-1"
                    : "invisible h-0"
                }`}
              >
                {cur?.alt_menu?.map((elem, i) => {
                  return (
                    // İkinci seviye menünün li elemanı
                    <li
                      // Tıklama olayını burada yakalayıp durduruyoruz
                      onClick={handleSubOpen(elem?.menu_en)}
                      className="trans "
                      key={i}
                    >
                      {/* Eger ikinci seviyenin de alt menüsü varsa (3. seviye) */}
                      {elem.alt_menu && elem.alt_menu.length > 0 ? (
                        <h3 className="flex h-full w-full text-[15px] items-center justify-between capitalize hover:text-[#003B71]">
                          {elem?.menu_en}
                          <span>
                            {openSubCategory === elem?.menu_en ? (
                              <FaChevronUp className="text-xs" />
                            ) : (
                              <FaChevronDown className="text-xs" />
                            )}
                          </span>
                        </h3>
                      ) : (
                        <Link
                          href={`/${elem.slug_en}`}
                          onClick={(e) => {
                            e.stopPropagation(); // Linke tıklarken de yayılmayı durdur
                            closeMobileMenu();
                          }}
                          className="flex h-full w-full text-[15px] capitalize hover:text-[#003B71]"
                        >
                          {elem?.menu_en}
                        </Link>
                      )}

                      {/* Üçüncü seviye menü (elem.alt_menu) */}
                      <ul
                        className={`trans gap-1 overflow-hidden ${
                          openSubCategory === elem?.menu_en
                            ? "flex visible h-auto flex-col mt-1 ml-2 mb-1"
                            : "invisible h-0"
                        }`}
                      >
                        {elem?.alt_menu?.map((itm, i) => (
                          <li key={i}>
                            <Link
                              href={`/${elem.slug_en}/${itm?.id}/${itm.slug_en}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                closeMobileMenu();
                              }}
                              className="hover:text-[#003B71] text-[14px] capitalize block"
                            >
                              {itm?.name_en}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
