"use client";

import { getCurrentImage } from "@/utils/getImage";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  element: any;
}

export const Card = ({ title, element }: CardProps) => {
  return (
    <Link href={`/city/${title}`}>
      <div className="bg-[var(--black30)] rounded-[18px] px-16px py-12px flex justify-between items-center cursor-pointer">
        <div className="space-y-2">
          <span className="font-thin">{element.country}</span>
          <h4 className="text-lg font-medium">{title}</h4>
          <p className="text-sm">{element.weather}</p>
        </div>
        <div>
          <Image
            width={70}
            height={70}
            src={getCurrentImage(element.weathe)}
            alt={element.weather || "svg"}
          />
        </div>
      </div>
    </Link>
  );
};
