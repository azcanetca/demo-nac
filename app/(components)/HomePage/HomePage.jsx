import Advocacy from "./HomeComponents/Advocacy";
import Carousel from "./HomeComponents/Carousel";
import Contributor from "./HomeComponents/Contributor";
import HomeMedia from "./HomeComponents/HomeMedia";
import Mission from "./HomeComponents/Mission";
import Press from "./HomeComponents/Press";
const HomePage = ({ data }) => {
  return (
    <>
      {/* <Carousel data={data} /> */}
      <Mission />
      <Advocacy />
      <Press />
      <HomeMedia />
      <Contributor />
    </>
  );
};

export default HomePage;
