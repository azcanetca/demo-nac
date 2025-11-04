import WeAreNac from "@/app/(components)/WeAreNAc/WeAreNac";
import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async () => {
  const wearewnac = await fetchData("wearewnac");
  const wearewnac_meta = await fetchData("wearewnac-meta");
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { wearewnac, wearewnac_meta, header, nac_footer, settingsData };
};

export default async function page() {
  const { wearewnac, header, nac_footer, settingsData } = await getData();
  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <WeAreNac wearewnac={wearewnac} />
      <Footer footer={nac_footer} />
    </>
  );
}
