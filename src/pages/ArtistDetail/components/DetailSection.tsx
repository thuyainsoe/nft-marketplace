import {
  CopyLogo,
  DiscordLogo,
  FollowLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "../../../components/Icons";

const DetailSection = () => {
  return (
    <div className="main-container pt-[80px] pb-[40px] relative">
      <img
        className="w-[120px] aspect-square absolute bottom-[calc(100%-60px)] z-[800] md:translate-x-[25px] lg:translate-x-[50px]"
        src="/images/artistdetail/artistImage.png"
        alt=""
      />
      <div className="px-0 md:px-[25px] lg:px-[50px] flex flex-col items-start w-full gap-[30px]">
        {/* top section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-[20px]">
          <h2 className="text-h3 lg:text-h2 font-bold">Animakid</h2>
          <div className="flex flex-col md:flex-row items-center gap-[20px] w-full">
            <div className="w-full md:w-fit flex items-center justify-center gap-[5px] bg-cta rounded-[20px] h-[45px] lg:h-[60px]  px-[30px]">
              <CopyLogo />
              <span className="font-semibold text-base">0xc0E3...B79C</span>
            </div>
            <div className="w-full md:w-fit flex items-center justify-center gap-[5px] bg-transparent border border-cta rounded-[20px] h-[45px] lg:h-[60px]  px-[30px]">
              <FollowLogo />
              <span className="font-semibold text-base">Follow</span>
            </div>
          </div>
        </div>
        {/* stats section */}
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-[30px]">
          <div className="flex items-start flex-col">
            <span className="font-mono text-h5 lg:text-h4 font-bold">
              240k+
            </span>
            <span>Volume</span>
          </div>
          <div className="flex items-start flex-col">
            <span className="font-mono text-h5 lg:text-h4 font-bold">50+</span>
            <span>NFTs Sold</span>
          </div>
          <div className="flex items-start flex-col">
            <span className="font-mono text-h5 lg:text-h4 font-bold">
              3000+
            </span>
            <span>Followers</span>
          </div>
        </div>
        {/* bio */}
        <div className="w-1/2 flex flex-col gap-[10px] items-start">
          <label className="text-caption text-h5 font-mono font-bold leading-[100%]">
            Bio
          </label>
          <div className="text-base">
            The internet's friendliest designer kid.
          </div>
        </div>
        {/* links */}
        <div className="w-1/2 flex flex-col gap-[10px] items-start">
          <label className="text-caption text-h5 font-mono font-bold leading-[100%]">
            Links
          </label>
          <div className="flex items-center gap-[10px]">
            <DiscordLogo />
            <YoutubeLogo />
            <TwitterLogo />
            <InstagramLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
