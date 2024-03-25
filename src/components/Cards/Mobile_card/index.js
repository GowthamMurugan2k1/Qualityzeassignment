import Image from "next/image";
import { CardData } from "../../../../utils/Rawdata";
import { FaFacebookF, FaRegComment, FaTwitter } from "react-icons/fa6";

const MobileCard = () => {
  return (
    <>
      <div className="flex gap-5 p-5 max-md:flex-col">
        {CardData.map((item) => {
          return (
            <div className="p-4  border-solid border-2 border-[color:var(--secondary-color)] rounded-xl" key={item.id}>
              <div className="w-full relative aspect-[4/3] ">
                <Image
                  src={item.imgsrc}
                  alt={item.name}
                  fill
                  objectFit="cover"
                  className="rounded-sm pb-6"
                />
              </div>
              <h1 className="text-[color:var(--primary-background-color)] font-semibold capitalize text-base">
                {item.name}
              </h1>
              <p className="line-clamp-2 text-[color:var(--Text-Sub-color)] text-sm">
                {item.desc}
              </p>
              <button className="p-1.5 bg-[color:var(--secondary-color)] w-fit rounded-full capitalize text-white text-xs my-4">
                read more
              </button>
              <div className="flex justify-between items-center text-[color:var(--secondary-color)]">
                <button className="flex gap-1">
                  <FaRegComment /> 1
                </button>
                <div className="flex items-center justify-evenly w-3/6 ">
                  <button>share</button>
                  <button>
                    <FaFacebookF />
                  </button>
                  <button>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MobileCard;
