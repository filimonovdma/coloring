import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/category");
  }, [navigate]);

  return (
    <div className="w-[1352px] h-[70px] shrink-0 overflow-hidden flex flex-row items-start justify-start gap-[10px]">
      <div className="self-stretch w-[63px] shrink-0 overflow-hidden flex flex-col py-[11px] px-[29px] box-border items-center justify-center">
        <button className="cursor-pointer [border:none] pt-0 px-0 pb-1 bg-[transparent] flex flex-row items-start justify-start sm:hidden">
          <div className="flex flex-row pt-1 px-2.5 pb-0 items-start justify-start">
            <div className="flex flex-row pt-0 px-0 pb-1 items-start justify-start">
              <img
                className="relative w-6 h-6 shrink-0 object-cover"
                alt=""
                src="/mask-group3@2x.png"
              />
            </div>
          </div>
        </button>
      </div>
      <input
        className="[border:none] bg-[transparent] self-stretch flex-1 relative overflow-hidden border-b-[1px] border-solid border-darkslategray"
        type="search"
        placeholder="Поиск..."
      />
      <div className="self-stretch overflow-hidden flex flex-row py-[15px] px-1 items-center justify-center">
        <img
          className="relative w-10 h-10 shrink-0 cursor-pointer"
          alt=""
          src="/group-1.svg"
          onClick={onGroupIconClick}
        />
      </div>
    </div>
  );
};

export default FormComponent;
