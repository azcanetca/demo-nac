"use client";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionItem = ({ accordionItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {accordionItems &&
        accordionItems?.map((item, i) => (
          <div key={i} className="bg-[#adc4e6] font-normal rounded-lg">
            <div
              className="flex justify-between items-center p-5 lg:p-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h2 className="font-semibold text-xl lg:text-lg text-white">
                {item?.option_title_en}
              </h2>
              <div>
                {isOpen ? (
                  <FaPlus className="h-5 w-5" />
                ) : (
                  <FaMinus className="h-5 w-5" />
                )}
              </div>
            </div>
            <CSSTransition
              in={isOpen}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <div className="p-5 lg:px-2 text-md text-black">
                {item?.supportus_en}
              </div>
            </CSSTransition>
          </div>
        ))}
    </>
  );
};

export default AccordionItem;
