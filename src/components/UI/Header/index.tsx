"use client";
import { HeartIcon } from "../Icons";
import { SearchBar } from "./SearchBar";

const Header = () => {
  return (
    <div className="container flex items-center items-center h-[60px] space-x-3 mx-0">
      <div className="w-full">
        <SearchBar />
      </div>
      <button className="w-[30px] flex justify-end">
        <HeartIcon fill="var(--black)" />   
      </button>
    </div>
  );
};

export default Header;
