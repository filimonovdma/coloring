import CategoryCard from "./CategoryCard";

const FilterDiv = () => {
  return (
    <div className="self-stretch bg-white h-[75px] shrink-0 flex flex-row py-0 px-[60px] box-border items-center justify-start text-center text-mini text-black font-roboto">
      <div className="h-[69px] flex flex-row items-center justify-start">
        <CategoryCard
          allCategories15="All Categories (15)"
          iconArrowIosForward="/-icon-arrow-ios-forward4.svg"
        />
        <div className="self-stretch w-[170px] shrink-0 flex flex-col py-1.5 px-[15px] box-border items-center justify-center">
          <div className="relative w-[147px] h-[50.88px] shrink-0">
            <button className="cursor-pointer [border:none] p-0 bg-lavender absolute top-[0.88px] left-[0px] rounded-3xs w-[147px] h-[50px]" />
            <div className="absolute top-[0px] left-[0.43px] flex items-center justify-center w-[102.56px] h-[50px]">
              All Ratings
            </div>
            <img
              className="absolute h-[39.31%] w-[11.63%] top-[27.4%] right-[7.56%] bottom-[33.29%] left-[80.81%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/-icon-arrow-ios-forward5.svg"
            />
          </div>
        </div>
        <CategoryCard
          allCategories15="All levels (15)"
          iconArrowIosForward="/-icon-arrow-ios-forward6.svg"
          propWidth="170px"
          propWidth1="147px"
          propWidth2="147px"
          propWidth3="102.56px"
        />
      </div>
      <div className="self-stretch flex-1" />
    </div>
  );
};

export default FilterDiv;
