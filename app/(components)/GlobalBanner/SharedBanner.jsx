import LightPageHeader from "../Breadcrumb/Breadcrumb";
import Image from "next/image";

const SharedBanner = ({
  images,
  pageNames,
  title_en,
  alt = "",
  imgClass = "h-[500px]",
  hiddenclass,
  justify,
}) => {
  return (
    <>
      <header className={`relative w-full ${imgClass}  text-white`}>
        {images && (
          <Image
            src={images} // Resim yolu doğrudan kullanılabilir
            alt={alt}
            layout="fill"
            objectFit="cover"
            className={`${imgClass}`}
            priority // Sayfanın en üstündeki büyük resimler için "priority" prop'u önemlidir
          />
        )}
        {/* Okunabilirlik için Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>

        {/* Başlık ve Breadcrumb için Konteyner */}
        <div
          className={`relative h-full container mx-auto flex flex-col justify-end pb-16 2xl:pb-8 2xl:px-[40px] md:px-[15px]`}
        >
          <LightPageHeader
            justify={justify}
            pageNames={pageNames}
            customClass="text-white"
          />
          <h2
            className={`mt-4 md:mt-0 text-4xl ${hiddenclass}  md:text-xl text-white font-extrabold tracking-tight`}
          >
            {title_en}
          </h2>
        </div>
      </header>
    </>
  );
};

export default SharedBanner;
