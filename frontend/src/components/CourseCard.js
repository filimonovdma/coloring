const CourseCard = ({ iconArrowIosForward, iconArrowIosForward1 }) => {
  return (
    <div className="self-stretch bg-ghostwhite flex flex-row py-0 px-[60px] items-center justify-start">
      <nav className="flex flex-row items-center justify-start gap-[10px]">
        <div className="flex flex-row items-center justify-start">
          <div className="relative text-mini font-roboto text-midnightblue text-left">
            Home
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <img
            className="relative w-5 h-5 shrink-0"
            alt=""
            src={iconArrowIosForward}
          />
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="relative text-mini font-roboto text-midnightblue text-left">
            Course
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <img
            className="relative w-5 h-5 shrink-0"
            alt=""
            src={iconArrowIosForward1}
          />
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="relative text-sm leading-[27px] font-inter text-midnightblue text-left">
            Fitness, Physical Education Relation To Academic Performance
          </div>
        </div>
      </nav>
      <div className="flex-1 relative h-[68px]" />
    </div>
  );
};

export default CourseCard;
