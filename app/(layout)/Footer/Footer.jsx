"use client";

import BackToTop from "@/app/(components)/GoToTop/GoToTop";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = ({ footer }) => {
  // Veri yapılarını daha temiz ve yönetilebilir hale getirelim.
  const year = new Date().getFullYear();

  const menuLinks = {
    "We Are Nac": [
      { text: "Current issues", href: "/current-issues" },
      { text: "Take action", href: "/take-action" },
      { text: "Find your representative", href: "/find-your-representative" },
    ],
    Resources: [
      { text: "Statements", href: "/statements" },
      { text: "Media", href: "/media" },
      { text: "Community updates", href: "/community-updates" },
    ],
  };

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: footer?.sosials?.facebook,
      name: "Facebook",
    },
    {
      icon: <FaInstagram />,
      href: footer?.sosials?.instagram,
      name: "Instagram",
    },
    { icon: <FaTwitter />, href: footer?.sosials?.twitter, name: "Twitter" },
    { icon: <FaYoutube />, href: footer?.sosials?.youtube, name: "YouTube" },
    {
      icon: <FaLinkedinIn />,
      href: footer?.sosials?.linkedin,
      name: "LinkedIn",
    },
  ];

  return (
    // 1. Ana footer container'ı. Koyu tema ve göreceli konumlandırma.
    <footer className="bg-slate-900 text-slate-300 relative">
      {/* 2. Arka plan deseni, çok soluk bir doku olarak eklendi. */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${footer?.footer_bg})` }}
        aria-hidden="true"
      ></div>

      <BackToTop />

      {/* 3. Ana içerik, arka planın üzerinde (relative z-10) */}
      <div className="container mx-auto lg:max-w-full px-6 lg:px-4 py-16 lg:py-8 relative z-10">
        {/* Üst Kısım: Logo ve Sosyal Medya */}
        <div className="flex flex-col  justify-between items-center gap-8 pb-10">
          <Link href="/" className="inline-block">
            <Image
              src={footer?.headerlogo_white || "/notfound.webp"}
              width={200}
              height={50}
              alt="Network of Azerbaijani Canadians"
              className="h-auto lg:max-w-[120px]"
            />
          </Link>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-slate-400 hover:text-[#ec5a44] transition-colors duration-300 text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Orta Kısım: Link Sütunları */}
        <div className="grid grid-cols-12 w-full place-items-center place  gap-8 border-t border-slate-800 pt-10">
          {/* Sütunları dinamik olarak oluşturma */}
          {Object.entries(menuLinks).map(([title, links]) => (
            <div
              key={title}
              className="col-span-4 xl:col-span-6 md:col-span-12"
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {title}
              </h3>
              <ul className="mt-4 space-y-3  w-full">
                {links.map((link, i) => (
                  <li key={i} className="">
                    <Link href={link.href} legacyBehavior>
                      <a className="hover:text-[#ec5a44] transition-colors duration-300">
                        {link.text}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* İletişim Sütunu */}
          <div className="col-span-4 xl:col-span-6 md:col-span-12">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${footer?.sosials?.email}`}
                  className="hover:text-[#ec5a44] transition-colors duration-300"
                >
                  {footer?.sosials?.email}
                </a>
              </li>
              <li className="max-w-xs">
                <a
                  href={footer?.sosials?.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ec5a44] transition-colors duration-300"
                >
                  {footer?.sosials?.unvan_en}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım: Copyright ve Kredi */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col lg:gap-[2rem] justify-between items-center text-sm text-slate-500">
          <p>© {year} Network of Azerbaijani Canadians. All rights reserved.</p>
          <a
            href="https://shamans.az/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300 mt-4 sm:mt-0"
          >
            <span>Website by</span>
            <Image
              src={`${footer?.sosials?.shamans}`}
              width={20}
              height={20}
              alt="Shamans"
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
