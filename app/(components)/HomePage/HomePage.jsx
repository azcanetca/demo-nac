import Advocacy from "./HomeComponents/Advocacy";
import Carousel from "./HomeComponents/Carousel";
import Contributor from "./HomeComponents/Contributor";
import HomeMedia from "./HomeComponents/HomeMedia";
import ScrollingText from "./HomeComponents/Marque";
import Mission from "./HomeComponents/Mission";
import Press from "./HomeComponents/Press";
const HomePage = ({
  data,
  mediaDataAll,
  advocacyData,
  press,
  contributor,
  mission_api,
  scrolling_text,
}) => {
  return (
    <>
      <Carousel data={data} />
      <Mission mission_api={mission_api} />
      <ScrollingText
        title={scrolling_text?.seo_head_title_1}
        section_bg={scrolling_text?.section_bg}
        webkit_text_color={scrolling_text?.webkit_text_color}
      />
      <HomeMedia mediaDataAll={mediaDataAll} />
      <Advocacy advocacyData={advocacyData} />
      <Press press={press} />
      <Contributor contributor={contributor} />
    </>
  );
};

export default HomePage;
