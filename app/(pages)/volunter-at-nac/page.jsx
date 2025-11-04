import VolunterAtNac from "@/app/(components)/VolunterAtNac/VolunterAtNac";
import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async () => {
  const volunter_nac = await fetchData("volunter_nac");
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { volunter_nac, header, nac_footer, settingsData };
};

export default async function page() {
  const { volunter_nac, header, nac_footer, settingsData } = await getData();
  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <VolunterAtNac data={volunter_nac} />
      <Footer footer={nac_footer} />
    </>
  );
}
