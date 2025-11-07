import Image from "next/image";
import Link from "next/link";
import React from "react";
// İkonlar için react-icons kütüphanesini ekleyelim
import { FaHeart, FaUsers, FaHandsHelping, FaArrowRight } from "react-icons/fa";

const CommunityActions = ({ data, learn_more }) => {
  // Kart verilerini daha zengin hale getirelim: ikonlar ve kısa açıklamalar ekleyelim.
  const cards = [
    {
      id: 1,
      link: data?.link_1 || "#",
      src: data?.photo_1 || "/path/to/default-volunteer.jpg",
      title: data?.photo_1_text_en || "Become a Volunteer",
      description: "Join our team and make a direct impact on the community.",
      icon: <FaHandsHelping size={24} />,
    },
    {
      id: 2,
      link: data?.link_2 || "#",
      src: data?.photo_2 || "/path/to/default-donation.jpg",
      title: data?.photo_2_text_en || "Support with Donations",
      description: "Your contribution helps us continue our vital work.",
      icon: <FaHeart size={24} />,
    },
    {
      id: 3,
      link: data?.link_3 || "#",
      src: data?.photo_3 || "/path/to/default-member.jpg",
      title: data?.photo_3_text_en || "Become a Member",
      description: "Be a part of our growing family and enjoy the benefits.",
      icon: <FaUsers size={24} />,
    },
  ];

  return (
    <div className="bg-white py-20 xl:py-10 2xl:px-[30px] md:px-[15px]">
      <div className="container mx-auto px-4 lg:px-8 md:px-0">
        <div className="text-center mb-16">
          <h2
            className="text-4xl 2xl:text-3xl xl:text-2xl md:text-lg font-bold text-gray-800"
            dangerouslySetInnerHTML={{
              __html: `${data?.title_1_en}`,
            }}
          ></h2>
          <p
            className="mt-4 text-lg md:text-[13px] text-gray-600 max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{
              __html: `${data?.text_en}`,
            }}
          ></p>
        </div>

        {/* 
          Eylem Kartları Grid'i
          max-lg (991px altı): 2 sütun
          max-md (767px altı): 1 sütun
        */}
        <div className="grid grid-cols-12  gap-8 md:gap-0">
          {cards.map((card) => (
            <Link
              href={card.link}
              key={card.id}
              className="col-span-4 lg:col-span-6 md:col-span-12 md:mb-[25px]"
            >
              {/* 
                group sınıfı, bu elementin üzerine gelindiğinde içindeki
                group-hover:* sınıflarının aktif olmasını sağlar.
              */}
              <div
                className="
                  group relative block h-96 w-full rounded-2xl overflow-hidden shadow-lg 
                  transition-all duration-500 ease-in-out
                  hover:!shadow-2xl hover:scale-105
                "
              >
                {/* Arka Plan Resmi */}
                <Image
                  src={card.src}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="
                    transition-transform duration-500 ease-in-out
                    group-hover:scale-110
                  "
                />

                {/* Başlangıçta Görünen Gradyan ve Başlık */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="mb-2">{card.icon}</div>
                  <div
                    className="text-3xl 2xl:text-xl font-bold"
                    dangerouslySetInnerHTML={{ __html: `${card?.title}` }}
                  />
                </div>

                {/* 
                  Hover'da Yukarı Kayan "Perde"
                  Başlangıçta translate-y-full ile ekranın altında gizlenir.
                  group-hover:translate-y-0 ile görünür hale gelir.
                */}
                <div
                  className="
                    absolute inset-0 p-8 flex flex-col justify-end
                    bg-black/70 backdrop-blur-sm text-white
                    transform translate-y-full group-hover:translate-y-0
                    transition-transform duration-500 ease-in-out
                  "
                >
                  <div className="mb-4">{card.icon}</div>
                  <div
                    className="text-3xl 2xl:text-xl  font-bold"
                    dangerouslySetInnerHTML={{ __html: `${card?.title}` }}
                  />
                  <div
                    className="mt-2 text-base opacity-90"
                    dangerouslySetInnerHTML={{ __html: `${card.description}` }}
                  />
                  <div className="mt-6 font-semibold flex items-center gap-2">
                    {learn_more} <FaArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityActions;
