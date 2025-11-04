import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";

const Share = ({ copyLink, href, title }) => {

  return (
    <div className="flex gap-[30px] items-end mt-[30px] flex-wrap">
      <p>Share:</p>
      <div className="flex items-center gap-[10px]">
        <FacebookShareButton
          url={href}
          title={title}
          quote={title}
          description={title}
        >
          <span className="uppercase border border-[#759acd] text-[#759acd] py-[8px] lg:py-[4px] rounded-[5px] px-[12px] lg:px-[6px] hover:bg-[#759acd] hover:text-white lg:text-[14px] transition-all">
            Facebook
          </span>
        </FacebookShareButton>
        <WhatsappShareButton url={href} title={title} >
          <span className="uppercase border border-[#25D366] text-[#25D366] py-[8px] lg:py-[4px] rounded-[5px] px-[12px] lg:px-[6px] hover:bg-[#759acd] hover:text-white lg:text-[14px] transition-all">
            WhatsApp
          </span>
        </WhatsappShareButton>
        <TwitterShareButton
          url={href}
          title={title}
          quote={title}
          description={title}
        >
          <span className="uppercase border border-[#1DA1F2] text-[#1DA1F2] py-[8px] lg:py-[4px] rounded-[5px] px-[12px] lg:px-[6px] hover:bg-[#759acd] hover:text-white lg:text-[14px] transition-all">
            TWITTER
          </span>
        </TwitterShareButton>
        <TelegramShareButton
          url={href}
          title={title}
          quote={title}
          description={title}
        >
          <span className="uppercase border border-[#1DA1F2] text-[#1DA1F2] py-[8px] lg:py-[4px] rounded-[5px] px-[12px] lg:px-[6px] hover:bg-[#759acd] hover:text-white lg:text-[14px] transition-all">
            Telegram
          </span>
        </TelegramShareButton>
        <div
          onClick={copyLink}
          className="uppercase cursor-pointer border border-[#0088CC] text-[#0088CC] lg:py-[4px] py-[8px]  lg:px-[6px] rounded-[5px] px-[12px] hover:bg-[#59a683] hover:text-white lg:text-[14px] transition-all"
        >
          copy LINK
        </div>
      </div>
    </div>
  );
};

export default Share;
