import Breadcrumb from "../Breadcrumb/Breadcrumb";
import NOA from "./NOA";
import WeAreAbout from "./WeAreAbout";
import WeAreSomeMoments from "./WeAreSomeMoments";
import WeAreWhatCanYou from "./WeAreWhatCanYou";

const WeAreNac = ({ wearewnac }) => {
  const breadcrumbData = [
    { name: `${wearewnac?.home_page}`, link: "/" },
    { name: `${wearewnac?.we_are_nac}`, link: "/we-are-nac" },
  ];

  return (
    <>
      <div className="pt-[105px] lg:pt-[80px]">
        <Breadcrumb
          pageNames={breadcrumbData}
          customClass="2xl:px-[30px] md:px-[10px]"
          pageTitle={wearewnac?.we_are_nac}
        />
        <NOA
          dataSection1={wearewnac?.section_1}
          // dataCounter={wearewnac?.counter}
        />
        <WeAreAbout
          our_story={wearewnac?.our_story}
          title={wearewnac?.section_2?.section_two_title_1_en}
          text={wearewnac?.section_2?.section_two_text_en}
          url={wearewnac?.section_2?.section_two_src}
          bg={wearewnac?.section_2?.section_two_bg}
        />
        <WeAreAbout
          our_story={wearewnac?.our_vision}
          title={wearewnac?.section_3_4?.section_three_title_1_en}
          title2={wearewnac?.section_3_4?.section_four_title_1_en}
          text={wearewnac?.section_3_4?.section_three_text_en}
          text2={wearewnac?.section_3_4?.section_four_text_en}
          url={wearewnac?.section_3_4?.section_three_src}
          bg={wearewnac?.section_3_4?.section_three_bg}
          order="order-first md:order-last"
        />
        <WeAreSomeMoments
          data={wearewnac?.moments}
          text1={wearewnac?.some_moments_of_nac}
        />
        <WeAreWhatCanYou
          data={wearewnac?.all}
          learn_more={wearewnac?.learn_more2}
        />
      </div>
    </>
  );
};

export default WeAreNac;
