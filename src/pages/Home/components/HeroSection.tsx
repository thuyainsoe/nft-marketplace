import { GetStartedLogo } from "../../../components/Icons";

const RightSection = () => {
  return (
    <div className="h-full w-full md:w-[90%]">
      <img src="/images/hero/hero-img.png" alt="" />
      <div className="w-full bg-bgsecondary p-[20px] flex flex-col items-start gap-[15px] rounded-b-2xl">
        <h5 className="text-h5 font-bold">Space Walking</h5>
        <div className="flex items-center gap-[10px]">
          <img
            className="h-[24px] w-[24px]"
            src="/images/hero/hero-img2.png"
            alt=""
          />
          <span>Animakid</span>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="w-full py-[40px] lg:py-[80px] flex flex-col md:flex-row items-center justify-between !gap-[40px] md:!gap-[30px] main-container">
      {/* left section */}
      <div className="flex flex-col items-start gap-[20px] lg:gap-[30px] w-full md:w-1/2">
        <h1 className="text-h3 lg:text-h1 font-bold leading-[120%] lg:leading-[100%]">
          Discover digital art & Collect NFTs
        </h1>
        <div className="text-base">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </div>
        <div className="!my-[10px] md:hidden">
          <RightSection />
        </div>
        <button className="flex items-center gap-[5px] bg-cta rounded-[20px] h-[60px] md:w-fit w-full justify-center px-[30px]">
          <GetStartedLogo />
          <span className="font-semibold text-base">Get Started</span>
        </button>
        <div className="w-full grid grid-cols-3 gap-[30px]">
          <div className="flex items-start flex-col">
            <span className="font-mono text-h4 font-bold">240k+</span>
            <span>Total Sale</span>
          </div>
          <div className="flex items-start flex-col">
            <span className="font-mono text-h4 font-bold">100k+</span>
            <span>Auctions</span>
          </div>
          <div className="flex items-start flex-col">
            <span className="font-mono text-h4 font-bold">240k+</span>
            <span>Artists</span>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="hidden md:flex  h-auto w-full md:w-1/2 justify-end">
        <RightSection />
      </div>
    </div>
  );
};

export default HeroSection;
