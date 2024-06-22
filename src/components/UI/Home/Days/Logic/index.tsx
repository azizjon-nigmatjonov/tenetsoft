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