import SharedBanner from "../GlobalBanner/SharedBanner";

// Bileşenin adını daha standart bir hale getirelim: CurrentIssuesPage
const CurrentIssuesPage = ({ data }) => {
  // Breadcrumb verisini doğrudan bileşen içinde tanımlayalım
  const pageNames = [
    {
      name: "Home Page",
      link: "/",
    },
    {
      // Mevcut sayfanın adı dinamik olarak veriden gelmeli
      name: data?.name_en,
      link: "#", // Mevcut sayfa linki genellikle # olur
    },
  ];

  return (
    // Ana sarmalayıcı, pt-[80px] yerine doğrudan padding kullanalım
    <div className="bg-white">
      <SharedBanner
        images={data?.image}
        pageNames={pageNames}
        title_en={data?.title_en}
        alt={data?.name_en}
        imgClass="h-[500px] 2xl:h-[400px] md:h-[300px]"
        hiddenclass={`md:hidden`}
      />

      {/* Makale İçeriği Bölümü */}
      <main className="md:py-6 py-12">
        <div className="container mx-auto 2xl:px-[40px] md:px-[15px]">
          <h2 className="hidden md:flex  mb-4 text-4xl  md:text-lg text-black font-bold tracking-tight">
            {data?.title_en}
          </h2>
          <article
            className=" tab-content mx-auto md:text-[14px]
                       "
            dangerouslySetInnerHTML={{
              __html: `${data?.text_en}`,
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default CurrentIssuesPage;
