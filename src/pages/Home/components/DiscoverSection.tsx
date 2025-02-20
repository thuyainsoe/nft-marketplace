import { SellALlLogo } from "../../../components/Icons";
const items = [
  {
    id: 1,
    coverImage: "/images/discover/cover1.png",
    title: "Distant Galaxy",
    ownerImage: "/images/discover/cover1.png",
    ownerName: "MoonDancer",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    id: 2,
    coverImage: "/images/discover/cover2.png",
    title: "Life On Edena",
    ownerImage: "/images/discover/cover2.png",
    ownerName: "NebulaKid",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    id: 3,
    coverImage: "/images/discover/cover3.png",
    title: "AstroFiction",
    ownerImage: "/images/discover/cover3.png",
    ownerName: "Spaceone",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
];

const DiscoverSection = () => {
  return (
    <div className="py-[80px] gap-[60px] flex flex-col items-start main-container">
      {/* top section */}
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start gap-[10px]">
          <h3 className="text-h3 font-semibold">Top creators</h3>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <button className="flex items-center gap-[10px] border border-cta rounded-[20px] h-[60px]  px-[30px]">
          <SellALlLogo />
          <span className="font-semibold text-base">See All</span>
        </button>
      </div>
      {/* bottom section */}
      <div className="grid grid-cols-3 gap-[30px]">
        {items.map((item) => (
          <div className="w-full" key={item.id}>
            <div className="w-full aspect-[420_/_300]">
              <img src={item.coverImage} alt="" />
            </div>
            <div className="w-full px-[30px] py-[20px] flex flex-col items-start gap-[25px] bg-bgsecondary rounded-b-[20px]">
              {/* top section */}
              <div className="flex items-start flex-col">
                <h5 className="text-h5 font-semibold">{item?.title}</h5>
                <div className="flex items-center gap-[10px]">
                  <img
                    className="h-[24px] w-[24px] object-cover rounded-full"
                    src={item?.ownerImage}
                    alt=""
                  />
                  <span>{item.ownerName}</span>
                </div>
              </div>
              {/* bottom section */}
              <div className="flex w-full justify-between items-center font-mono">
                <div className="flex flex-col items-start gap-[5px]">
                  <span className="text-captionfont text-caption">Price</span>
                  <span className="text-white text-base">{item.price}</span>
                </div>
                <div className="flex flex-col items-end gap-[5px]">
                  <span className="text-captionfont text-caption">
                    Highest Bid
                  </span>
                  <span className="text-white text-base">
                    {item.highestBid}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverSection;
