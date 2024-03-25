import FollowComp from "./Followcomp";
import RecentItem from "./RecentItem";

const NewsLetter = () => {
  return (
    <>
      <div className="bg-[color:var(--background-sandcolor)] w-full h-full relative">
        <h2 className="text-[color:var(--secondary-color)] ml-6 pt-6 font-bold text-2xl border-solid border-b-2 border-[color:var(--secondary-color)] h-fit w-fit">
          News Letter
        </h2>
        <div className="flex flex-col items-center  justify-evenly h-24">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-[color:var(--secondary-base-color)] rounded-full p-3 placeholder:text-center placeholder:text-[color:var(--secondary-color)] mt-6 mb-6 w-2/4 outline-none"
          />
          <button className="bg-[color:var(--primary-background-color)] w-2/4 rounded-full text-white p-3">
            Sign up
          </button>
        </div>
        <RecentItem />
        <div className="relative bottom-0">
          <FollowComp />
        </div>
      </div>
    </>
  );
};
export default NewsLetter;
