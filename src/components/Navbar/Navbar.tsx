import { MobileNavToggle, UserSignUpLogo, WebsiteLogo } from "../Icons";

const Navbar = () => {
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
          <li className="px-[10px] lg:px-[20px] cursor-pointer">Marketplace</li>
          <li className="px-[10px] lg:px-[20px] cursor-pointer">Rankings</li>
          <li className="px-[10px] lg:px-[20px] cursor-pointer">
            Connect a wallet
          </li>
        </ul>
        <button className="flex items-center gap-[5px] bg-cta rounded-[20px] h-[45px] lg:h-[60px]  px-[30px]">
          <UserSignUpLogo />
          <span className="font-semibold text-base">Sign Up</span>
        </button>
      </div>
      <div className="md:hidden">
        <MobileNavToggle />
      </div>
    </div>
  );
};

export default Navbar;
