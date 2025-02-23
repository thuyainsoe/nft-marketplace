const FilterTabSection = () => {
  return (
    <div className="main-container h-[70px] shadow-sm shadow-white">
      <ul className="px-0 md:px-[25px] lg:px-[50px] w-full grid grid-cols-3 text-base font-semibold h-full items-center ">
        <li className="w-full text-center flex  items-center gap-[16px] justify-center">
          Created
          <span className="block md:text-base font-mono p-[5px] md:p-[10px] rounded-[20px] bg-caption">
            302
          </span>
        </li>
        <li className="w-full text-center text-caption">Owned</li>
        <li className="w-full text-center text-caption">Collection</li>
      </ul>
    </div>
  );
};

export default FilterTabSection;
