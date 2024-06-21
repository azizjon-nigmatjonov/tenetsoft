import { GetHour } from "@/utils/getTime";
import { getCurrentImage } from "@/utils/getImage";

interface CardProps {
  title: string;
  element: {
    weather: any;
    main: { temp: number };
  };
}
export const Card = ({ title, element }: CardProps) => {
  return (
    <div className="bg-[var(--black30)] rounded-[18px]">
      <div className="border-b border-[var(--border)] px-16px py-12px uppercase flex justify-center font-medium">
        {title}
      </div>
      <div className=" px-16px py-12px flex flex-col items-center">
        <img
          src={getCurrentImage(element.weather[0]?.main)}
          alt={element.weather[0]?.main || "svg"}
        />
        <span className="text-2xl mt-10">
          {Math.round(element.main.temp - 273.15)}°C
        </span>
      </div>
    </div>
  );
};

export const TodayCard = ({ title, element }: CardProps) => {
  const currentTime = GetHour();

  return (
    <div className="rounded-[18px] overflow-hidden">
      <div className="px-16px py-12px uppercase flex justify-center bg-[var(--primary20)] text-[var(--black)] font-medium">
        {title}
        <span>{currentTime}</span>
      </div>
      <div className=" px-16px py-12px flex flex-col items-center bg-[var(--primary30)]">
        <img
          src={getCurrentImage(element.weather[0]?.main)}
          alt={element.weather[0]?.main || "svg"}
        />
        <span className="text-2xl mt-10">
          {" "}
          {Math.round(element.main.temp - 273.15)}°C
        </span>
      </div>
    </div>
  );
};
