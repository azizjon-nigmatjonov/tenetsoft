import { LoopIcon } from "../../Icons";

export const SearchBar = () => {
  return (
    <div className="w-full bg-[var(--lightGrey)] text-[var(--gray)] h-[40px] rounded-[10px] px-4 flex space-x-2 items-center">
      <LoopIcon />
      <input
        type="text"
        placeholder="Mahsulot qidirish"
        className="font-manrope bg-transparent w-full"
      />
    </div>
  );
};
