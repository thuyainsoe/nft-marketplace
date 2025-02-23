const items = [
  {
    id: 1,
    image: "/images/artistdetail/img1.png",
    title: "Distant Galaxy",
    coverImg: "/images/artistdetail/img1.png",
    name: "Animakid",
    price: "1.63 ETH",
    highestPrice: "0.33 wETH",
  },
  {
    id: 2,
    image: "/images/artistdetail/img2.png",
    title: "Life On Edena",
    coverImg: "/images/artistdetail/img2.png",
    name: "Animakid",
    price: "1.63 ETH",
    highestPrice: "0.33 wETH",
  },
  {
    id: 3,
    image: "/images/artistdetail/img3.png",
    title: "AstroFiction",
    coverImg: "/images/artistdetail/img3.png",
    name: "Animakid",
    price: "1.63 ETH",
    highestPrice: "0.33 wETH",
  },
  {
    id: 4,
    image: "/images/artistdetail/img4.png",
    title: "CryptoCity",
    coverImg: "/images/artistdetail/img4.png",
    name: "Animakid",
    price: "1.63 ETH",
    highestPrice: "0.33 wETH",
  },
  {
    id: 5,
    image: "/images/artistdetail/img5.png",
    title: "ColorfulDog 0524",
    coverImg: "/images/artistdetail/img5.png",
    name: "Animakid",
    price: "1.63 ETH",
    highestPrice: "0.33 wETH",
  },
  {
    id: 6,
    image: "/images/artistdetail/img6.png",
    title: "Space Tales",
    coverImg: "/images/artistdetail/img6.png",
    name: "Animakid",
    price: "1.63 ETH",
    highestPrice: "0.33 wETH",
  },
  {
    id: 7,
    image: "/images/artistdetail/img7.png",
    title: "Cherry Blossom Girl 037",
    coverImg: "/images/artistdetail/img7.png",
    name: "Animakid",
    price: "1.63 ETH",
    highestPrice: "0.33 wETH",
  },
  {
    id: 8,
    image: "/images/artistdetail/img8.png",
    title: "Dancing Robots 0987",
    coverImg: "/images/artistdetail/img8.png",
    name: "Animakid",
    price: "1.63 ETH",
    highestPrice: "0.33 wETH",
  },
  {
    id: 9,
    image: "/images/artistdetail/img9.png",
    title: "IceCream Ape ",
    coverImg: "/images/artistdetail/img9.png",
    name: "Animakid",
    price: "1.63 ETH",
    highestPrice: "0.33 wETH",
  },
];

const CollectionSection = () => {
  return (
    <div className="main-container w-full bg-bgsecondary py-[40px] md:py-[60px] lg:py-[80px]">
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px] px-0 md:px-[25px] lg:px-[50px]">
        {items.map((item) => (
          <div key={item.id} className="w-full rounded-[20px] bg-bg">
            <img src={item.image} alt="" />
            <div className="p-[20px] flex flex-col gap-[20px]">
              {/* top section */}
              <div className="w-full  flex flex-col items-start gap-[10px] rounded-b-2xl">
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
              {/* bottom section */}
              <div className="flex w-full justify-between items-center font-mono">
                <div className="flex flex-col items-start gap-[5px]">
                  <span className="text-captionfont text-caption">Price</span>
                  <span className="text-white text-base">1.63 ETH</span>
                </div>
                <div className="flex flex-col items-end gap-[5px]">
                  <span className="text-captionfont text-caption">
                    Highest Bid
                  </span>
                  <span className="text-white text-base">0.33 wETH</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;
