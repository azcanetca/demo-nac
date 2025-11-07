import Link from "next/link";
import SharedBanner from "../GlobalBanner/SharedBanner";
// --- DÜZELTİLMİŞ IMPORTLAR ---
import { FaCreditCard, FaRegEnvelope } from "react-icons/fa";
import { FiMail } from "react-icons/fi"; // FiMail doğru yerden import edildi

// Her bir kart için yeniden kullanılabilir bir component oluşturmak daha temiz bir yaklaşımdır.
const SupportCard = ({ icon, title, text, href, isExternal = false }) => {
  const IconComponent = icon;

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="group block col-span-4 lg:col-span-6 md:col-span-12"
    >
      <div className="bg-white rounded-xl shadow-lg p-8 text-center h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 rounded-full p-4">
            <IconComponent className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>
    </Link>
  );
};

const SupportUs = ({ data }) => {
  const pageNames = [
    { name: "Home page", link: "/" },
    { name: "Support Us", link: "#" },
  ];

  return (
    <>
      <div className="pt-[68px] md:pt-[63px]">
        <SharedBanner
          images={data?.search_banner_src}
          pageNames={pageNames}
          title_en={data?.support_top_title}
          imgClass={`h-[380px] md:h-[280px]`}
          justify="justify-start lg:items-start "
        />
      </div>
      <div className="bg-slate-50 py-16 lg:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div
              className="text-[20px] md:text-[14px] text-gray-700 max-w-none"
              dangerouslySetInnerHTML={{
                __html: `${data?.support_top_title_2}`,
              }}
            />
            <div
              className="text-[20px] md:text-[14px] text-gray-600 max-w-none"
              dangerouslySetInnerHTML={{
                __html: `${data?.support_top_title_3}`,
              }}
            />
          </div>
          <div className="grid grid-cols-12 gap-8">
            <SupportCard
              icon={FaCreditCard}
              title={data?.support_credit_card}
              text={data?.support_card_1_text}
              href={data?.support_card_1_link || "#"}
              isExternal={true}
            />
            <SupportCard
              icon={FiMail}
              title={data?.support_e_transfer}
              text={data?.support_card_2_text}
              href="#"
            />
            <SupportCard
              icon={FaRegEnvelope}
              title={data?.support_e_cheque}
              text={data?.support_card_3_text}
              href="#"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center mt-16">
            <div
              className="prose text-sm text-gray-500 max-w-none"
              dangerouslySetInnerHTML={{
                __html: `${data?.support_bottom_text}`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportUs;
