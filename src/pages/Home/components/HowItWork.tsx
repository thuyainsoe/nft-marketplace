const items = [
  {
    id: 1,
    coverImage: "/images/howitwork/image1.png",
    title: "Setup Your wallet",
    description:
      "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    id: 2,
    coverImage: "/images/howitwork/image2.png",
    title: "Create Collection",
    description:
      "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    id: 3,
    coverImage: "/images/howitwork/image3.png",
    title: "Start Earning",
    description:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];

const HowItWork = () => {
  return (
    <div className="py-[40px] lg:py-[80px] gap-[40px] lg:gap-[60px] flex flex-col items-start main-container">
      {/* top section */}
      <div className="flex flex-col items-start gap-[10px]">
        <h3 className="text-h3 font-semibold">How it works</h3>
        <p>Find out how to get started</p>
      </div>
      {/* bottom section */}
      <div className="grid grid-cols-3 gap-[30px]">
        {items.map((item) => (
          <div
            className="w-full pt-[10px] p-[20px] lg:p-[30px] rounded-[15px] bg-bgsecondary flex flex-col items-center gap-[20px]"
            key={item.id}
          >
            <img className="" src={item.coverImage} alt="" />
            <div className="flex flex-col items-center gap-[10px]">
              <h5 className="text-[18px] lg:text-h5 font-semibold text-center">
                {item.title}
              </h5>
              <p className="text-base text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
