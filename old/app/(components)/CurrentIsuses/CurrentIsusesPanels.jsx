import { TabPanel } from "@chakra-ui/react";
import Share from "../Share/Share";
const CurrentIsusesPanels = ({ data, CopyLinkTitle }) => {
  return (
    <>
      <TabPanel key={data?.id}>
        <div
          className="tab-content lg:text-[13px]"
          dangerouslySetInnerHTML={{
            __html: data && data?.text_en,
          }}
        ></div>
        <Share
          copyLink={CopyLinkTitle}
          href={`${process.env.NEXT_PUBLIC_LINK}/current-issues/${data?.slug_en}`}
          title={data?.name_en}
        />
      </TabPanel>
    </>
  );
};

export default CurrentIsusesPanels;
