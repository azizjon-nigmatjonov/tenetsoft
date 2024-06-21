import { Card, TodayCard } from "./Card";
import { DaysData } from "./Logic";

interface Props {
  grouped: {};
}

export const Days = ({ grouped = [] }: Props) => {
  const { covertToString } = DaysData();
  const newList = covertToString(grouped);

  return (
    <div className="flex items-center mt-10 w-full">
      <div className="w-[400px]">
        {newList?.splice(0, 1)?.map(([key, value]: any) => (
          <TodayCard key={key} title={key} element={value[value.length - 1]} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-x-5 ml-5 w-full">
        {newList?.splice(1)?.map(([key, value]: any) => (
          <Card key={key} title={key} element={value[value.length - 1]} />
        ))}
      </div>
    </div>
  );
};
