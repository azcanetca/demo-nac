import React from "react";

const EmailAndAdress = ({ sosicals, email, map, adress }) => {
  return (
    <>
      <div className="flex flex-col gap-2 bg-white">
        <div className="flex items-center border-b-[1px] pb-3">
          <span className="text-[13px] capitalize">
            email :
            <a className="lowercase pl-1" href={`mailto:${email}`}>
              {email}
            </a>
          </span>
        </div>
        <div className="flex items-center border-b-[1px] pb-3">
          <span className="text-[13px] capitalize">
            adress :
            <a className="lowercase pl-1" target="_blank" href={`${map}`}>
              {adress}
            </a>
          </span>
        </div>
        <ul className="flex items-center gap-5 mt-2">
          {sosicals?.map((item, i) => (
            <li
              key={i}
              className="text-[#f44] text-[25px] tl hover:-translate-y-2"
            >
              <a
                href={item?.link}
                className="inline-block md:text-[20px]"
                target="_blank"
              >
                {item?.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EmailAndAdress;
