import TakeAction from "@/app/(components)/TakeAction/TakeAction";
import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async () => {
  const nac_take = await fetchData(`nac_take`);
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { nac_take, header, nac_footer, settingsData };
};

export default async function page() {
  const { nac_take, header, nac_footer, settingsData } = await getData();
  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <TakeAction data={nac_take} />
      <Footer footer={nac_footer} />
    </>
  );
}
