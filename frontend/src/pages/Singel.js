import { useState, useRef, useCallback } from "react";
import Menuopen from "../components/Menuopen";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";

const Singel = () => {
  const spanRef = useRef(null);
  const [isMenuopenOpen, setMenuopenOpen] = useState(false);
  const navigate = useNavigate();
  const [isSearchOpen, setSearchOpen] = useState(false);

  const openMenuopen = useCallback(() => {
    setMenuopenOpen(true);
  }, []);

  const closeMenuopen = useCallback(() => {
    setMenuopenOpen(false);
  }, []);

  const onLogosvgClick = useCallback(() => {
    navigate("/category");
  }, [navigate]);

  const openSearch = useCallback(() => {
    setSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
  }, []);

  const onSpan1Click = useCallback(() => {
    navigate("/span");
  }, [navigate]);

  return (
    <>
      <div className="relative box-border w-full h-[1473px] flex flex-col items-start justify-start text-left text-3xs text-steelblue font-inter border-[1px] border-solid border-black">
        <Header
          imageDimensionIds="/logosvg.svg"
          smallImageDimensionIds="/mask-group@2x.png"
          logosvgCursor="pointer"
          aPadding="0px 0px 4px"
          openMenuopen={openMenuopen}
          onLogosvgClick={onLogosvgClick}
          openSearch={openSearch}
          onSpan1Click={onSpan1Click}
        />
        <CourseCard
          iconArrowIosForward="/-icon-arrow-ios-forward.svg"
          iconArrowIosForward1="/-icon-arrow-ios-forward.svg"
        />
        <div className="self-stretch bg-whitesmoke-100 flex flex-row pt-0 px-[60px] pb-20 items-start justify-start md:flex-col md:items-center md:justify-start">
          <div className="flex-1 flex flex-col items-center justify-start md:flex-[unset] md:self-stretch">
            <div className="self-stretch bg-whitesmoke-100 flex flex-row py-[60px] px-0 items-start justify-start">
              <div className="flex-1 h-[218px] flex flex-col items-start justify-center gap-[15px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[15.8px] text-white">
                  <div className="rounded-11xl bg-blueviolet-100 flex flex-row pt-2.5 pb-2 pr-[15.9375px] pl-4 items-start justify-start">
                    <div className="relative leading-[11px] uppercase font-medium">
                      IT and Software
                    </div>
                  </div>
                  <div className="rounded-11xl bg-blueviolet-100 flex flex-row pt-2.5 pb-2 pr-[15.625px] pl-4 items-start justify-start">
                    <div className="relative leading-[11px] uppercase font-medium">
                      Photohraphy
                    </div>
                  </div>
                  <div className="flex-1" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start text-[27px] text-midnightblue">
                  <p className="m-0 flex-1 relative leading-[45px] capitalize font-bold">
                    Fitness, Physical Education Relation To Academic Performance
                  </p>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start text-sm">
                  <span className="flex-1 relative leading-[27px]">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </span>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[33.8px] text-base">
                  <div className="relative w-[130.17px] h-[25.19px] shrink-0 text-smi text-darkorange">
                    <div className="absolute top-[calc(50%_-_13.59px)] left-[0px] leading-[25.2px] font-medium">
                      3.0
                    </div>
                    <div className="absolute top-[calc(50%_-_12.59px)] left-[26.94px] w-[103.23px] h-[25.19px] text-4xs text-gainsboro font-font-awesome-5-free">
                      <div className="absolute top-[calc(50%_-_9px)] left-[0px] w-[82px] h-[18px] overflow-hidden">
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
                        <div className="absolute h-full w-[calc(100%_-_32.81px)] top-[0px] right-[32.81px] bottom-[0px] left-[0px] overflow-hidden text-darkorange">
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
                        </div>
                      </div>
                      <div className="absolute top-[calc(50%_-_13.59px)] left-[89px] text-xs leading-[25.2px] font-inter text-steelblue">
                        (1)
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[86.55px] h-[25.19px] shrink-0">
                    <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                      <div className="relative leading-[16px]"></div>
                    </div>
                    <div className="absolute top-[calc(50%_-_13.59px)] left-[21px] text-smi leading-[25.2px]">
                      6 Enrolled
                    </div>
                  </div>
                  <div className="relative w-[67.94px] h-[25.19px] shrink-0">
                    <div className="absolute top-[calc(50%_-_8.33px)] left-[0px] flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                      <div className="relative leading-[16px]"></div>
                    </div>
                    <div className="absolute top-[calc(50%_-_13.59px)] left-[21px] text-smi leading-[25.2px]">
                      2 week
                    </div>
                  </div>
                  <div className="flex-1 relative h-[25.19px]" />
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[10px] text-smi">
                  <div className="relative rounded-11xl w-[30px] h-[30px] shrink-0 overflow-hidden">
                    <img
                      className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] w-[30px] h-[33px] object-cover"
                      alt=""
                      src="/1a80ef4a5aadc123e9f98e6dd1628c60jpeg@2x.png"
                    />
                  </div>
                  <span className="relative leading-[25.2px]">
                    Ronald Richards
                  </span>
                  <div className="self-stretch flex-1 relative rounded-11xl overflow-hidden" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col py-0 pr-[60px] pl-0 items-center justify-start text-smi md:pr-0 md:box-border">
              <div className="self-stretch rounded-lg bg-white shadow-[0px_20px_30px_rgba(25,_25,_46,_0.04)] box-border h-[542px] shrink-0 border-[1px] border-solid border-whitesmoke-200" />
              <div className="self-stretch rounded-lg bg-white shadow-[0px_20px_30px_rgba(25,_25,_46,_0.04)] flex flex-row p-px items-start justify-start border-[1px] border-solid border-whitesmoke-200">
                <div className="flex-1 flex flex-col pt-0 px-[30px] pb-[30px] items-center justify-start gap-[50px]">
                  <div className="self-stretch relative bg-white box-border h-14 shrink-0 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="absolute top-[14px] left-[30px] flex flex-row pt-0 pb-[15px] pr-[3.90625px] pl-0 items-start justify-start text-blueviolet-100">
                      <div className="absolute my-0 mx-[!important] top-[40px] left-[0px] bg-blueviolet-100 w-[61.91px] h-0.5 shrink-0 z-[0]" />
                      <div className="relative leading-[27px] z-[1]">
                        Overview
                      </div>
                    </div>
                    <div className="absolute top-[14px] left-[129.91px] flex flex-row pt-0 pb-[15px] pr-[3.078125px] pl-0 items-start justify-start text-sm">
                      <span className="relative leading-[27px]">
                        Curriculum
                      </span>
                    </div>
                    <div className="absolute top-[14px] left-[242.98px] flex flex-row pt-0 px-0 pb-[15px] items-start justify-start text-sm">
                      <span className="relative leading-[27px]">
                        Instructor
                      </span>
                    </div>
                    <div className="absolute top-[14px] left-[345.67px] flex flex-row pt-0 pb-[15px] pr-[1.5625px] pl-0 items-start justify-start">
                      <span className="relative leading-[27px]">Reviews</span>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-mini">
                    <div className="relative text-[18px] leading-[27.2px] font-medium text-midnightblue">
                      Course Overview
                    </div>
                    <p className="m-0 self-stretch relative text-sm leading-[26px] font-light">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio.
                    </p>
                    <span className="self-stretch relative leading-[26px] font-light">
                      Aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto. Sam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt.
                    </span>
                    <span className="self-stretch relative leading-[26px] font-light">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[337.39px] shrink-0 flex flex-col py-[116px] px-0 box-border items-center justify-start text-[21px] text-midnightblue md:items-center md:justify-center md:pt-[60px] md:pb-[60px] md:box-border">
            <div className="self-stretch bg-white flex flex-col p-5 items-start justify-center gap-[30px]">
              <div className="relative leading-[24px] font-medium">$50</div>
              <div className="relative w-[297.39px] h-[475px] shrink-0 text-mini">
                <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
                  <div className="box-border w-[297.39px] h-[50px] shrink-0 flex flex-row py-2.5 px-0 items-center justify-between border-b-[1px] border-solid border-whitesmoke-200">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                      <div className="flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                        <div className="relative leading-[27px]"></div>
                      </div>
                      <div className="relative text-sm leading-[27px]">
                        Duration
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start text-right text-sm text-steelblue">
                      <div className="relative leading-[16px] font-light">
                        2 week
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row py-2.5 px-0 items-center justify-start border-b-[1px] border-solid border-whitesmoke-200">
                    <div className="self-stretch flex-1 flex flex-row py-0 pr-[1.203125px] pl-0 items-center justify-start gap-[10px]">
                      <div className="flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                        <div className="relative leading-[27px]"></div>
                      </div>
                      <div className="relative text-smi leading-[27px]">
                        Lessons
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-end justify-center text-base text-steelblue">
                      <div className="relative leading-[16px] font-light">
                        6
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border w-[297.39px] h-[51px] shrink-0 border-b-[1px] border-solid border-whitesmoke-200">
                    <div className="absolute top-[calc(50%_-_15.5px)] left-[0px] flex flex-row py-0 pr-[2.46875px] pl-0 items-end justify-start gap-[10px]">
                      <div className="flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                        <div className="relative leading-[27px]"></div>
                      </div>
                      <div className="relative text-smi leading-[27px]">
                        Quizzes
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_-_9.5px)] right-[-0.2px] text-base leading-[16px] font-light text-steelblue flex items-center w-[6.29px] h-[18px]">
                      1
                    </div>
                  </div>
                  <div className="relative box-border w-[297.39px] h-[51px] shrink-0 border-b-[1px] border-solid border-whitesmoke-200">
                    <div className="absolute top-[calc(50%_-_15.5px)] left-[0px] flex flex-row items-end justify-start gap-[10px]">
                      <div className="flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                        <div className="relative leading-[27px]"></div>
                      </div>
                      <div className="relative text-sm leading-[27px]">
                        Maximum Students
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_-_9.5px)] right-[-0.2px] text-sm leading-[16px] font-light text-steelblue flex items-center w-[15.56px] h-[18px]">
                      18
                    </div>
                  </div>
                  <div className="relative box-border w-[297.39px] h-[51px] shrink-0 border-b-[1px] border-solid border-whitesmoke-200">
                    <div className="absolute top-[calc(50%_-_15.5px)] left-[0px] flex flex-row py-0 pr-[1.515625px] pl-0 items-end justify-start gap-[10px]">
                      <div className="flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                        <div className="relative leading-[27px]"></div>
                      </div>
                      <div className="relative text-sm leading-[27px]">
                        Language
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_-_9.5px)] right-[-0.2px] leading-[16px] font-light text-steelblue flex items-center w-[109.28px] h-[18px]">
                      English, France
                    </div>
                  </div>
                  <div className="relative box-border w-[297.39px] h-[51px] shrink-0 border-b-[1px] border-solid border-whitesmoke-200">
                    <div className="absolute top-[calc(50%_-_15.5px)] left-[0px] flex flex-row py-0 pr-[2.796875px] pl-0 items-end justify-start gap-[10px]">
                      <div className="flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                        <div className="relative leading-[27px]"></div>
                      </div>
                      <div className="relative text-smi leading-[27px]">
                        Skill level
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border w-[297.39px] h-[51px] shrink-0 border-b-[1px] border-solid border-whitesmoke-200">
                    <div className="absolute top-[calc(50%_-_15.5px)] left-[0px] flex flex-row py-0 pr-[2.65625px] pl-0 items-end justify-start gap-[10px]">
                      <div className="flex flex-row pt-0 px-0 pb-[3px] items-start justify-start">
                        <div className="relative leading-[27px]"></div>
                      </div>
                      <div className="relative text-sm leading-[27px]">
                        Certificate
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_-_9.5px)] right-[-0.2px] leading-[16px] font-light text-steelblue flex items-center w-[24.81px] h-[18px]">
                      yes
                    </div>
                  </div>
                </div>
                <div className="absolute w-full top-[357px] right-[0px] left-[0px] box-border h-12 text-xs font-font-awesome-5-free border-b-[1px] border-solid border-whitesmoke-200">
                  <div className="absolute top-[12.7px] left-[0px] leading-[21.6px] flex items-center w-[150.45px] h-[21.59px]">
                    <span className="[line-break:anywhere] w-full">
                      <span></span>
                      <span className="text-mini font-inter">
                        {" "}
                        Full lifetime access
                      </span>
                    </span>
                  </div>
                </div>
                <div className="absolute top-[435px] left-[0px] flex flex-row py-0 px-[60px] items-start justify-start gap-[5.8px] text-center text-steelblue font-font-awesome-5-brands">
                  <div className="relative rounded-xl bg-white w-10 h-10 shrink-0">
                    <div className="absolute top-[12px] left-[calc(50%_-_5.69px)] flex flex-row py-0 pr-[0.375px] pl-0 items-start justify-start">
                      <div className="relative leading-[15px]"></div>
                    </div>
                  </div>
                  <div className="relative rounded-xl bg-white w-10 h-10 shrink-0">
                    <div className="absolute top-[12px] left-[calc(50%_-_7.5px)] flex flex-row items-start justify-start">
                      <div className="relative leading-[15px]"></div>
                    </div>
                  </div>
                  <div className="relative rounded-xl bg-white w-10 h-10 shrink-0">
                    <div className="absolute top-[12px] left-[calc(50%_-_7.56px)] flex flex-row py-0 pr-[0.125px] pl-0 items-start justify-start">
                      <div className="relative leading-[15px]"></div>
                    </div>
                  </div>
                  <div className="relative rounded-xl bg-white w-10 h-10 shrink-0">
                    <div className="absolute top-[12px] left-[calc(50%_-_6.63px)] flex flex-row py-0 pr-[0.25px] pl-0 items-start justify-start">
                      <div className="relative leading-[15px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuopenOpen && (
        <PortalPopup
          placement="Top left"
          top={-370}
          left={-60}
          relativeLayerRef={spanRef}
          onOutsideClick={closeMenuopen}
        >
          <Menuopen onClose={closeMenuopen} />
        </PortalPopup>
      )}
      {isSearchOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closeSearch}>
          <Search onClose={closeSearch} />
        </PortalPopup>
      )}
    </>
  );
};

export default Singel;
