import Link from "next/link";

import { MdOutlineNavigateNext } from "react-icons/md";

const Breadcrumb = ({ pageNames }) => {
  return (
    <>
      <div className="flex items-center h-[50px] flex-wrap bg-[#f3f3f3] px-[100px] py-[0] gap-1  2xl:px-[50px] lg:px-[20px]">
        {pageNames?.map((page, index) => (
          <div key={index}>
            {index < pageNames.length - 1 ? (
              <div className="flex items-center">
                <Link
                  className="capitalize font-[600] text-[#ec5a44] text-[18px] lg:text-[16px]"
                  href={page?.link}
                >
                  {page?.name}
                </Link>
                <MdOutlineNavigateNext className="text-[20px]" />
              </div>
            ) : (
              <span className="capitalize text-[#6c757d] text-[18px] lg:text-[16px]">
                {page?.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Breadcrumb;
