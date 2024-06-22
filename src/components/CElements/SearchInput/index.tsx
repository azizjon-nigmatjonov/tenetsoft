"use client";

import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { SearchIcon } from "../IconGenerater/Icons/custom";
import { TextField } from "@mui/material";
import "./style.scss";

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
    handleChange(search);
  }, delay);

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div
      className={`relative bg-[var(--black20)] rounded-[8px] flex justify-center items-center h-[40px] px-5 pl-12 csearchinput`}
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-3">
        <SearchIcon />
      </div>
      <TextField
        size="small"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          debounce(e.target.value);
        }}
        type="text"
        className={classes}
      />
    </div>
  );
};

export default SearchInput;
