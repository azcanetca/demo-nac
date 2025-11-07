// components/TakeAction/CampaignCard.js
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const CampaignCard = ({ data, pageName = "" }) => {
  return (
    <article className="bg-white col-span-4 lg:col-span-6 md:col-span-12 group  rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 flex flex-col">
      <div className="relative">
        {data?.src?.[0]?.src && (
          <Link
            href={`/${pageName}/${data?.id}/${data?.slug_en}`}
            className="block"
          >
            <Image
              src={data.src[0].src}
              alt={data?.title_en || "Campaign Image"}
              width={800}
              height={500}
              className="w-full h-[250px] object-cover"
            />
            <span className="absolute top-0 left-0 right-0 w-full h-full bg-[#0000004a]"></span>
          </Link>
        )}

        {data?.category_name && (
          <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider py-1.5 px-3 rounded-full">
            {data?.category_name}
          </span>
        )}
        {data?.date && (
          <span className="absolute bottom-3 right-3 bg-white/70 backdrop-blur-sm text-gray-800 text-xs font-bold py-1.5 px-3 rounded-full">
            {data?.date}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl md:text-[14px] font-bold text-gray-900 leading-snug">
          <Link
            href={`/${pageName}/${data?.id}/${data?.slug_en}`}
            className="hover:text-[#ec5a44] transition-colors group-hover:text-[#ec5a44]"
          >
            {data?.title_en}
          </Link>
        </h2>

        {/* Kısa Açıklama */}
        <div
          className="mt-3 text-gray-600 leading-relaxed line-clamp-3 flex-grow md:text-[14px]"
          dangerouslySetInnerHTML={{ __html: data?.intro_text_en }}
        />

        {/* "See more" Linki */}
        <div className="mt-6">
          <Link
            href={`/${pageName}/${data?.id}/${data?.slug_en}`}
            className="inline-flex items-center font-semibold text-[#ec5a44] group text-base"
          >
            <span>Read more</span>
            <FiArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CampaignCard;
