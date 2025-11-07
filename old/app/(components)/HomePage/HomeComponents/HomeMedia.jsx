// Gerekli importlar ve ArticleCard component'i aynı kalıyor.
import Link from "next/link";
import { format } from "date-fns";

const ArticleCard = ({ item, colSpan }) => (
  <div
    className={`relative hover:scale-105 transition_card  h-[400px]  md:h-[400px]  rounded-2xl overflow-hidden z-10 ${colSpan}`}
  >
    {/* ... Kart içeriği aynı ... */}
    <Link href={`/press-centre/${item?.id}/${item?.slug_en}`}>
      <div className="block w-full h-full relative">
        {item?.src?.map((elem, i) => (
          <img
            key={i}
            src={elem.src || "/placeholder.jpg"}
            alt={item.title_en}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
        {item?.category_name && (
          <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider py-1.5 px-3 rounded-full">
            {item?.category_name}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <span className=" mb-2 text-xs font-semibold bg-red-600 px-3 py-1 rounded-full inline-block">
            {format(new Date(item?.created_at), "dd MMM yyyy")}
          </span>
          <h3 className="text-xl md:text-[15px] font-bold leading-tight mt-2 line-clamp-2">
            {item.title_en}
          </h3>
        </div>
      </div>
    </Link>
  </div>
);

// DEĞİŞİKLİK BURADA BAŞLIYOR
const HomeMedia = ({ mediaDataAll }) => {
  let mediaData = mediaDataAll?.media;

  return (
    // BÖLÜMÜN ANA CONTAINER'I GÜNCELLENDİ
    <section className={`relative bg-slate-50 py-20 md:py-24 my-16`}>
      {/* Üst Dalga Ayırıcı */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* İçerik Container'ı */}
      <div className="container mx-auto px-4 2xl:max-w-full 2xl:px-[20px]">
        {/* Başlık Bölümü */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-[25px] font-bold text-gray-800 mb-2">
            {mediaDataAll?.press_centre}
          </h2>
          <div className="w-24 h-1.5 bg-[#ec5a44] mx-auto rounded-full"></div>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-12 gap-[24px]">
          {mediaData &&
            mediaData?.map((item) => (
              <ArticleCard
                colSpan={`col-span-3 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12`}
                item={item}
                key={item.id}
              />
            ))}
        </div>
      </div>

      {/* Alt Dalga Ayırıcı */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HomeMedia;
