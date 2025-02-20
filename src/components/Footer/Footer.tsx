import {
  DiscordLogo,
  EmailLogo,
  InstagramLogo,
  TwitterLogo,
  WebsiteLogo,
  YoutubeLogo,
} from "../Icons";

const Footer = () => {
  return (
    <div className="w-full main-container bg-bgsecondary py-[40px] flex flex-col items-start gap-[30px]">
      <div className="items-center grid lg:grid-cols-3 justify-start h-auto gap-[30px] lg:gap-[15px] xl:gap-[30px]">
        {/* first */}
        <div className="flex flex-col items-start h-full">
          <div className="flex items-center gap-[10px]">
            <WebsiteLogo />
            <h5 className="text-h5 font-mono font-semibold !text-nowrap">
              NFT Marketplace
            </h5>
          </div>
          <div className="text-base text-caption !mt-[20px]">
            NFT marketplace UI created with Anima for Figma.
          </div>
          <div className="text-base text-caption !mt-[10px]">
            Join our community
          </div>
          <div className="flex items-center gap-[10px] !mt-[10px]">
            <DiscordLogo />
            <YoutubeLogo />
            <TwitterLogo />
            <InstagramLogo />
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col items-start h-full lg:!mx-auto">
          <h5 className="text-h5 font-mono font-semibold h-[33px] block">
            Explore
          </h5>
          <ul className="flex flex-col items-start gap-[10px] text-caption !mt-[20px]">
            <li>Marketplace</li>
            <li>Rankings</li>
            <li>Connect a wallet</li>
          </ul>
        </div>
        {/* third */}
        <div className="flex flex-col items-start h-full">
          <h5 className="text-h5 font-mono font-semibold h-[33px] block !text-nowrap">
            Join our weekly digest
          </h5>
          <p className="!mt-[20px] text-caption">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="block w-full relative !mt-[20px]">
            <input
              type="text"
              className="w-full bg-white outline-none rounded-[20px] px-[20px] text-black h-[45px] lg:h-[60px]"
              placeholder="Enter your email here"
            />
            <button
              className="rounded-[20px] lg:!mt-[10px] xl:!mt-0 absolute lg:relative xl:absolute h-[45px] lg:h-[60px] top-0 right-0 bg-cta 
            w-fit lg:w-full xl:w-fit flex px-[20px] items-center justify-center gap-[5px]"
            >
              <EmailLogo />
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-caption pt-[20px]">
        <span className="text-caption text-[12px]">
          Ⓒ NFT Market. Use this template freely.
        </span>
      </div>
    </div>
  );
};

export default Footer;
