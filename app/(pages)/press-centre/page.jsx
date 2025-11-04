import PressCentre from "@/app/(components)/PressCentre/PressCentre";
import Footer from "@/app/(layout)/Footer/Footer";
import Header from "@/app/(layout)/Header/Header";
import { fetchData } from "@/app/fetch/fetchData";

const getData = async (page, category) => {
  const params = new URLSearchParams();
  params.append("page", page);

  if (category) {
    params.append("category", category);
  }
  const nac_press_center = await fetchData(
    `nac_press_center?${params.toString()}`
  );
  const header = await fetchData("header");
  const nac_footer = await fetchData("nac_footer");
  const settingsData = await fetchData("settings");
  return { nac_press_center, header, nac_footer, settingsData };
};

export default async function Page({ searchParams }) {
  const currentPage = searchParams?.page || "1";
  const currentCategory = searchParams?.category || "";

  const { nac_press_center, header, nac_footer, settingsData } = await getData(
    currentPage,
    currentCategory
  );

  return (
    <>
      <Header data={header} footer={nac_footer} settings={settingsData} />
      <PressCentre data={nac_press_center} />
      <Footer footer={nac_footer} />
    </>
  );
}
