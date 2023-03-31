import { useMemo } from "react";

const DrawingCourseCard = ({
  x435jpg,
  c33a229685c37eb0eab4a17bf,
  x435jpg1,
  c33a229685c37eb0eab4a17bf1,
  x435jpg2,
  c33a229685c37eb0eab4a17bf2,
  x435jpg3,
  c33a229685c37eb0eab4a17bf3,
  spanCursor,
  propHeight,
  spanFlex,
  spanHeight,
  spanFlexShrink,
  c33a229685c37eb0eab4a17bfMargin,
  onPoductClick,
}) => {
  const poductStyle = useMemo(() => {
    return {
      cursor: spanCursor,
    };
  }, [spanCursor]);

  const divStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const div1Style = useMemo(() => {
    return {
      flex: spanFlex,
      height: spanHeight,
      flexShrink: spanFlexShrink,
    };
  }, [spanFlex, spanHeight, spanFlexShrink]);

  const theUltimateDrawingStyle = useMemo(() => {
    return {
      margin: c33a229685c37eb0eab4a17bfMargin,
    };
  }, [c33a229685c37eb0eab4a17bfMargin]);

  return (
    <div className="self-stretch flex flex-row items-start justify-center gap-[46px] text-left text-4xs text-white font-inter">
      <div
        className="rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start cursor-pointer"
        onClick={onPoductClick}
        style={poductStyle}
      >
        <div
          className="h-[385.98px] flex flex-col items-start justify-start"
          style={divStyle}
        >
          <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start">
            <div className="relative w-[300px] h-[212.19px] shrink-0 overflow-hidden">
              <img
                className="absolute top-[0px] left-[0px] w-[300px] h-[212.19px] object-cover"
                alt=""
                loading="lazy"
                src={x435jpg}
              />
              <div className="absolute h-[calc(100%_-_183.19px)] w-[calc(100%_-_235.8px)] top-[10px] right-[225.8px] bottom-[173.19px] left-[10px] rounded-31xl bg-tomato flex flex-row py-[9px] pr-[21.203125px] pl-5 box-border items-start justify-start">
                <div className="relative leading-[11px] uppercase font-medium">
                  Sale
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 relative w-[300px] text-smi text-steelblue"
            style={div1Style}
          >
            <div className="absolute top-[12px] left-[0px] w-[300px] h-[27px] text-darkorange">
              <div className="absolute top-[calc(50%_-_13.59px)] left-[0px] leading-[25.2px] font-medium">
                4.0
              </div>
              <div className="absolute top-[calc(50%_-_13.5px)] left-[26.77px] flex flex-row py-0 pr-[0.25px] pl-0 items-center justify-start gap-[7px] text-4xs text-gainsboro font-font-awesome-5-free">
                <div className="relative w-[82px] h-[18px] shrink-0 overflow-hidden">
                  <div className="absolute top-[0px] left-[0px] w-[82px] h-[18px] overflow-hidden">
                    <div className="absolute top-[3px] left-[0px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[17.78px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[35.56px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[53.34px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[71.13px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-full w-[calc(100%_-_16.41px)] top-[0px] right-[16.41px] bottom-[0px] left-[0px] overflow-hidden text-darkorange">
                    <div className="absolute top-[3px] left-[0px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[17.78px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[35.56px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[53.34px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-xs leading-[27px] font-inter text-steelblue">
                  (1)
                </div>
              </div>
            </div>
            <div className="absolute top-[44px] left-[0px] overflow-hidden flex flex-row py-0 pr-[2.89373779296875px] pl-0 items-start justify-start text-base text-midnightblue">
              <h3
                className="m-0 relative text-[inherit] leading-[23.12px] capitalize font-medium font-inherit flex items-center w-[297.11px] shrink-0"
                style={theUltimateDrawingStyle}
              >
                The Ultimate Drawing Course Beginner to Advanced (Learn Figma)
              </h3>
            </div>
            <div className="absolute top-[97.22px] left-[0px] flex flex-row py-0 pr-[27.75px] pl-0 items-start justify-start gap-[18.55px] text-base">
              <div className="relative w-[84.77px] h-[25.19px] shrink-0">
                <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                  <div className="relative leading-[16px] capitalize"></div>
                </div>
                <div className="absolute top-[-1px] left-[21px] text-smi leading-[25.2px] capitalize">
                  6 Lessons
                </div>
              </div>
              <div className="relative w-[70.53px] h-[25.19px] shrink-0">
                <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                  <div className="relative leading-[16px] capitalize"></div>
                </div>
                <div className="absolute top-[-1px] left-[21px] text-sm leading-[25.2px] capitalize">
                  8 week
                </div>
              </div>
              <div className="relative w-[79.86px] h-[25.19px] shrink-0">
                <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                  <div className="relative leading-[16px] capitalize"></div>
                </div>
                <div className="absolute top-[-1px] left-[21px] text-sm leading-[25.2px] capitalize">
                  beginner
                </div>
              </div>
            </div>
            <div className="absolute top-[130.41px] left-[0px] box-border w-[300px] h-[43.39px] border-t-[1px] border-solid border-whitesmoke-200">
              <div className="absolute top-[calc(50%_-_9.51px)] left-[0px] w-[99.5px] h-[30px]">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] rounded-11xl w-[30px] h-[30px] overflow-hidden">
                  <img
                    className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] w-[30px] h-[33px] object-cover"
                    alt=""
                    src={c33a229685c37eb0eab4a17bf}
                  />
                </div>
                <div className="absolute top-[1.41px] left-[40px] leading-[25.2px]">
                  John Doe
                </div>
              </div>
              <div className="absolute top-[17px] left-[239.27px] text-sm leading-[27px] font-medium flex items-center w-[60.93px] h-5">
                <span className="[line-break:anywhere] w-full">
                  <span className="[text-decoration:line-through]">{`$28 `}</span>
                  <span className="text-midnightblue">$25</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start">
        <div className="flex flex-col items-start justify-start">
          <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start">
            <div className="relative w-[300px] h-[212.19px] shrink-0 overflow-hidden">
              <img
                className="absolute top-[0px] left-[0px] w-[300px] h-[212.19px] object-cover"
                alt=""
                src={x435jpg1}
              />
              <div className="absolute h-[calc(100%_-_183.19px)] w-[calc(100%_-_235.8px)] top-[10px] right-[225.8px] bottom-[173.19px] left-[10px] rounded-31xl bg-tomato flex flex-row py-[9px] pr-[21.203125px] pl-5 box-border items-start justify-start">
                <div className="relative leading-[11px] uppercase font-medium">
                  Sale
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[300px] h-[173.8px] shrink-0 text-smi text-steelblue">
            <div className="absolute top-[12px] left-[0px] w-[300px] h-[27px] text-darkorange">
              <div className="absolute top-[calc(50%_-_13.59px)] left-[0px] leading-[25.2px] font-medium">
                4.0
              </div>
              <div className="absolute top-[calc(50%_-_13.5px)] left-[26.77px] flex flex-row py-0 pr-[0.25px] pl-0 items-center justify-start gap-[7px] text-4xs text-gainsboro font-font-awesome-5-free">
                <div className="relative w-[82px] h-[18px] shrink-0 overflow-hidden">
                  <div className="absolute top-[0px] left-[0px] w-[82px] h-[18px] overflow-hidden">
                    <div className="absolute top-[3px] left-[0px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[17.78px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[35.56px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[53.34px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[71.13px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-full w-[calc(100%_-_16.41px)] top-[0px] right-[16.41px] bottom-[0px] left-[0px] overflow-hidden text-darkorange">
                    <div className="absolute top-[3px] left-[0px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[17.78px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[35.56px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[53.34px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-xs leading-[27px] font-inter text-steelblue">
                  (1)
                </div>
              </div>
            </div>
            <div className="absolute top-[44px] left-[0px] overflow-hidden flex flex-row py-0 pr-[2.89373779296875px] pl-0 items-start justify-start text-base text-midnightblue">
              <div className="relative leading-[23.12px] capitalize font-medium flex items-center w-[297.11px] shrink-0">
                The Ultimate Drawing Course Beginner to Advanced (Learn Figma)
              </div>
            </div>
            <div className="absolute top-[97.22px] left-[0px] flex flex-row py-0 pr-[27.75px] pl-0 items-start justify-start gap-[18.55px] text-base">
              <div className="relative w-[84.77px] h-[25.19px] shrink-0">
                <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                  <div className="relative leading-[16px] capitalize"></div>
                </div>
                <div className="absolute top-[-1px] left-[21px] text-smi leading-[25.2px] capitalize">
                  6 Lessons
                </div>
              </div>
              <div className="relative w-[70.53px] h-[25.19px] shrink-0">
                <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                  <div className="relative leading-[16px] capitalize"></div>
                </div>
                <div className="absolute top-[-1px] left-[21px] text-sm leading-[25.2px] capitalize">
                  8 week
                </div>
              </div>
              <div className="relative w-[79.86px] h-[25.19px] shrink-0">
                <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                  <div className="relative leading-[16px] capitalize"></div>
                </div>
                <div className="absolute top-[-1px] left-[21px] text-sm leading-[25.2px] capitalize">
                  beginner
                </div>
              </div>
            </div>
            <div className="absolute top-[130.41px] left-[0px] box-border w-[300px] h-[43.39px] border-t-[1px] border-solid border-whitesmoke-200">
              <div className="absolute top-[calc(50%_-_9.51px)] left-[0px] w-[99.5px] h-[30px]">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] rounded-11xl w-[30px] h-[30px] overflow-hidden">
                  <img
                    className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] w-[30px] h-[33px] object-cover"
                    alt=""
                    src={c33a229685c37eb0eab4a17bf1}
                  />
                </div>
                <div className="absolute top-[1.41px] left-[40px] leading-[25.2px]">
                  John Doe
                </div>
              </div>
              <div className="absolute top-[17px] left-[239.27px] text-sm leading-[27px] font-medium flex items-center w-[60.93px] h-5">
                <span className="[line-break:anywhere] w-full">
                  <span className="[text-decoration:line-through]">{`$28 `}</span>
                  <span className="text-midnightblue">$25</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start md:hidden">
        <div className="flex flex-col items-start justify-start">
          <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start">
            <div className="relative w-[300px] h-[212.19px] shrink-0 overflow-hidden">
              <img
                className="absolute top-[0px] left-[0px] w-[300px] h-[212.19px] object-cover"
                alt=""
                src={x435jpg2}
              />
              <div className="absolute h-[calc(100%_-_183.19px)] w-[calc(100%_-_235.8px)] top-[10px] right-[225.8px] bottom-[173.19px] left-[10px] rounded-31xl bg-tomato flex flex-row py-[9px] pr-[21.203125px] pl-5 box-border items-start justify-start">
                <div className="relative leading-[11px] uppercase font-medium">
                  Sale
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[300px] h-[173.8px] shrink-0 text-smi text-steelblue">
            <div className="absolute top-[12px] left-[0px] w-[300px] h-[27px] text-darkorange">
              <div className="absolute top-[calc(50%_-_13.59px)] left-[0px] leading-[25.2px] font-medium">
                4.0
              </div>
              <div className="absolute top-[calc(50%_-_13.5px)] left-[26.77px] flex flex-row py-0 pr-[0.25px] pl-0 items-center justify-start gap-[7px] text-4xs text-gainsboro font-font-awesome-5-free">
                <div className="relative w-[82px] h-[18px] shrink-0 overflow-hidden">
                  <div className="absolute top-[0px] left-[0px] w-[82px] h-[18px] overflow-hidden">
                    <div className="absolute top-[3px] left-[0px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[17.78px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[35.56px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[53.34px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[71.13px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-full w-[calc(100%_-_16.41px)] top-[0px] right-[16.41px] bottom-[0px] left-[0px] overflow-hidden text-darkorange">
                    <div className="absolute top-[3px] left-[0px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[17.78px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[35.56px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[53.34px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-xs leading-[27px] font-inter text-steelblue">
                  (1)
                </div>
              </div>
            </div>
            <div className="absolute top-[44px] left-[0px] overflow-hidden flex flex-row py-0 pr-[2.89373779296875px] pl-0 items-start justify-start text-base text-midnightblue">
              <div className="relative leading-[23.12px] capitalize font-medium flex items-center w-[297.11px] shrink-0">
                The Ultimate Drawing Course Beginner to Advanced (Learn Figma)
              </div>
            </div>
            <div className="absolute top-[97.22px] left-[0px] flex flex-row py-0 pr-[27.75px] pl-0 items-start justify-start gap-[18.55px] text-base">
              <div className="relative w-[84.77px] h-[25.19px] shrink-0">
                <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                  <div className="relative leading-[16px] capitalize"></div>
                </div>
                <div className="absolute top-[-1px] left-[21px] text-smi leading-[25.2px] capitalize">
                  6 Lessons
                </div>
              </div>
              <div className="relative w-[70.53px] h-[25.19px] shrink-0">
                <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                  <div className="relative leading-[16px] capitalize"></div>
                </div>
                <div className="absolute top-[-1px] left-[21px] text-sm leading-[25.2px] capitalize">
                  8 week
                </div>
              </div>
              <div className="relative w-[79.86px] h-[25.19px] shrink-0">
                <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                  <div className="relative leading-[16px] capitalize"></div>
                </div>
                <div className="absolute top-[-1px] left-[21px] text-sm leading-[25.2px] capitalize">
                  beginner
                </div>
              </div>
            </div>
            <div className="absolute top-[130.41px] left-[0px] box-border w-[300px] h-[43.39px] border-t-[1px] border-solid border-whitesmoke-200">
              <div className="absolute top-[calc(50%_-_9.51px)] left-[0px] w-[99.5px] h-[30px]">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] rounded-11xl w-[30px] h-[30px] overflow-hidden">
                  <img
                    className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] w-[30px] h-[33px] object-cover"
                    alt=""
                    src={c33a229685c37eb0eab4a17bf2}
                  />
                </div>
                <div className="absolute top-[1.41px] left-[40px] leading-[25.2px]">
                  John Doe
                </div>
              </div>
              <div className="absolute top-[17px] left-[239.27px] text-sm leading-[27px] font-medium flex items-center w-[60.93px] h-5">
                <span className="[line-break:anywhere] w-full">
                  <span className="[text-decoration:line-through]">{`$28 `}</span>
                  <span className="text-midnightblue">$25</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start lg:flex md:hidden">
        <div className="flex flex-col items-start justify-start">
          <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start">
            <div className="relative w-[300px] h-[212.19px] shrink-0 overflow-hidden">
              <img
                className="absolute top-[0px] left-[0px] w-[300px] h-[212.19px] object-cover"
                alt=""
                src={x435jpg3}
              />
              <div className="absolute h-[calc(100%_-_183.19px)] w-[calc(100%_-_235.8px)] top-[10px] right-[225.8px] bottom-[173.19px] left-[10px] rounded-31xl bg-tomato flex flex-row py-[9px] pr-[21.203125px] pl-5 box-border items-start justify-start">
                <div className="relative leading-[11px] uppercase font-medium">
                  Sale
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[300px] h-[173.8px] shrink-0 text-smi text-steelblue">
            <div className="absolute top-[12px] left-[0px] w-[300px] h-[27px] text-darkorange">
              <div className="absolute top-[calc(50%_-_13.59px)] left-[0px] leading-[25.2px] font-medium">
                4.0
              </div>
              <div className="absolute top-[calc(50%_-_13.5px)] left-[26.77px] flex flex-row py-0 pr-[0.25px] pl-0 items-center justify-start gap-[7px] text-4xs text-gainsboro font-font-awesome-5-free">
                <div className="relative w-[82px] h-[18px] shrink-0 overflow-hidden">
                  <div className="absolute top-[0px] left-[0px] w-[82px] h-[18px] overflow-hidden">
                    <div className="absolute top-[3px] left-[0px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[17.78px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[35.56px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[53.34px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[71.13px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-full w-[calc(100%_-_16.41px)] top-[0px] right-[16.41px] bottom-[0px] left-[0px] overflow-hidden text-darkorange">
                    <div className="absolute top-[3px] left-[0px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[17.78px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[35.56px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[3px] left-[53.34px] flex flex-row py-0 pr-[2.25px] pl-0 items-start justify-start">
                      <div className="relative tracking-[2px] leading-[10px]">
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-xs leading-[27px] font-inter text-steelblue">
                  (1)
                </div>
              </div>
            </div>
            <div className="absolute top-[44px] left-[0px] overflow-hidden flex flex-row py-0 pr-[2.89373779296875px] pl-0 items-start justify-start text-base text-midnightblue">
              <div className="relative leading-[23.12px] capitalize font-medium flex items-center w-[297.11px] shrink-0">
                The Ultimate Drawing Course Beginner to Advanced (Learn Figma)
              </div>
            </div>
            <div className="absolute top-[97.22px] left-[0px] flex flex-row py-0 pr-[27.75px] pl-0 items-start justify-start gap-[18.55px] text-base">
              <div className="relative w-[84.77px] h-[25.19px] shrink-0">
                <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                  <div className="relative leading-[16px] capitalize"></div>
                </div>
                <div className="absolute top-[-1px] left-[21px] text-smi leading-[25.2px] capitalize">
                  6 Lessons
                </div>
              </div>
              <div className="relative w-[70.53px] h-[25.19px] shrink-0">
                <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                  <div className="relative leading-[16px] capitalize"></div>
                </div>
                <div className="absolute top-[-1px] left-[21px] text-sm leading-[25.2px] capitalize">
                  8 week
                </div>
              </div>
              <div className="relative w-[79.86px] h-[25.19px] shrink-0">
                <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                  <div className="relative leading-[16px] capitalize"></div>
                </div>
                <div className="absolute top-[-1px] left-[21px] text-sm leading-[25.2px] capitalize">
                  beginner
                </div>
              </div>
            </div>
            <div className="absolute top-[130.41px] left-[0px] box-border w-[300px] h-[43.39px] border-t-[1px] border-solid border-whitesmoke-200">
              <div className="absolute top-[calc(50%_-_9.51px)] left-[0px] w-[99.5px] h-[30px]">
                <div className="absolute top-[calc(50%_-_15px)] left-[0px] rounded-11xl w-[30px] h-[30px] overflow-hidden">
                  <img
                    className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] w-[30px] h-[33px] object-cover"
                    alt=""
                    src={c33a229685c37eb0eab4a17bf3}
                  />
                </div>
                <div className="absolute top-[1.41px] left-[40px] leading-[25.2px]">
                  John Doe
                </div>
              </div>
              <div className="absolute top-[17px] left-[239.27px] text-sm leading-[27px] font-medium flex items-center w-[60.93px] h-5">
                <span className="[line-break:anywhere] w-full">
                  <span className="[text-decoration:line-through]">{`$28 `}</span>
                  <span className="text-midnightblue">$25</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawingCourseCard;
