"use client";
import { Location } from "./Location";
import { Profile } from "./Prifle";
import { Search } from "./Search";

interface Props {
  title: string | undefined;
}

const Header = ({ title }: Props) => {
  return (
    <div className="container flex justify-between items-center h-[70px]">
      <Location title={title} />
      <Search />
      <div className="hidden mobile:block">
        <Profile />
      </div>
    </div>
  );
};

export default Header;
