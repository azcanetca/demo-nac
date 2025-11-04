import SupportUs from "@/app/(components)/SupportUs/SupportUs";
import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async () => {
  const support = await fetchData("support-us");
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { support, header, nac_footer, settingsData };
};

export default async function page() {
  const { support, header, nac_footer, settingsData } = await getData();
  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <SupportUs data={support} />
      <Footer footer={nac_footer} />
    </>
  );
}
