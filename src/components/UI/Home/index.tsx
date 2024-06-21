"use client";
import Header from "../Header";
import { Days } from "./Days";
import HistoryUI from "./History";
import { FetchFunction } from "./Logic";
import cls from "./style.module.scss";

const HomePage = () => {
  const { weatherData, isLoading, lastData } = FetchFunction();
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
