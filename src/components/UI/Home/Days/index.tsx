import { OneSkeleton } from "@/components/CElements/Skeleton/OneSkeleton";
import { Card, TodayCard } from "./Card";
import { DaysData } from "./Logic";
import { ListSkeleton } from "@/components/CElements/Skeleton/ListSkeleton";
import Image from "next/image";

interface Props {
  grouped: {};
  isLoading: boolean;
}

export const Days = ({ grouped = [], isLoading }: Props) => {
  const { covertToString } = DaysData();
  const newList = covertToString(grouped);

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
        <Image width={150} height={150} src="/images/no-data.png" alt="no data" />
        <h3 className="mt-5">Please search for a city to get info</h3>
      </div>
    );
  }

  return (
    <div className="flex ipod:items-center mt-10 w-full flex-col ipod:flex-row mb-5">
      <div className="mobile:w-[400px]">
        {newList?.splice(0, 1)?.map(([key, value]: any) => (
          <TodayCard key={key} title={key} element={value[value.length - 1]} />
        ))}
      </div>
      <div className="grid grid-cols-2 mobile:grid-cols-4 gap-5 ipod:ml-5 mt-5 ipod:mt-0 w-full">
        {newList?.splice(1)?.map(([key, value]: any) => (
          <Card key={key} title={key} element={value[value.length - 1]} />
        ))}
      </div>
    </div>
  );
};
