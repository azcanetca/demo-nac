"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  FaAngleDown,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useCallback, useEffect, useRef, useState } from "react";
import AltMenu from "./AltMenu";
import EmailAndAdress from "./EmailAndAdress";
import IoSearchLi from "./IoSearch";
import SupportUs from "./SupportUs";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

const Header = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState(null);
  const menu = useRef();
  const searchParams = useSearchParams();
  const input = useRef();
  const inputIcon = useRef();
  const alt_item = useRef();
  const opacityLi = useRef();
  const inputMob = useRef();
  const contactliInner = useRef();
  const router = useRouter();
  const [inputValue, setInputValue] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenIcon, setIsMenuOpenIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1099);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const openAltMenu = (name) => {
    setOpenSubCategory((prev) => (prev === name ? null : name));
  };
  const menuClassList = menu?.current?.classList;
  const openMenu = () => {
    if (menuClassList?.contains("xl:top-[-100%]")) {
      menuClassList?.replace("xl:top-[-100%]", "xl:top-16");
      setIsMenuOpen(true);
    } else {
      menuClassList?.replace("xl:top-16", "xl:top-[-100%]");
      setIsMenuOpen(false);
    }
  };
  function Close() {
    input?.current?.classList.remove("openInput");
    inputIcon?.current?.classList.add("inputIcon");
  }
  const openInput = () => {
    input?.current?.classList.add("openInput");
    inputIcon?.current?.classList.remove("inputIcon");
    input.current.focus();
  };
  const closeMob = () => {
    inputMob.current.classList.toggle("!right-0");
    inputMob.current.focus();
  };
  const closeInput = () => {
    Close();
  };
  const mobileSupport = isMobile ? "" : data?.navbar_colors?.navbar_btn;

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value.toLowerCase());
  };
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams || undefined);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      const query =
        inputValue !== undefined ? createQueryString("q", inputValue) : "";
      router.push(`/search/?${query}`);
      Close();
      closeMob();
      input.current.value = "";
      inputMob.current.value = "";
    }
  };
  const sosicals = [
    {
      id: 1,
      icon: <FaFacebook />,
      link: `${data?.sosials?.facebook}`,
    },
    {
      id: 2,
      icon: <FaInstagramSquare />,
      link: `${data?.sosials?.instagram}`,
    },
    {
      id: 3,
      icon: <FaTwitter />,
      link: `${data?.sosials?.twitter}`,
    },
    {
      id: 4,
      icon: <FaYoutube />,
      link: `${data?.sosials?.youtube}`,
    },
    {
      id: 5,
      icon: <FaLinkedin />,
      link: `${data?.sosials?.linkedin}`,
    },
  ];
  const openContactMenu = () => {
    contactliInner.current.classList.toggle("contactliInnerMob");
  };
  const openSearch = () => {
    closeMob();
    setIsMenuOpenIcon(true);
  };
  const closeSearch = () => {
    closeMob();
    setIsMenuOpenIcon(false);
  };
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/" || pathname === "/") {
      menuClassList?.replace("xl:top-16", "xl:top-[-100%]");
      setIsMenuOpen(true);
      setIsMenuOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <header
        className={`  bg-white w-full shadow-header z-[200]  fixed top-0 left-0 right-0  `}
      >
        <Script>
          {`
            window.interdeal = {
              "sitekey": "99292099e74a878f42c7a31740bb6203",
              "Position": "Left",
              "Menulang": "EN",
              "domains": {
                "js": "https://cdn.equalweb.com/",
                "acc": "https://access.equalweb.com/"
              },
              "btnStyle": {
                "vPosition": [ "80%", null ],
                "scale": [ "0.8", "0.8" ],
                "icon": {
                  "type": 7,
                  "shape": "semicircle",
                  "outline": false
                }
              }
            };
            var coreCall = document.createElement('script');
            coreCall.src = interdeal.domains.js + 'core/4.6.1/accessibility.js';
            coreCall.defer = true;
            coreCall.integrity = 'ssha512-hGa5HZtFkT1M7+tUDtU/cbw6AG0ORz3oblztCoTZ/z2qPyr7dgwH3zoT8qpgj21MgcRsMFLD6NNKePGvVks3Ig==';
            coreCall.crossOrigin = 'anonymous';
            coreCall.setAttribute('data-cfasync', true );
            document.body.appendChild(coreCall);
          `}
        </Script>
        <nav className="py-[10px] px-[20px] xl:px-[10px] flex items-center relative  gap-4 xl:justify-between">
          <div className=" px-[40px] h-full xl:px-[10px]">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src={
                  data?.headerlogo
                    ? data?.headerlogo
                    : "https://api.azcanet.ca/nac/img/naclogo.svg"
                }
                width={140}
                height={100}
                alt="azcanet.ca website "
              />
            </Link>
          </div>
          <div className="w-full flex justify-end ">
            <ul
              className={`  flex gap-2 justify-evenly bg-[#fff]  w-full transition-all  xl:flex-col xl:fixed xl:top-[-100%] xl:right-0 xl:left-0 xl:px-8 md:px-2`}
              ref={menu}
            >
              {data?.header &&
                data?.header?.map((item, i) => (
                  <AltMenu
                    key={i}
                    refkey={opacityLi}
                    refkey2={alt_item}
                    openSubCategory={openSubCategory}
                    isMobile={isMobile}
                    openAltMenu={() => openAltMenu(item?.alt_menu)}
                    items={item}
                    openMenu={openMenu}
                  />
                ))}
              <li
                onClick={openContactMenu}
                className="flex gap-2 flex-col relative h-full p-[8px] cursor-pointer  uppercase bg-[#ec5a44] rounded-md tl  items-start justify-center  font-semibold text-white border-[1px] border-solid border-transparent  xl:justify-start xl:bg-transparent xl:text-[#ec5a44] xl:border-b-[1px] bg:border-solid xl:border-b-[#0000008a]  md:p-[4px] contactLi"
              >
                <div className="flex items-center">
                  <span className="text-lg 2xl:text-[13px]">contact</span>
                  <FaAngleDown />
                </div>
                <div
                  ref={contactliInner}
                  className={`absolute contactLi top-[55px] left-0 px-[20px] py-[20px] rounded-md right-0  w-[400px] h-auto text-black tl bg-[#fff]
              ${isMobile ? "contactliInnerMob" : "contactliInner"}`}
                >
                  <EmailAndAdress
                    sosicals={sosicals}
                    email={data?.sosials?.email}
                    map={data?.sosials?.map}
                    adress={data?.sosials?.unvan_en}
                  />
                </div>
              </li>
              <IoSearchLi openInput={openInput} />
              <SupportUs mobileSupport={mobileSupport} />

              <li className="">
                <div className="flex items-center  w-full relative ">
                  <input
                    ref={input}
                    onKeyUp={(e) => handleKeyUp(e)}
                    onChange={handleChange}
                    className={`fixed inputSearch  top-[10px] right-[40px]  border-[1px] rounded-md  border-red-400 text-black  tl z-[300] px-[10px] py-[10px] outline-none`}
                    type="text"
                  />
                  <div
                    onClick={closeInput}
                    ref={inputIcon}
                    className="inputIcon"
                  >
                    <IoMdClose className="absolute  cursor-pointer right-[-10px] top-[10px] text-2xl z-[301]" />
                  </div>
                </div>
              </li>
            </ul>
            <div className="hidden xl:flex mt-1 mr-5">
              {isMenuOpenIcon ? (
                <IoMdClose
                  onClick={closeSearch}
                  className="text-2xl text-[#ec5a44] cursor-pointer"
                />
              ) : (
                <FaSearch
                  onClick={openSearch}
                  className="text-xl text-[#ec5a44] cursor-pointer"
                />
              )}

              <input
                ref={inputMob}
                onKeyUp={(e) => handleKeyUp(e)}
                onChange={handleChange}
                className={`absolute  top-[70px] -right-full  border-[1px] rounded-md  border-red-400 text-black w-[80%]  tl z-[300] px-[10px] py-[10px] outline-none`}
                type="text"
              />
            </div>
            <div className="hidden xl:flex">
              <button
                onClick={openMenu}
                className="flex h-full px-[18px] xl:px-[10px] cursor-pointer  uppercase   bg-[#ec5a44] xl:bg-transparent rounded-md tl  items-center justify-center text-lg font-semibold text-white border-[1px] border-solid xl:border-0 "
              >
                {isMenuOpen ? (
                  <AiOutlineClose className="text-[30px] text-[#ec5a44]" />
                ) : (
                  <RiMenu3Fill className="text-[30px] text-[#ec5a44]" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
