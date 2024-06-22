"use client";

import { getDayName } from "@/utils/getDayName";
import { useMemo, useState } from "react";

export const DaysData = () => {
  const covertToString = (obj: {}) => {
    const newObj: any = {};

    Object.entries(obj).forEach(([key, value]) => {
      const newKey = getDayName(key);
      newObj[newKey] = value;
    });

    return Object.entries(newObj);
  };

  return { covertToString };
};

export const LineChartData = ({ currentData = [] }: { currentData: any }) => {
  const lineData = useMemo(() => {
    if (!currentData?.length) return {};
    const newData: any = {
      id: "",
      data: [],
    };

    newData.id = currentData[0];
    currentData[1].forEach(
      (element: { dt_txt: string; main: { temp: number } }) => {
        const obj: any = {
          x: element.dt_txt.substring(
            element.dt_txt.indexOf(" "),
            element.dt_txt.lastIndexOf(":")
          ),
          y: Math.round(element.main.temp - 273.15),
        };
        newData.data.push(obj);
      }
    );

    return [newData];
  }, [currentData]);

  return { lineData };
};
