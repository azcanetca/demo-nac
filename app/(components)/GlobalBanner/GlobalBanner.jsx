import Image from "next/image";

const GlobalBanner = ({ longtext, bgColor, longtext2, images }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: `${bgColor}`,
        }}
        className="grid grid-cols-12 gap-4 px-[100px] py-[20px] 2xl:px-[50px] lg:px-[20px]"
      >
        <div className="col-span-12 ">
          {images &&
            (Array?.isArray(images) ? (
              images?.map((cur, i) => (
                <Image
                  key={i}
                  src={cur?.src}
                  width={1000}
                  height={300}
                  alt=""
                  className="w-full h-[350px] object-cover lg:h-[300px] md:h-[200px]"
                />
              ))
            ) : (
              <Image
                src={images}
                width={1000}
                height={300}
                alt=""
                className="w-full h-[350px] object-cover lg:h-[300px] md:h-[200px]"
              />
            ))}
        </div>
        <div className="col-span-12 ">
          <div className="flex items-center justify-center lg:justify-center h-full text-center  flex-col">
            <p
              className="font-[700] text-4xl capitalize 2xl:text-2xl lg:text-lg"
              dangerouslySetInnerHTML={{ __html: longtext && longtext }}
            ></p>
            {longtext2 !== "" && (
              <p
                className="font-[400] mt-3 text-md capitalize 2xl:text-2xl lg:text-lg"
                dangerouslySetInnerHTML={{ __html: longtext2 && longtext2 }}
              ></p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalBanner;
