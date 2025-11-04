import PressCentreItem from "@/app/(components)/PressCentre/PressCentreItem";
import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async (params) => {
  const current = await fetchData(
    `nac_press_center/${params?.id}/${params?.slug}`
  );
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { current, header, nac_footer, settingsData };
};

export default async function page({ params }) {
  const { current, header, nac_footer, settingsData } = await getData(params);
  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <PressCentreItem data={current} />
      <Footer footer={nac_footer} />
    </>
  );
}
