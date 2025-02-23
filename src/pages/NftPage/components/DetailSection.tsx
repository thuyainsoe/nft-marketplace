import { GlobalLogo } from "../../../components/Icons";

const HeadingSection = () => {
  return (
    <div className="flex flex-col gap-[10px] items-start">
      <h2 className="text-h4 md:text-h3 lg:text-h2 font-bold">The Orbitians</h2>
      <span className="text-caption text-base">Minted on Sep 30, 2022</span>
    </div>
  );
};

const DetailSection = () => {
  const tags = ["Animation", "illustration", "moon", "moon"];
  return (
    <div className="main-container w-full">
      <div className="w-full block md:hidden !mt-[30px]">
        <HeadingSection />
      </div>
      <div
        className="px-0 md:px-[25px] lg:px-[50px] w-full py-[30px] lg:py-[40px] flex 
      flex-col-reverse md:flex-row items-start gap-[30px] lg:gap-[150px]"
      >
        <div className="flex flex-col items-start gap-[30px] w-full">
          {/* heading section */}
          <div className="w-full hidden md:block">
            <HeadingSection />
          </div>
          {/* created by */}
          <div className="flex flex-col items-start gap-[10px]">
            <span className="font-mono font-bold text-caption">Created By</span>
            <div className="flex items-center gap-[10px]">
              <img
                className="h-[24px] w-[24px]"
                src="/images/hero/hero-img2.png"
                alt=""
              />
              <span>Animakid</span>
            </div>
          </div>
          {/* description */}
          <div className="flex flex-col items-start gap-[10px]">
            <span className="font-mono font-bold text-caption">
              Description
            </span>
            <div>
              The Orbitians is a collection of 10,000 unique NFTs on the
              Ethereum blockchain. <br />
              <br />
              There are all sorts of beings in the NFT Universe. The most
              advanced and friendly of the bunch are Orbitians.
              <br />
              <br /> They live in a metal space machines, high up in the sky and
              only have one foot on Earth. These Orbitians are a peaceful race,
              but they have been at war with a group of invaders for many
              generations. The invaders are called Upside-Downs, because of
              their inverted bodies that live on the ground, yet do not know any
              other way to be. Upside-Downs believe that they will be able to
              win this war if they could only get an eye into Orbitian
              territory, so they've taken to make human beings their target.
            </div>
          </div>
          {/* details */}
          <div className="flex flex-col items-start gap-[10px]">
            <span className="font-mono font-bold text-caption">Details</span>
            <div className="flex gap-[10px] items-center">
              <GlobalLogo />
              <span>View on Etherscan</span>
            </div>
            <div className="flex gap-[10px] items-center">
              <GlobalLogo />
              <span>View Original</span>
            </div>
          </div>
          {/* tags */}
          <div className="flex flex-col items-start gap-[10px]">
            <span className="font-mono font-bold text-caption">Tags</span>
            <div className="flex items-center gap-[10px]  flex-wrap">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-[20px] rounded-[20px] w-fit h-[46px] uppercase bg-bgsecondary flex items-center font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-[295px] p-[30px] bg-[#3b3b3b7c] rounded-[20px] gap-[10px] flex flex-col items-start">
          <span className="text-captionfont">Auction ends in:</span>
          <div className="flex items-start gap-[10px]">
            <div className="flex flex-col items-start">
              <span className="font-mono text-h3 font-semibold">59</span>
              <span className="text-captionfont font-mono">Hours</span>
            </div>
            <span className="text-h4 font-mono font-semibold translate-y-[5px]">
              :
            </span>
            <div className="flex flex-col items-start">
              <span className="font-mono text-h3 font-semibold">59</span>
              <span className="text-captionfont font-mono">Minutes</span>
            </div>
            <span className="text-h4 font-mono font-semibold translate-y-[5px]">
              :
            </span>
            <div className="flex flex-col items-start">
              <span className="font-mono text-h3 font-semibold">59</span>
              <span className="text-captionfont font-mono">Seconds</span>
            </div>
          </div>
          <button className="flex items-center justify-center w-full h-[60px] bg-cta text-white !mt-[10px] !font-bold rounded-[20px]">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
