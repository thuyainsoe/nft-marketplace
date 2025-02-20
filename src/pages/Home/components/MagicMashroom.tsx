import { SellALlLogo } from "../../../components/Icons";

const MagicMashroom = () => {
  return (
    <div className="relative w-full aspect-[1280/640] flex flex-col justify-end py-[60px]">
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-[url('/images/tranding/tranding-img4.png')] bg-cover bg-center z-[200]"></div> */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#A259FF] to-transparent z-[300]"></div>

      {/* Content */}
      <div className="main-container relative  w-full z-[800] flex items-end justify-between">
        {/* left section */}
        <div className="flex flex-col items-start gap-[30px]">
          <div className="h-[44px] flex items-center gap-[12px] px-[20px] bg-bgsecondary rounded-[20px]">
            <img
              className="h-[24px] w-[24px] rounded-full"
              src="/images/tranding/tranding-img2.png"
              alt=""
            />
            <span className="text-white">Shroomie</span>
          </div>
          <h2 className="text-h2 font-bold">Magic Mashrooms</h2>
          <button className="flex items-center gap-[5px] bg-white text-black rounded-[20px] h-[60px]  px-[30px]">
            <SellALlLogo />
            <span className="font-semibold text-base">See NFT</span>
          </button>
        </div>
        {/* right section */}
        <div className="p-[30px] bg-[#3b3b3b7c] rounded-[20px] gap-[10px] flex flex-col items-start">
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
        </div>
      </div>
    </div>
  );
};

export default MagicMashroom;
