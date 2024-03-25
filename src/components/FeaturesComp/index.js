import NormalCard from "@/components/Cards/Normal_card";
import MobileCard from "../Cards/Mobile_card";
import NewsLetter from "@/components/NewLetter";
const Feature = () => {
  return (
    <>
      <section className="w-full flex p-6 max-md:block">
        <div className="w-3/5 p-2 max-md:w-full">
          <h1 className="text-[color:var(--primary-background-color)] border-b-2 border-[color:var(--secondary-color)] w-fit font-semibold">
            Features
          </h1>
          <NormalCard />
          <MobileCard />
        </div>
        <div className="w-2/5 max-md:w-full">
          <NewsLetter />
        </div>
      </section>
    </>
  );
};

export default Feature;
