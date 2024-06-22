"use client";

import { OneSkeleton } from "@/components/CElements/Skeleton/OneSkeleton";
import { Card, TodayCard } from "./Card";
import { DaysData } from "./Logic";
import Image from "next/image";
import LineChart from "../../LineChart";
import { useState } from "react";

interface Props {
  grouped: {};
  isLoading: boolean;
}

export const Days = ({ grouped = [], isLoading }: Props) => {
  const { covertToString } = DaysData();
  const newList = covertToString(grouped);
  const [currentData, setCurrentData]: any = useState([]);

  if (isLoading) {
    return (
      <div className="flex items-center mt-10 w-full">
        <div className="w-[400px]">
          <OneSkeleton height={200} />
        </div>
        <div className="w-full ml-5">
          <OneSkeleton height={200} />
        </div>
      </div>
    );
  }

  if (!newList?.length) {
    return (
      <div className="h-[200px] flex flex-col items-center mt-10">
        <Image width={150} height={150} src="/images/cloud.png" alt="no data" />
        <h3 className="mt-5">Please search for a city to get info</h3>
      </div>
    );
  }

  return (
    <div className="flex ipod:items-center mt-10 w-full flex-col ipod:flex-row mb-5">
      <div className="ipod:hidden">
        <LineChart data={currentData?.length ? currentData : newList?.[0]} />
      </div>
      <div className="mt-5 ipod:mt-0">
        {newList?.splice(0, 1)?.map(([key, value]: any) => (
          <div
            key={key}
            onClick={() => setCurrentData([key, value])}
            className="cursor-pointer mobile:w-[260px]"
          >
            <TodayCard title={key} element={value[0]} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 mobile:grid-cols-4 gap-5 ipod:ml-5 mt-5 ipod:mt-0 w-full">
        {newList?.splice(1)?.map(([key, value]: any) => (
          <div
            key={key}
            onClick={() => setCurrentData([key, value])}
            className="cursor-pointer"
          >
            <Card title={key} element={value[0]} />
          </div>
        ))}
      </div>
      <div className="hidden ipod:block">
        <LineChart data={currentData?.length ? currentData : newList?.[0]} />
      </div>
    </div>
  );
};
