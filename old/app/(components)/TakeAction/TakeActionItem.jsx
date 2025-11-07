// components/TakeActionItem.js
import Link from "next/link";
import LightPageHeader from "../Breadcrumb/Breadcrumb";
import TakeImages from "./TakeImages";
import { BsArrowRightShort } from "react-icons/bs"; // Modern bir ikon ekledik

const TakeActionItem = ({ data }) => {
  const pageNames = [
    { name: "Home page", link: "/" },
    { name: "Take action", link: "/take-action" },
    { name: `${data?.take?.title_en}`, link: `#` },
  ];

  return (
    <>
      <section className="pt-[72px] md:pt-[65px]">
        <LightPageHeader
          customClass=" lg:px-[5px]"
          pageNames={pageNames}
          pageTitle="Take Action"
          customClass1="bg-[#f6f6f6] 2xl:px-[40px] lg:px-[15px]"
        />

        <div className="bg-white py-16 2xl:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-16 xl:gap-8 md:gap-0">
              {/* Ana Makale Bölümü */}
              <div className="col-span-8 md:col-span-12">
                <div className="space-y-8">
                  {/* Resim Slider'ı */}
                  <TakeImages data={data?.take?.src} />

                  {/* Makale Başlığı ve Metni */}
                  <div className="px-2">
                    <h1 className="text-3xl lg:text-xl font-bold text-[#ec5a44] leading-tight">
                      {data?.take?.title_en}
                    </h1>
                    <p className="mt-4 text-[20px] lg:text-[13px] text-gray-600">
                      {data?.take?.intro_text_en}
                    </p>

                    {/* `prose` sınıfı ile harika bir okunabilirlik */}
                    <div
                      className="mt-8   lg:text-[13px] text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: `${data?.take?.text_en}`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Kenar Çubuğu (Sidebar) */}
              <aside className="col-span-4  md:col-span-12 lg:mt-[40px]">
                <div className="sticky top-24 space-y-8">
                  {" "}
                  {/* Sticky özelliği */}
                  <div className="bg-slate-50 rounded-xl p-6 md:p-3">
                    <h2 className="font-bold text-xl text-gray-800 mb-4">
                      Other articles
                    </h2>
                    <ul className="space-y-3">
                      {data?.randomBlogs?.map((cur) => (
                        <li key={cur?.id}>
                          <Link
                            href={`/take-action/${cur?.id}/${cur?.slug_en}`}
                            className="group flex justify-between items-center p-4 rounded-lg hover:bg-slate-200 transition-colors duration-200"
                          >
                            <div className="flex-1 pr-4">
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                                {cur?.title_en}
                              </h3>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: `${cur?.text_en}`,
                                }}
                                className="line-clamp-1 mt-1 text-sm text-gray-500"
                              />
                            </div>
                            <BsArrowRightShort className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-transform duration-200 group-hover:translate-x-1" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TakeActionItem;
