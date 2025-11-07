import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default async function Layout({ children }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/header`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <>
      <Header data={data} />
      {children}
      <Footer />
    </>
  );
}
