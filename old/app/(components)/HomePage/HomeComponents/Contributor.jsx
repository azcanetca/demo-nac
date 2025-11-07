import Image from "next/image";
import Link from "next/link";

// İkonu butonun içinde kullanmayacağımız için silebilir veya yorum satırına alabilirsiniz.
// import { FaArrowRightLong } from "react-icons/fa6";

const Contributor = ({ contributor }) => {
  // Veri gelmediyse component'i render etme (iyi bir pratiktir).
  if (
    !contributor ||
    (Array.isArray(contributor) && contributor.length === 0)
  ) {
    return null; // Bu komut, bileşenin hiçbir şey render etmemesini sağlar.
  }

  const {
    pmission_src_mobile: src, // Daha kısa bir isim kullanalım
    pmission_title_1_en: title,
    pmission_text_en: text,
    pmission_button_en: buttonText,
  } = contributor;

  return (
    <section className="bg-white py-20 md:py-10 relative overflow-hidden">
      <div
        className="absolute top-[-5rem] left-[-15rem] w-[40rem] h-[40rem] bg-amber-100 rounded-full opacity-60 filter blur-3xl -z-0"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-[-10rem] right-[-10rem] w-[50rem] h-[50rem] bg-red-100 rounded-full opacity-50 filter blur-3xl -z-0"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="relative grid grid-cols-12 gap-6 items-center">
          <div className="col-span-6 lg:col-span-12 bg-slate-50 rounded-2xl p-12 lg:p-6 relative z-10 shadow-lg">
            <h1 className="text-4xl lg:text-2xl font-extrabold text-gray-900 tracking-tight">
              {title}
            </h1>
            <div
              className="mt-6 prose prose-lg max-w-none lg:text-[14px] text-gray-600"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <div className="mt-12">
              <Link href="/supportus" legacyBehavior>
                <a className="font-semibold text-lg text-gray-900 group">
                  <span>{buttonText}</span>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#ec5a44] mt-1"></span>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-12 lg:order-first  relative z-20  mb-8 lg:mb-0">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden ">
              <Image
                src={src || "/placeholder.jpg"}
                objectFit="cover"
                width={1000}
                height={500}
                alt={title || "Our Mission"}
                className="transform hover:scale-105 h-[500px] lg:h-[350px] object-cover transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributor;
