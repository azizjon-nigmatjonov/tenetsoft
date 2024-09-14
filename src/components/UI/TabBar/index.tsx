"use client";

import { usePathname } from "next/navigation";

import {
  BasketIcon,
  CatalogIcon,
  HeartIcon,
  HomePageIcon,
  UserIcon,
} from "../Icons";

export const TabBar = () => {
  const pathname = usePathname();

  const GetColor = (str = "") => {
    return str === pathname ? "var(--black)" : "var(--grey)";
  };

  return (
    <div className="mt-24">
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[var(--border)] py-2">
        <div className="grid grid-cols-5">
          <div className="text-center flex items-center flex-col">
            <HomePageIcon fill={GetColor("/")} />
            <p className={`text-[12px] mt-1 text-[${GetColor("/")}]`}>
              Bosh sahifa
            </p>
          </div>
          <div className="text-center flex items-center flex-col">
            <CatalogIcon fill={GetColor("/catalog")} />
            <p className={`text-[12px] mt-1 text-[${GetColor("/catalog")}]`}>
              Katalog
            </p>
          </div>
          <div className="text-center flex items-center flex-col">
            <BasketIcon fill={GetColor("/basket")} />
            <p className={`text-[12px] mt-1 text-[${GetColor("/basket")}]`}>
              Savat
            </p>
          </div>
          <div className="text-center flex items-center flex-col">
            <HeartIcon fill={GetColor("/like")} />
            <p className={`text-[12px] mt-1 text-[${GetColor("/like")}]`}>
              Sevimlilar
            </p>
          </div>
          <div className="text-center flex items-center flex-col">
            <UserIcon fill={GetColor("/profile")} />
            <p className={`text-[12px] mt-1 text-[${GetColor("/profile")}]`}>
              Profil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
