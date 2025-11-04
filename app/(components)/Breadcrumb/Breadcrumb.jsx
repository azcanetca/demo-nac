import Link from "next/link";
// İkonları ekleyelim
import { FaHome } from "react-icons/fa";

const LightPageHeader = ({
  pageNames,
  pageTitle,
  customClass = "text-gray-700",
  customClass1 = "",
  justify = "justify-between  lg:items-start md:items-center",
  hidden = "",
}) => {
  // Sitenizin ana vurgu rengini burada tanımlayalım.
  const accentColor = "#ec5a44";

  return (
    // Ana sarmalayıcı: Açık tema ve modern boşluklar
    <div className={` ${customClass1} `}>
      <div className="container mx-auto px-4 py-4 lg:max-w-full lg:px-[15px]">
        <div className={`flex flex-col  ${justify}  gap-4 md:gap-0`}>
          {/* Sol Taraf: Ana Başlık */}
          <div>
            <h2
              className={`text-4xl xl:text-2xl ${hidden} md:text-[16px] font-extrabold text-gray-800 tracking-tight`}
            >
              {pageTitle}
            </h2>
            {/* Dekoratif Vurgu Çizgisi */}
            <div
              className="mt-3 h-1.5 md:mt-0 w-24 rounded-full lg:hidden"
              style={{ backgroundColor: accentColor }}
            ></div>
          </div>

          {/* Sağ Taraf: Breadcrumb */}
          <nav aria-label="breadcrumb" className="mt-2 md:mt-0">
            <ol className="flex items-center flex-wrap gap-2 text-sm text-gray-500">
              {pageNames?.map((page, index) => (
                <li key={index} className="flex items-center gap-2">
                  {/* Son eleman hariç hepsinin arasında ayırıcı göster */}
                  {index > 0 && <span className="text-gray-400">/</span>}

                  {index < pageNames.length - 1 ? (
                    // Tıklanabilir linkler
                    <Link
                      href={page.link}
                      className="flex items-center gap-1.5 md:gap-0 transition-colors hover:text-gray-900"
                      style={{ color: accentColor }}
                    >
                      {index === 0 && <FaHome />}
                      <span className="capitalize md:text-[11px] font-medium">
                        {page.name}
                      </span>
                    </Link>
                  ) : (
                    // Aktif (son) sayfa, tıklanamaz
                    <span
                      className={`font-semibold ${customClass} md:text-[11px]   capitalize flex items-center gap-1.5 md:gap-0`}
                      aria-current="page"
                    >
                      {index === 0 && <FaHome />}
                      {page.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default LightPageHeader;
