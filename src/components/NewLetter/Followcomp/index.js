import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa6";

const FollowComp = () => {
  const socialIcon = [
    {
      id: 0,
      icon: <FaFacebookF />,
    },
    {
      id: 1,
      icon: <FaInstagram />,
    },
    {
      id: 2,
      icon: <FaPinterestP />,
    },
    {
      id: 3,
      icon: <FaTwitter />,
    },
  ];
  return (
    <>
      <div className="bg-[color:var(--primary-background-color)] h-fit p-6">
        <h1 className="text-white border-solid border-b-2 border-white w-fit pb-2 font-bold">
          Follow
        </h1>
        <div className="flex justify-evenly items-center p-6 max-md:p-2">
          {socialIcon.map((item) => {
            return (
              <button className="bg-white p-5 rounded-full text-lg text-[color:var(--primary-background-color)]" key={item.id}>
                {item.icon}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default FollowComp;
