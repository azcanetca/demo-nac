// MyPagination.js
"use client"; // Hook kullanacağımız için client component olmalı

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const MyPagination = ({ totalPage, currentPage, basePath }) => {
  const searchParams = useSearchParams(); // Mevcut URL parametrelerini al

  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  const currentNumPage = Number(currentPage);

  // Sayfalama linkleri için URL oluşturma fonksiyonu
  const createPageURL = (pageNum) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNum.toString());
    return `${basePath}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center pb-10">
      <div className="flex justify-center gap-[20px] items-center w-max px-11 py-2 border border-[#E9ECF4]">
        {/* Previous Page Link */}
        <Link
          href={createPageURL(currentNumPage - 1)} // Güncellenmiş link
          className={
            currentNumPage === 1 ? "pointer-events-none opacity-50" : ""
          }
          aria-disabled={currentNumPage === 1}
        >
          <img src="/arrow-narrow-left.svg" alt="arrow" />
        </Link>

        <div className="flex items-center gap-2">
          {pageNumbers.map((pageNum) => (
            <Link
              key={pageNum}
              href={createPageURL(pageNum)} // Güncellenmiş link
              className={`px-4 lg:px-2 py-2 lg:py-1 text-[14px]  hover:text-[#ec5a44] header_tr ${
                currentNumPage === pageNum
                  ? "text-[#ec5a44] font-bold"
                  : "font-normal"
              } rounded-md`}
            >
              {pageNum}
            </Link>
          ))}
        </div>

        {/* Next Page Link */}
        <Link
          href={createPageURL(currentNumPage + 1)} // Güncellenmiş link
          className={
            currentNumPage === totalPage ? "pointer-events-none opacity-50" : ""
          }
          aria-disabled={currentNumPage === totalPage}
        >
          <img
            className="rotate-[-180deg]"
            src="/arrow-narrow-left.svg"
            alt="arrow"
          />
        </Link>
      </div>
    </div>
  );
};

export default MyPagination;
