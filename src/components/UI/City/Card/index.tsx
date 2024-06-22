import { getCurrentImage } from "@/utils/getImage";
import Image from "next/image";

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
      <div className="px-16px py-12px flex flex-col items-center">
        <Image
          width={44}
          height={44}
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
