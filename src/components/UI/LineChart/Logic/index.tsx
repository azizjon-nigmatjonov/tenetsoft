"use client";

import { useMemo } from "react";

export const LineChartData = ({ currentData = [] }: { currentData: any }) => {
  const lineData: any = useMemo(() => {
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
