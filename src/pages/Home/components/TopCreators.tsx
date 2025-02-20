import { GetStartedLogo } from "../../../components/Icons";

const items = [
  {
    id: 1,
    avator: "/images/topcreators/creator-1.png",
    name: "Keepitreal",
    amount: "34.53 ETH",
  },
  {
    id: 2,
    avator: "/images/topcreators/creator-2.png",
    name: "DigiLab",
    amount: "34.53 ETH",
  },
  {
    id: 3,
    avator: "/images/topcreators/creator-3.png",
    name: "GravityOne",
    amount: "34.53 ETH",
  },
  {
    id: 4,
    avator: "/images/topcreators/creator-4.png",
    name: "Juanie",
    amount: "34.53 ETH",
  },
  {
    id: 5,
    avator: "/images/topcreators/creator-5.png",
    name: "BlueWhale",
    amount: "34.53 ETH",
  },
  {
    id: 6,
    avator: "/images/topcreators/creator-6f.png",
    name: "Mr Fox",
    amount: "34.53 ETH",
  },
  {
    id: 7,
    avator: "/images/topcreators/creator-7.png",
    name: "Shroomie",
    amount: "34.53 ETH",
  },
  {
    id: 8,
    avator: "/images/topcreators/creator-8ff.png",
    name: "Robotica",
    amount: "34.53 ETH",
  },
  {
    id: 9,
    avator: "/images/topcreators/creator-9.png",
    name: "RustyRobot",
    amount: "34.53 ETH",
  },
  {
    id: 10,
    avator: "/images/topcreators/creator-10.png",
    name: "Animakid",
    amount: "34.53 ETH",
  },
  {
    id: 11,
    avator: "/images/topcreators/creator-11.png",
    name: "Dotgu",
    amount: "34.53 ETH",
  },
  {
    id: 12,
    avator: "/images/topcreators/creator-12.png",
    name: "Ghiblier",
    amount: "34.53 ETH",
  },
];

const TopCreators = () => {
  return (
    <div className="py-[40px] lg:py-[80px] flex flex-col items-start gap-[40px] lg:gap-[60px] w-full main-container">
      {/* top section */}
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start gap-[10px]">
          <h3 className="text-h3 font-semibold">Top creators</h3>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <button className="flex items-center gap-[10px] border border-cta rounded-[20px] h-[60px]  px-[30px]">
          <GetStartedLogo />
          <span className="font-semibold text-base">View Rankings</span>
        </button>
      </div>
      {/* bottom section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px] w-full">
        {items.map((item, index) => (
          <div className="w-full relative lg:aspect-square flex lg:flex-col gap-[20px] p-[20px] bg-bgsecondary rounded-[20px] items-center justify-center">
            <img
              className="w-[60px] lg:w-1/2 rounded-full object-cover"
              src={item.avator}
              alt=""
            />
            <div className="flex flex-col items-start lg:items-center gap-[5px] w-full">
              <h5 className="text-h5 font-semibold">{item.name}</h5>
              <div className="flex items-center gap-[15px]">
                <span className="text-caption">Total Sales :</span>
                <span className="font-mono">{item.amount}</span>
              </div>
            </div>
            <div className="font-mono text-caption absolute top-[10px] lg:top-[20px] left-[10px] lg:left-[20px] flex items-center justify-center w-[30px] h-[30px] rounded-full bg-bg">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
