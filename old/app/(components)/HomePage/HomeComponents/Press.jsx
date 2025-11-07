import Image from "next/image";
import Link from "next/link";

const Press = ({ press }) => {
  if (!press || (Array.isArray(press) && press.length === 0)) {
    return null;
  }

  const { title_1_en, text_en, src, title_view_all, link } = press;

  return (
    <section className="bg-white py-20 md:py-12 relative overflow-hidden">
      <div
        className="absolute top-[-10rem] right-[-15rem] w-[50rem] h-[50rem] bg-red-100 rounded-full opacity-60 filter blur-3xl -z-0"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-[-15rem] left-[-10rem] w-[45rem] h-[45rem] bg-amber-100 rounded-full opacity-50 filter blur-3xl -z-0"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="relative grid grid-cols-12 gap-6 items-center">
          <div className="col-span-6 lg:col-span-12 bg-slate-50 rounded-2xl p-12 lg:p-6 relative z-10 ">
            <h1 className="text-4xl xl:text-2xl font-extrabold text-gray-900 tracking-tight">
              {title_1_en}
            </h1>
            <div
              className="mt-6 prose prose-lg max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: `${text_en}` }}
            />
            <div className="mt-12">
              <Link href={`/${link}`} legacyBehavior>
                <a className="font-semibold text-lg text-gray-900 group">
                  <span>{title_view_all}</span>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#ec5a44] mt-1"></span>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-12 relative z-20 order-first mb-8 lg:mb-0">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={src}
                width={1000}
                height={600}
                objectFit="cover"
                alt="Press Centre - Baku"
                className="transform lg:h-[400px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;
