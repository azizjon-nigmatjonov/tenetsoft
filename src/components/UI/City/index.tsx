"use client";

import { useState } from "react";
import LineChart from "../LineChart";
import { Card } from "./Card";
import { CityData } from "./Logic";

export const CityWrapper = ({ id = "" }) => {
  const { newList } = CityData({ id });
  const [currentData, setCurrentData]: any = useState([]);

  return (
    <div className="container">
      <div className="grid grid-cols-2 mobile:grid-cols-4 ipod:grid-cols-6 gap-5 mt-10">
        {newList?.map(([key, value]: any) => (
          <div key={key} onClick={() => setCurrentData([key, value])}>
            <Card  title={key} element={value[value.length - 1]} />
          </div>
        ))}
      </div>
      <LineChart data={currentData?.length ? currentData : newList?.[0]} />
    </div>
  );
};
