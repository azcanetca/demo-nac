
import { IoSearch } from "react-icons/io5";

const IoSearchLi = ({ openInput }) => {
  return (
    <>
      <li
        onClick={openInput}
        className="flex h-full  px-[18px] cursor-pointer  uppercase xl:hidden  bg-[#ec5a44] lg:bg-transparent rounded-md tl  items-center justify-center text-lg font-semibold text-white border-[1px] border-solid lg:border-0 "
      >
        <IoSearch className="text-[25px] xl:text-[#ec5a44]" />
      </li>
    </>
  );
};

export default IoSearchLi;
