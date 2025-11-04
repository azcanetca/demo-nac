import SharedBanner from "../GlobalBanner/SharedBanner";

const VolunterAtNac = ({ data }) => {
  const pageNames = [
    {
      name: "Home page",
      link: "/",
    },
    {
      name: "Volunteer At Nac",
      link: "#",
    },
  ];

  return (
    <>
      <div className="pt-[68px] md:pt-[63px] bg-gray-50">
        <SharedBanner
          images={data?.volunteer_banner_src}
          pageNames={pageNames}
          title_en={data?.volunteer_banner_m_text_en}
          imgClass={`h-[380px] md:h-[280px]`}
          justify="justify-start lg:items-start "
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div
          className=" tab-content media md:text-sm py-[30px]"
          dangerouslySetInnerHTML={{
            __html: `${data?.volunteer_banner_title_en}`,
          }}
        />
      </div>
    </>
  );
};

export default VolunterAtNac;
