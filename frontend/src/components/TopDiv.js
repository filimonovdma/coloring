const TopDiv = () => {
  return (
    <div className="self-stretch bg-white h-[93px] shrink-0 flex flex-row py-[15px] px-[60px] box-border items-center justify-start text-left text-sm text-black font-roboto">
      <div className="self-stretch flex flex-col items-start justify-between">
        <b className="relative flex items-center w-[464px] h-[37px] shrink-0">
          15 Courses Found
        </b>
      </div>
      <div className="self-stretch flex-1" />
      <div className="self-stretch flex flex-row py-1.5 px-0 items-center justify-end gap-[15px] text-center text-mini">
        <div className="relative">Short By:</div>
        <div className="relative w-[172px] h-[50.88px] shrink-0">
          <button className="cursor-pointer [border:none] p-0 bg-lavender absolute top-[0.88px] left-[0px] rounded-3xs w-[172px] h-[50px]" />
          <div className="absolute top-[0px] left-[0.5px] flex items-center justify-center w-[120px] h-[50px]">
            Default
          </div>
          <img
            className="absolute h-[39.31%] w-[11.63%] top-[27.4%] right-[7.56%] bottom-[33.29%] left-[80.81%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/-icon-arrow-ios-forward3.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default TopDiv;
