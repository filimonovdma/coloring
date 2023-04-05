import { useMemo, useEffect } from "react";

const Header = ({
  imageDimensionIds,
  smallImageDimensionIds,
  logosvgCursor,
  aPadding,
  aFlex,
  openMenuopen,
  onLogosvgClick,
  openSearch,
  onSpan1Click,
}) => {
  const logosvgStyle = useMemo(() => {
    return {
      cursor: logosvgCursor,
    };
  }, [logosvgCursor]);

  const iStyle = useMemo(() => {
    return {
      padding: aPadding,
      flex: aFlex,
    };
  }, [aPadding, aFlex]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <dev
      className="self-stretch bg-red flex flex-col items-start justify-start 
      [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] border-b-[1px] border-solid border-gray-200"
      data-animate-on-scroll
    >
      <section className="self-stretch bg-white flex flex-col py-[5px] px-0 items-start justify-start">
        <div className="self-stretch flex flex-row py-0 px-[60px] items-start justify-start">
          <div className="self-stretch w-[300px] shrink-0 flex flex-row py-[15px] px-0 box-border items-center justify-start gap-[15px] sm:w-[100px]">
            <nav
              className="self-stretch flex flex-row items-center justify-start gap-[12px] opacity-[0.5] cursor-pointer sm:hidden"
         //     ref={spanRef}
              onClick={openMenuopen}
            >
              <button className="cursor-pointer [border:none] p-0 bg-midnightblue relative w-5 h-0.5 shrink-0 hover:bg-red">
                <button className="cursor-pointer [border:none] p-0 bg-midnightblue absolute top-[-8px] left-[5px] w-[15px] h-0.5 hover:bg-red" />
                <button className="cursor-pointer [border:none] p-0 bg-midnightblue absolute top-[8px] left-[0px] w-[15px] h-0.5 hover:bg-red" />
              </button>
              <div className="relative text-sm leading-[15px] font-inter text-midnightblue text-left">
                Explore
              </div>
            </nav>
            <div
              className="self-stretch relative w-[140px] shrink-0 cursor-pointer sm:flex"
              onClick={onLogosvgClick}
              style={logosvgStyle}
            >
              <img
                className="absolute top-[calc(50%_-_24.5px)] left-[calc(50%_-_70px)] w-[140px] h-[50px] overflow-hidden"
                alt=""
                src={imageDimensionIds}
              />
            </div>
          </div>
          <div className="flex-1 relative h-20" />
          <div className="self-stretch w-[300px] shrink-0 flex flex-row py-4 px-0 box-border items-center justify-end gap-[15px] sm:w-[100px]">
            <button
              className="cursor-pointer [border:none] pt-0 px-0 pb-1 bg-[transparent] flex flex-row items-start justify-start sm:hidden"
              onClick={openSearch}
              style={iStyle}
            >
              <div className="flex flex-row pt-1 px-2.5 pb-0 items-start justify-start">
                <div className="flex flex-row pt-0 px-0 pb-1 items-start justify-start">
                  <img
                    className="relative w-6 h-6 shrink-0 object-cover"
                    alt=""
                    src={smallImageDimensionIds}
                  />
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start sm:hidden">
              <div className="flex flex-row pt-1 px-2.5 pb-0 items-start justify-start relative">
                <div className="flex flex-row pt-0 px-0 pb-1 items-start justify-start z-[0]">
                  <img
                    className="relative w-6 h-6 shrink-0 object-cover"
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                </div>
                <div className="my-0 mx-[!important] absolute h-[calc(100%_-_17px)] w-[calc(100%_-_29px)] top-[-3px] right-[-11px] bottom-[20px] left-[40px] rounded-5xs-5 bg-blueviolet-100 flex flex-row py-0 pr-[3.5625px] pl-[4.4375px] box-border items-start justify-start [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]">
                  <div className="relative text-3xs leading-[15px] font-inter text-white text-center">
                    0
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start sm:hidden">
              <div className="rounded-31xl bg-blueviolet-200 flex flex-row py-[11px] pr-[39.484375px] pl-10 items-start justify-start">
                <div className="relative text-sm leading-[27px] font-inter text-blueviolet-100 text-center">
                  Log in
                </div>
              </div>
            </button>
            <nav
              className="self-stretch hidden flex-row py-[1.5px] px-0 items-center justify-start gap-[12px] cursor-pointer sm:flex"
              onClick={onSpan1Click}
            >
              <button className="cursor-pointer [border:none] p-0 bg-midnightblue relative w-5 h-0.5 shrink-0">
                <div className="absolute top-[-8px] left-[5px] bg-midnightblue w-[15px] h-0.5" />
                <div className="absolute top-[8px] left-[0px] bg-midnightblue w-[15px] h-0.5" />
              </button>
              <div className="relative text-sm leading-[15px] font-inter text-midnightblue text-left">
                Explore
              </div>
            </nav>
          </div>
        </div>
      </section>
    </dev>
  );
};

export default Header;
