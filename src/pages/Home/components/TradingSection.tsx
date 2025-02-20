const items = [
  {
    id: 1,
    images: [
      "/images/tranding/tranding-img1.png",
      "/images/tranding/tranding-img2.png",
      "/images/tranding/tranding-img3f.png",
    ],
    title: "DSGN Animals",
    owner: "MrFox",
  },
  {
    id: 2,
    images: [
      "/images/tranding/tranding-img4.png",
      "/images/tranding/tranding-img5.png",
      "/images/tranding/tranding-img6.png",
    ],
    title: "Magic Mushrooms",
    owner: "Shroomie",
  },
  {
    id: 3,
    images: [
      "/images/tranding/tranding-img7.png",
      "/images/tranding/tranding-img8.png",
      "/images/tranding/tranding-img9.png",
    ],
    title: "Disco Machines",
    owner: "BeKind2Robots",
  },
];

const TradingSection = () => {
  return (
    <div className="py-[40px] lg:py-[80px] gap-[40px] lg:gap-[60px] flex flex-col items-start w-full main-container">
      {/* top section */}
      <div className="flex flex-col items-start gap-[10px]">
        <h3 className="text-h3 text-white font-semibold">
          Trending Collection
        </h3>
        <div className="text-base text-white">
          Checkout our weekly updated trending collection.
        </div>
      </div>
      {/* bottom section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
        {items?.map((item) => (
          <div className="flex flex-col gap-[15px]" key={item.id}>
            {/* top images */}
            <div className="w-full aspect-square">
              <img className="w-full h-full" src={item?.images[0]} alt="" />
            </div>
            {/* next images */}
            <div className="grid grid-cols-3 gap-[15px]">
              <div className="w-full aspect-square">
                <img className="w-full h-full" src={item?.images[1]} alt="" />
              </div>
              <div className="w-full aspect-square">
                <img className="w-full h-full" src={item?.images[2]} alt="" />
              </div>
              <div className="w-full aspect-square bg-cta flex items-center justify-center rounded-[20px]">
                <h5 className="text-h5 font-mono font-semibold">1025+</h5>
              </div>
            </div>
            {/* bottom section */}
            <div className="flex flex-col items-start gap-[10px]">
              <h5 className="text-h5 font-semibold">{item?.title}</h5>
              <div className="flex items-center gap-[10px]">
                <img
                  className="w-[24px] aspect-square rounded-full"
                  src={item?.images[0]}
                  alt=""
                />
                <span className="text-base">{item?.owner}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingSection;
