import Image from "next/image";
import { RecentItemData } from "../../../../utils/Rawdata";

const RecentItem = () => {
  return (
    <>
      <div className="relative mt-20">
        <h2 className="text-[color:var(--secondary-color)] ml-6  font-bold text-2xl border-solid border-b-2 border-[color:var(--secondary-color)] h-fit w-fit">
          Your Title
        </h2>
        <div className="grid grid-cols-2" >
          {RecentItemData.map((item) => {
            return (
              <div key={item.id} className="flex justify-center flex-col items-center p-6 gap-3">
                <Image
                  src={item.url}
                  width={100}
                  height={100}
                  className="rounded-full w-[120px] h-[120px]  max-md:w-[80px] max-md:h-[80px] max-sm:border-4 object-cover"
                />
                <p className="text-[color:var(--secondary-color)] capitalize">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default RecentItem;
