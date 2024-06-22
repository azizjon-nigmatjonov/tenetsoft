"use client";

import { useSearchHistory } from "@/store/history";
import { getDayName } from "@/utils/getDayName";
import { useMemo } from "react";
// import { useRouter } from 'next/router';

export const DaysData = () => {
  const covertToString = (obj: {}) => {};

  return { covertToString };
};

export const CityData = ({ id = "" }) => {
  const { history_list } = useSearchHistory();

  const newList = useMemo(() => {
    if (!history_list?.length) return [];

    const found: any = history_list.find(
      (item: { name: string }) => item.name === id
    );

    if (!found) return []

    const obj = found.list[0];

    const newObj: any = {};

    Object.entries(obj).forEach(([key, value]) => {
      const newKey = getDayName(key);
      newObj[newKey] = value;
    });

    return Object.entries(newObj);
  }, [history_list, id]);

  return { newList };
};
