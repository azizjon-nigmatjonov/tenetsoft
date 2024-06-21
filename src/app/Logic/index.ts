"use client";

import { globalColors } from "@/contants/colors";
import { memo, useCallback, useEffect } from "react";

type GlobalColorsKeys = keyof typeof globalColors;

const SetUpGlobalColors: React.FC = memo(() => {
  const setUpColors = useCallback(() => {
    Object.keys(globalColors).forEach((key) => {
      const colorKey = key as GlobalColorsKeys;
      document.documentElement.style.setProperty(
        `--${colorKey}`,
        globalColors[colorKey]
      );
    });
  }, []);

  useEffect(() => {
    setUpColors();
  }, [setUpColors]);

  return null;
});

export default SetUpGlobalColors;
