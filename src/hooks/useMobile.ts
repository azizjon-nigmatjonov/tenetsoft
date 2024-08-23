import { useState, useEffect, useMemo } from "react";

export const useScreenSize = (status: string) => {
  const mobile = 768;
  const small = 540;

  const defaultWidth = useMemo(() => {
    switch (status) {
      case "mobile":
        return mobile;
      default:
        return small;
    }
  }, [mobile, status]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window) {
      setIsMobile(window.innerWidth < defaultWidth);
      window.addEventListener("resize", () => {
        setIsMobile(window.innerWidth < defaultWidth);
      });
    }
  }, [defaultWidth]);
  return isMobile;
};
