"use client";
import useCopyLinkTitle from "../CopyLinkTitle/CopyLinkTitle";
import { CopyNotification } from "../CopyNotification/CopyNotification";
import Share from "../Share/Share";
import MediaItemComponnet from "./MediaItemComponnet";

const MediaClientComponent_two = ({ data, params }) => {
  const shareHref = `${process.env.NEXT_PUBLIC_LINK}m/${params?.id}/${params?.slug}`;
  const { CopyLinkTitle, link, showNotification, copiedLink } =
    useCopyLinkTitle();
  const grid = "col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12";
  return (
    <>
      <Share
        href={shareHref}
        title={data?.media?.title_en}
        copyLink={CopyLinkTitle}
        ref={link}
      />
      {showNotification && <CopyNotification link={copiedLink} />}
      <div className="mt-10">
        <h3 className="font-bold text-4xl 2xl:text-2xl lg:text-xl  mb-3  px-[50px] lg:px-[20px] capitalize">
          More News
        </h3>
        <div className="mt-6 grid grid-cols-12 gap-6  lg:px-[20px]">
          {data?.random_media &&
            data?.random_media?.map((item, i) => {
              return <MediaItemComponnet key={i} item={item} classes={grid} />;
            })}
        </div>
      </div>
    </>
  );
};

export default MediaClientComponent_two;
