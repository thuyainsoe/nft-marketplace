import { UserSignUpLogo, WebsiteLogo } from "../Icons";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-[100px] bg-bg text-white sticky top-0 z-[1000] main-container">
      {/* left section */}
      <div className="flex items-center gap-[5px] font-mono">
        <WebsiteLogo />
        <span className="text-h6 font-semibold">NFT Marketplace</span>
      </div>
      {/* right section */}
      <div className="flex items-center gap-[10px]">
        <ul className="flex items-center gap-[10px] text-base font-semibold">
          <li className="px-[20px]">Marketplace</li>
          <li className="px-[20px]">Rankings</li>
          <li className="px-[20px]">Connect a wallet</li>
        </ul>
        <button className="flex items-center gap-[5px] bg-cta rounded-[20px] h-[60px]  px-[30px]">
          <UserSignUpLogo />
          <span className="font-semibold text-base">Sign Up</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
