"use client"
import { Location } from "./Location";
import { Profile } from "./Prifle";
import { Search } from "./Search";

const Header = () => {
  return (
    <div className="container flex justify-between items-center h-[70px]">
      <Location />
      <Search />
      <Profile />
    </div>
  );
};

export default Header;
