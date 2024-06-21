"use client";

import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { SearchIcon } from "../IconGenerater/Icons/custom";

interface Props {
  delay?: number;
  classes?: string;
  defaultValue?: string | number;
  handleChange: (val: string) => void;
}

const SearchInput = ({
  delay = 500,
  classes = "",
  defaultValue = "",
  handleChange = () => {},
}: Props) => {
  const [value, setValue] = useState<any>(null);

  const debounce = useDebounce((search: string) => {
    setValue(search);
    handleChange(search);
  }, delay);

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div
      className={`relative bg-[var(--black20)] rounded-[8px] flex justify-center items-center h-[40px] px-5`}
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-3">
        <SearchIcon />
      </div>
      <input
        onChange={(e) => debounce(e.target.value)}
        defaultValue={defaultValue}
        type="text"
        placeholder="Qidiruv..."
        className={`w-full bg-transparent h-full outline-none pl-5 pr-5 rounded-[8px] ${classes}`}
      />
    </div>
  );
};

export default SearchInput;
