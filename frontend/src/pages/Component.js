const Component = () => {
  return (
    <nav className="relative w-full flex flex-row py-[1.5px] px-0 box-border items-center justify-start gap-[12px]">
      <button className="cursor-pointer [border:none] p-0 bg-gray-100 relative w-5 h-0.5 shrink-0">
        <div className="absolute top-[-8px] left-[0px] bg-gray-100 w-5 h-0.5" />
        <div className="absolute top-[8px] left-[0px] bg-gray-100 w-5 h-0.5" />
      </button>
      <div className="relative text-sm leading-[15px] font-inter text-gray-100 text-left">
        Explore
      </div>
    </nav>
  );
};

export default Component;
