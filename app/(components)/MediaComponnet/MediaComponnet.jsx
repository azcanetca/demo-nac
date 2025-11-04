import Image from "next/image";
import Link from "next/link";

const MediaComponnet = ({ item, classes }) => {
  return (
    <>
      <div
        className={`swiper_hover  ${classes} bg-[#f6f6f67a] border border-[#eee] rounded-xl overflow-hidden`}
      >
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
                      className="w-full object-cover h-[270px] "
                    />
                    <span className="absolute bottom-0 right-0 w-max h-[20px] flex items-center justify-center p-[16px] text-[17px] text-white bg-[#ec5a44]">
                      {formattedDate}
                    </span>
                  </div>
                );
              })}
        </div>
        <p className="font-bold text-[16px] px-4 lg:text-[13px] mt-2 text-[#212529] line-clamp-2 transition-all ease-linear">
          {item?.title_en}
        </p>
        <div className="flex items-center justify-center mt-5 mb-5 ">
          <Link
            className="bg-[#ec5a44] text-white px-4 py-2 rounded-xl"
            href={`/m/${item?.id}/${item?.slug_en}`}
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default MediaComponnet;
