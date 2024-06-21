"use client";
import { Location } from "./Location";
import { Profile } from "./Prifle";
import { Search } from "./Search";

interface Props {
  title: string | undefined;
}

const Header = ({ title }: Props) => {
  return (
    <div className="container grid grid-cols-3 items-center h-[70px]">
      <Location title={title} />
      <Search />
      <Profile />
    </div>
  );
};

export default Header;
