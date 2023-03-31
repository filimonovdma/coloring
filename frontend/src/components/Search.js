import FormComponent from "./FormComponent";

const Search = ({ onClose }) => {
  return (
    <div className="relative bg-white overflow-hidden flex flex-col py-[59px] px-20 box-border items-center justify-center max-w-full max-h-full">
      <FormComponent />
    </div>
  );
};

export default Search;
