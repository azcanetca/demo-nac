import HomePage from "./(components)/HomePage/HomePage";
import Footer from "./(layout)/Footer/Footer";
import Header from "./(layout)/Header/Header";
import { fetchData } from "./fetch/fetchData";

const getData = async () => {
  const banner = await fetchData("nac_banner");
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const mission_api = await fetchData("nac_mission");
  const media = await fetchData("nac_media");
  const advocacy = await fetchData("nac_advocacy");
  const press = await fetchData("nac_press");
  const settingsData = await fetchData("settings");
  const contributor = await fetchData("nac_contributor");
  const scrolling_text = await fetchData("nac_scrolling_text");
  return {
    banner,
    media,
    advocacy,
    press,
    settingsData,
    contributor,
    mission_api,
    scrolling_text,
    header,
    nac_footer,
  };
};

export default async function Home() {
  const {
    banner,
    media,
    advocacy,
    press,
    contributor,
    mission_api,
    scrolling_text,
    header,
    nac_footer,
    settingsData,
  } = await getData();

  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <HomePage
        scrolling_text={scrolling_text}
        data={banner}
        mission_api={mission_api}
        mediaDataAll={media}
        advocacyData={advocacy}
        press={press}
        contributor={contributor}
      />
      <Footer footer={nac_footer} />
    </>
  );
}
