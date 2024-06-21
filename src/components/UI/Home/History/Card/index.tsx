import { getCurrentImage } from "@/utils/getImage";

interface CardProps {
  title: string;
  element: any;
}

export const Card = ({ title, element }: CardProps) => {
  return (
    <div className="bg-[var(--black30)] rounded-[18px] px-16px py-12px flex justify-between items-center">
      <div className="">
        <span>{element.country}</span>
        <h4>{title}</h4>
        <p>{element.weather}</p>
      </div>
      <div>
        <img
          src={getCurrentImage(element.weathe)}
          alt={element.weather || "svg"}
        />
      </div>
    </div>
  );
};
