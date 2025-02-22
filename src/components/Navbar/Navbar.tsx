import { NavLink } from "react-router-dom";
import { MobileNavToggle, UserSignUpLogo, WebsiteLogo } from "../Icons";
import { useState } from "react";

const Navbar = () => {
  const [isShowMobileNav, setIsShowMobileNav] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between w-full h-[54px] sm:h-[80px] lg:h-[100px] bg-bg shadow-xs shadow-white text-white sticky top-0 z-[1000] main-container">
      {/* left section */}
      <div className="flex items-center gap-[5px] font-mono">
        <WebsiteLogo />
        <span className="text-h6 font-semibold">NFT Marketplace</span>
      </div>
      {/* right section */}
      <div className="hidden md:flex items-center lg:gap-[10px]">
        <ul className="flex items-center lg:gap-[10px] text-base font-semibold">
          {[
            { name: "Marketplace", path: "/" },
            { name: "Rankings", path: "/rankings" },
            { name: "Connect a wallet", path: "/connect-wallet" },
          ].map((item) => (
            <li
              key={item.path}
              className="px-[10px] lg:px-[20px] cursor-pointer"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block transition-colors ${
                    isActive ? "text-cta" : "text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink
          to={"/sign-up"}
          className="flex items-center gap-[5px] bg-cta rounded-[20px] h-[45px] lg:h-[60px]  px-[30px]"
        >
          <UserSignUpLogo />
          <span className="font-semibold text-base">Sign Up</span>
        </NavLink>
      </div>
      <div className="md:hidden !mt-[6px]">
        <button onClick={() => setIsShowMobileNav(true)}>
          <MobileNavToggle />
        </button>
      </div>
      {isShowMobileNav && (
        <div className="w-full h-[100vh] fixed top-0 left-0 bg-bg md:hidden">
          <div className="w-full h-[54px] sm:h-[80px] main-container flex items-center justify-between shadow-xs shadow-white">
            <div className="flex items-center gap-[5px] font-mono">
              <WebsiteLogo />
              <span className="text-h6 font-semibold">NFT Marketplace</span>
            </div>
            <button onClick={() => setIsShowMobileNav(false)}>
              <MobileNavToggle />
            </button>
          </div>
          <ul className="flex flex-col items-start text-base font-semibold  gap-[20px] !mt-[20px] main-container">
            {[
              { name: "Marketplace", path: "/" },
              { name: "Rankings", path: "/rankings" },
              { name: "Connect a wallet", path: "/connect-wallet" },
            ].map((item) => (
              <li key={item.path} className=" cursor-pointer">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block transition-colors ${
                      isActive ? "text-cta" : "text-white"
                    }`
                  }
                  onClick={() => setIsShowMobileNav(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="main-container !mt-[20px]">
            <NavLink
              onClick={() => setIsShowMobileNav(false)}
              to={"/sign-up"}
              className="flex items-center gap-[5px] bg-cta rounded-[20px] h-[45px] px-[20px]"
            >
              <UserSignUpLogo />
              <span className="font-semibold text-base">Sign Up</span>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
