import { getCurrentImage } from "@/utils/getImage";
import { getCurrentTime } from "@/utils/getTime";

interface CardProps {
  title: string;
  element: {
    weather: any;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
    };
    wind: any;
  };
}
export const Card = ({ title, element }: CardProps) => {
  return (
    <div className="bg-[var(--black30)] rounded-[18px] h-[200px]">
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
  const currentTime = getCurrentTime();

  return (
    <div className="rounded-[18px] overflow-hidden h-[200px] bg-[var(--primary30)] ">
      <div className="px-16px py-12px uppercase flex justify-between text-[var(--black)] font-medium bg-[var(--primary20)] ">
        {title}
        <span>{currentTime}</span>
      </div>
      <div className="px-16px py-12px flex items-center justify-between text-black">
        <div>
          <span className="text-2xl">
            {Math.round(element.main.temp - 273.15)}°C
          </span>
          <ul className="text-sm mt-2">
            <li>
              <span className="text-[var(--gray20)] mr-2">Real Feel:</span>
              <span> {Math.round(element.main.feels_like - 273.15)}°C</span>
            </li>
            <li>
              <span className="text-[var(--gray20)] mr-2">Wind:</span>
              <span>{Math.round(element.wind.speed * 1.60934)} km-h</span>
            </li>
            <li>
              <span className="text-[var(--gray20)] mr-2">Pressure:</span>
              <span>{element.main.pressure} MB</span>
            </li>
            <li>
              <span className="text-[var(--gray20)] mr-2">Humidity:</span>
              <span>{element.main.humidity} %</span>
            </li>
          </ul>
        </div>

        <div>
          <img
            src={getCurrentImage(element.weather[0]?.main)}
            alt={element.weather[0]?.main || "svg"}
          />
        </div>
      </div>
    </div>
  );
};
