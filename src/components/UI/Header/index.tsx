"use client";
import { ReactNode } from "react";
import { Location } from "./Location";
import { Profile } from "./Prifle";
import { Search } from "./Search";

interface Props {
  title: string | undefined;
  search?: boolean;
  children?: ReactNode;
}

const Header = ({ title, search = true, children }: Props) => {
  return (
    <div className="container flex justify-between items-center h-[70px]">
      <div className="flex items-center space-x-5">
        <Location title={title} />
        {children}
      </div>
      {search && <Search />}
      <div className="hidden mobile:block">
        <Profile />
      </div>
    </div>
  );
};

export default Header;
