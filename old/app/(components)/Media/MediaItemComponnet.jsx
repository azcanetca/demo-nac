import Image from "next/image";
import Link from "next/link";
import React from "react";

const MediaItemComponnet = ({ item, classes }) => {
 

  return (
    <>
      <div className={`swiper_hover  ${classes}`}>
        <Link href={`/m/${item?.id}/${item?.slug_en}`}>
          <div className="">
            {item &&
              item.src &&
              item.src
                ?.filter((elem) => elem?.is_cover === 1)
                ?.slice(0, 1)
                ?.map((elem, j) => {
                  const apiDate = item?.date;
                  const formattedDate = new Date(apiDate).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }
                  );
                  return (
                    <div key={j} className="w-full relative overflow-hidden">
                      <Image
                        src={elem?.src}
                        alt={elem?.title_en}
                        width={1000}
                        height={1000}
                        className="w-full object-cover h-[236.19px] "
                      />
                      <span className="absolute bottom-0 left-0 w-max h-[20px] flex items-center justify-center p-[16px] text-[17px] text-white bg-[#ec5a44]">
                        {formattedDate}
                      </span>
                    </div>
                  );
                })}
          </div>
          {item?.src?.length === 0 && (
            <Image
              width={1000}
              height={400}
              alt="no image"
              src={"/no_image.jpg"}
            />
          )}
          <p className="font-bold text-[16px] lg:text-[13px] mt-2 text-[#212529] line-clamp-2 transition-all ease-linear">
            {item?.title_en}
          </p>
        </Link>
      </div>
    </>
  );
};

export default MediaItemComponnet;
