"use client";
import Header from "../Header";
import { Days } from "./Days";
import { FetchFunction } from "./Logic";
import cls from "./style.module.scss";
const HomePage = () => {
  const { weatherData, isLoading } = FetchFunction();

  return (
    <>
      <Header title={weatherData?.city?.name} />
      <div className={`${cls.wrapper} container`}>
        <Days grouped={weatherData?.grouped ?? []} />
      </div>
    </>
  );
};

export default HomePage;
