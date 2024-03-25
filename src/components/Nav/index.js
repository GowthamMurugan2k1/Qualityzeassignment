"use client";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
const Nav = () => {
  const NavList = [
    {
      id: 0,
      name: "home",
      url:'/'
    },
    {
      id: 1,
      name: "about",
      url:'/about'
    },
    {
      id: 2,
      name: "features",
      url:'/features'
    },
    {
      id: 3,
      name: "categories",
      url:'/categories'
    },
    {
      id: 4,
      name: "contact",
      url:'/contact'
    },
  ];

  //   Getting current PATH
  const path = usePathname();

  const router = useRouter()

  return (
    <div className="p-4 text-[color:var(--primary-background-color)]">
      {/* Logo  */}
      <div className="justify-start text-lg font-extrabold cursor-pointer" onClick={()=>router.push('/')}>Logo</div>
      {/* Nav list */}
      <div className="flex justify-center text-center gap-8 pb-1 max-sm:flex max-sm:justify-between max-sm:text-center">
        <div className="flex justify-center text-center gap-8 pb-1 max-sm:hidden">
          {NavList.map((item) => {
            return (
              <button className={`capitalize font-semibold  border-b border-transparent  hover:border-[color:var(--primary-background-color)] `}
              style={{borderBottom:path === item.url ? '2px solid var(--primary-background-color)': ""}}
              onClick={()=>router.push(item.url)}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Show Hamburger in Mobile */}
        <button className="hidden max-sm:block">
          <GiHamburgerMenu />
        </button>
        {/* Search bar */}
        <span className="flex bg-[color:var(--base-color)] p-1 rounded-2xl ">
          <IoSearchSharp />
          <input
            type="search"
            className="max-w-48 px-2 bg-[color:var(--base-color)] border-none outline-none placeholder-[color:var(--primary-background-color)]"
            placeholder="search"
          />
        </span>
      </div>
    </div>
  );
};

export default Nav;
