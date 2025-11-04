"use client";
import { useEffect, useRef } from "react";

const BackToTop = () => {
  const buttonTop = useRef();

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 300) {
        buttonTop?.current?.classList?.remove("remove");
      } else {
        buttonTop?.current?.classList?.add("remove");
      }
    }
  };

  // En üste animasyonlu geçiş
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", toggleVisibility);
      }
    };
  }, []);
  return (
    <button
      ref={buttonTop}
      onClick={scrollToTop}
      className="buttonTop remove fixed top-[88%] z-[200] right-4  text-white font-bold py-2 px-4 rounded-full transition_card"
    >
      <img src="/gototop.png" alt="" className="h-[70px]" />
    </button>
  );
};

export default BackToTop;
