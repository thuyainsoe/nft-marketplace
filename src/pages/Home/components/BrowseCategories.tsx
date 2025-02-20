const items = [
  {
    id: 1,
    label: "Art",
    coverImage: "/images/browsecategories/image1.png",
    logoImage: "/images/browsecategories/icon1.png",
  },
  {
    id: 2,
    label: "Collectibles",
    coverImage: "/images/browsecategories/image2.png",
    logoImage: "/images/browsecategories/icon2.png",
  },
  {
    id: 3,
    label: "Music",
    coverImage: "/images/browsecategories/image3.png",
    logoImage: "/images/browsecategories/icon3.png",
  },
  {
    id: 4,
    label: "Photography",
    coverImage: "/images/browsecategories/image4.png",
    logoImage: "/images/browsecategories/icon4.png",
  },
  {
    id: 5,
    label: "Video",
    coverImage: "/images/browsecategories/image5.png",
    logoImage: "/images/browsecategories/icon5.png",
  },
  {
    id: 6,
    label: "Utility",
    coverImage: "/images/browsecategories/image6.png",
    logoImage: "/images/browsecategories/icon6.png",
  },
  {
    id: 7,
    label: "Sport",
    coverImage: "/images/browsecategories/image7.png",
    logoImage: "/images/browsecategories/icon7.png",
  },
  {
    id: 8,
    label: "Virtual Worlds",
    coverImage: "/images/browsecategories/image8.png",
    logoImage: "/images/browsecategories/icon8.png",
  },
];

const BrowseCategories = () => {
  return (
    <div className="py-[40px] lg:py-[80px] gap-[40px] lg:gap-[60px] flex flex-col items-start w-full main-container">
      <h3 className="text-h3 font-semibold">Browse Categories</h3>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[30px]">
        {items?.map((item) => (
          <div className="w-full bg-bgsecondary overflow-hidden rounded-[20px]">
            <div className="w-full aspect-square overflow-hidden relative">
              <img className="blur-sm" src={item.coverImage} alt="" />
              <img
                className="absolute top-1/2 translate-x-[-50%] w-[100px] aspect-square left-1/2 translate-y-[-50%]"
                src={item.logoImage}
                alt=""
              />
            </div>
            <div className="w-full text-h5 font-semibold bg-bgsecondary py-[20px] px-[30px]">
              {item?.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCategories;
