const items = [
  {
    id: 1,
    label: "Metamask",
    image: "/images/walletconnect/metamask.png",
  },
  {
    id: 2,
    label: "Wallet Connect",
    image: "/images/walletconnect/copywallet.png",
  },
  {
    id: 3,
    label: "Coinbase",
    image: "/images/walletconnect/coinbase.png",
  },
];

const WalletConnect = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch gap-[20px] md:gap-[40px] lg:gap-[60px] h-auto ">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <img
          className="w-full aspect-[372_/_232] md:aspect-[397_/_530] lg:aspect-[610_/_642] object-cover"
          src="/images/walletconnect/coverImg.png"
          alt=""
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2  flex flex-col items-center  md:items-start justify-center gap-[10px] py-[30px] md:py-0 px-[15px] sm:px-[30px] md:px-0">
        <h2 className="text-h3 lg:text-h2 font-semibold">Connect wallet</h2>
        <div className="text-[18px] lg:text-[22px] max-w-[70%] text-center md:text-left">
          Choose a wallet you want to connect. There are several wallet
          providers.
        </div>
        <div className="!mt-[30px] flex flex-col md:items-start gap-[15px]">
          {items.map((item) => (
            <div
              key={item.id}
              className="w-[320px] h-[72px] flex items-center gap-[30px] pl-[40px] border border-cta rounded-[20px] bg-bgsecondary"
            >
              <img
                className="w-[42px] aspect-square object-cover"
                src={item.image}
                alt=""
              />
              <h5 className="text-h5 font-semibold">{item.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
