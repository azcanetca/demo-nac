import Image from "next/image";
import Link from "next/link";

const TakeComponnet = ({ data, fade }) => {
  return (
    <>
      <div className={`grid grid-cols-12 gap-12 lg:gap-4 mt-5 ${fade}`}>
        <div className=" col-span-6 lg:col-span-12">
          <div className="flex items-start justify-center flex-col h-full">
            <h2 className="font-bold text-3xl lg:text-xl relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-[#ec5a44]">
              {data?.title_en}
            </h2>
            <p
              className="pt-4"
              dangerouslySetInnerHTML={{ __html: data && data?.intro_text_en }}
            ></p>
            <Link
              className="mt-2 font-semibold text-xl"
              href={`/take-action/${data?.id}/${data?.slug_en}`}
            >
              See more
            </Link>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-12 lg:order-[-1]">
          {data?.src &&
            data?.src?.map((cur, i) => (
              <Image
                key={i}
                src={cur?.src}
                alt="picture"
                width={1000}
                height={400}
                className="w-full h-[450px] object-cover lg:h-[300px]"
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default TakeComponnet;
