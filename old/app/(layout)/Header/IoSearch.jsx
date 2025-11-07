import { IoSearch } from "react-icons/io5";

const IoSearchLi = ({ openInput }) => {
  return (
    <>
      <div
        onClick={openInput}
        className="flex  px-[18px] py-2 h-full cursor-pointer  uppercase xl:hidden  bg-[#fff] border-[#f6f6f6] border-[2px] rounded-md tl  items-center justify-center text-lg font-semibold text-white  border-solid lg:border-0 "
      >
        <IoSearch className="text-[25px] text-[#ec5a44]" />
      </div>
    </>
  );
};

export default IoSearchLi;
