import { FaCheck } from "react-icons/fa";

export const CopyNotification = ({ link }) => {
  return (
    <div className="copy-notification flex items-center gap-2">
      <FaCheck />
      <div className="flex flex-col">
        <p className="text-[13px] text-white">Link copied: </p>
        <p className="text-[13px]">{link}</p>
      </div>
    </div>
  );
};
