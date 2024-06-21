"use client";
import { useSearchHistory } from "@/store/history";
import Header from "../Header";
import { Days } from "./Days";
import HistoryUI from "./History";
import { FetchFunction } from "./Logic";
import cls from "./style.module.scss";
import { useMemo } from "react";

const HomePage = () => {
  const { weatherData, isLoading } = FetchFunction();
  const { history_list } = useSearchHistory();
  const lastData = useMemo(() => {
    if (!history_list?.length) return {};
    const data: any = [...history_list];

    return {
      ...data[data.length - 1],
      grouped: data[data.length - 1].list[0] ?? [],
    };
  }, [history_list]);

  return (
    <>
      <Header title={weatherData?.city?.name ?? lastData?.name} />
      <div className={`${cls.wrapper} container`}>
        <Days
          grouped={weatherData?.grouped ?? lastData?.grouped}
          isLoading={isLoading}
        />
      </div>
      <div className="container">
        <HistoryUI />
      </div>
    </>
  );
};

export default HomePage;
