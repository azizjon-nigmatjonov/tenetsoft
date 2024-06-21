"use client";

import { Card } from "./Card";
import { CityData } from "./Logic";

export const CityWrapper = ({ id = "" }) => {
  const { newList } = CityData({ id });
  console.log('newList', newList);
  
  return (
    <div className="container">
      <div className="grid grid-cols-2 mobile:grid-cols-4 ipod:grid-cols-6 gap-5 mt-10">
        {newList?.map(([key, value]: any) => (
          <Card key={key} title={key} element={value[value.length - 1]} />
        ))}
      </div>
    </div>
  );
};
