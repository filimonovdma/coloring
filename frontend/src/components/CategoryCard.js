import { useMemo } from "react";

const CategoryCard = ({
  allCategories15,
  iconArrowIosForward,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const allCategories15Style = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  return (
    <div
      className="self-stretch w-[250px] shrink-0 flex flex-col py-1.5 px-[15px] box-border items-center justify-center text-center text-mini text-black font-roboto"
      style={frameDivStyle}
    >
      <div
        className="relative w-[216px] h-[50.88px] shrink-0"
        style={groupDivStyle}
      >
        <div
          className="absolute top-[0.88px] left-[0px] rounded-3xs bg-lavender w-[216px] h-[50px]"
          style={rectangleDivStyle}
        />
        <div
          className="absolute top-[0px] left-[0.63px] flex items-center justify-center w-[150.7px] h-[50px]"
          style={allCategories15Style}
        >
          {allCategories15}
        </div>
        <img
          className="absolute h-[39.31%] w-[11.63%] top-[27.4%] right-[7.56%] bottom-[33.29%] left-[80.81%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={iconArrowIosForward}
        />
      </div>
    </div>
  );
};

export default CategoryCard;
