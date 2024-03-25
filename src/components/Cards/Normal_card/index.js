import Image from "next/image";
import { NormalCardData } from "../../../../utils/Rawdata";
import { FaRegComment } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Normal_card = () => {
  return (
    <>
      <div className="flex w-full flex-col ">
        {NormalCardData.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex p-2 gap-3 border-b border-solid border-[color:var(--secondary-color)] even:flex-row-reverse py-6`}
            >
              <div className="w-full relative aspect-[4/3]">
                <Image
                  src={item.imgsrc}
                  alt={item.name}
                  fill
                  objectFit="cover"
                  className="rounded-sm "
                />
              </div>
              <div className="w-full flex flex-col justify-evenly">
                <h1 className="text-[color:var(--primary-background-color)] font-semibold capitalize">
                  {item.name}
                </h1>
                <p className="line-clamp-5 text-[color:var(--Text-Sub-color)] text-sm">
                  {item.desc}
                </p>
                <button className="p-1.5 bg-[color:var(--secondary-color)] w-fit rounded-full capitalize text-white text-sm my-4">
                  read more
                </button>
                <div className="flex justify-between items-center text-[color:var(--secondary-color)]">
                  <button className="flex gap-1">
                    <FaRegComment /> 1
                  </button>
                  <div className="flex items-center justify-evenly w-3/6 ">
                    <button>share</button>
                    <button><FaFacebookF/></button>
                    <button><FaTwitter/> </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Normal_card;
