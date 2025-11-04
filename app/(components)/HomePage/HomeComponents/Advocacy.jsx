import Image from "next/image";
import Link from "next/link";

const Advocacy = ({ advocacyData }) => {
  if (
    !advocacyData ||
    (Array.isArray(advocacyData) && advocacyData.length === 0)
  ) {
    return null; // Bu komut, bileşenin hiçbir şey render etmemesini sağlar.
  }

  const {
    title_1_en,
    title_2_en,
    text_en,
    src,
    link,
    title_our_advocacy_1,
    title_our_advocacy_2,
    title_our_advocacy_3,
  } = advocacyData;

  return (
    // 1. Arka plan rengini daha sıcak ve premium bir tona (taş rengi) çevirdik.
    //    Daha fazla "nefes alma alanı" için dikey boşluğu (py) artırdık.
    <section className="bg-stone-50 py-24 lg:py-12 md:py-6 overflow-hidden relative">
      <div className="container mx-auto px-4 2xl:max-w-full 2xl:px-[20px]">
        {/* 2. Arka plan yazısını daha büyük, daha soluk ve temayla alakalı hale getirdik. */}
        <div className=" flex  z-0">
          <div className="select-none">
            <span className="block uppercase absolute left-[4rem] text-[16rem] lg:text-[8rem]  font-black text-stone-200/70 whitespace-nowrap leading-none">
              {title_our_advocacy_1}
            </span>
            <h3 className="block absolute uppercase right-[2rem] bottom-10 text-[14rem] lg:text-[8rem]  font-black text-stone-200/70 whitespace-nowrap leading-none ">
              {title_our_advocacy_2}
            </h3>
          </div>
        </div>

        {/* Sütunları dikey olarak ortaladık (items-center) */}
        <div className="relative flex flex-col  items-center gap-x-12 gap-y-16">
          {/* Sol Taraf: Metin İçeriği (Daha dar bir alana aldık) */}
          <div className=" w-full text-center  z-10">
            {/* 3. Üst başlığı daha zarif hale getirdik: harf aralığı artırıldı, renk yumuşatıldı. */}
            <span className="font-semibold text-red-500 uppercase tracking-widest text-sm">
              {title_1_en}
            </span>
            <h2 className="mt-3 text-4xl lg:text-2xl font-extrabold text-gray-900 leading-tight">
              {title_2_en}
            </h2>
            <div
              className="mt-6 prose prose-lg max-w-none lg:text-[14px] text-gray-700 mx-auto lg:mx-0"
              dangerouslySetInnerHTML={{ __html: `${text_en}` }}
            />
            <div className="mt-10">
              {/* 4. Butonu daha interaktif ve şık hale getirdik: ikon eklendi ve hover efekti geliştirildi. */}
              <Link href={`${link}`} legacyBehavior>
                <a className="group inline-flex items-center gap-x-3 bg-[#ec5a44] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1">
                  <span>{title_our_advocacy_3}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>

          {/* Sağ Taraf: Görsel Alanı (Görsel için daha geniş bir alan ayırdık) */}
          <div className=" w-full flex justify-center">
            {/* 5. Görsel sunumunu tamamen değiştirdik. Daha kasıtlı ve mimari bir his veriyor. */}
            <div className="relative w-full max-w-lg">
              {/* Arkadaki renkli "çerçeve" katmanı */}
              <div className="absolute top-0 left-0 w-[95%] h-[95%] bg-stone-200 rounded-lg"></div>
              {/* Öndeki asıl görsel. Hafifçe kaydırılmış ve gölgeli. */}
              <div className="relative transform translate-x-4 -translate-y-4 md:translate-x-0 md:translate-y-0">
                <Image
                  src={src}
                  width={800}
                  height={700}
                  alt={title_2_en}
                  className="w-full h-auto object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advocacy;
