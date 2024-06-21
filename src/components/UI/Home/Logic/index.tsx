"use client";
import weatherService from "@/services/Weather";
import { useMemo } from "react";
import { UseQueryResult, useQuery } from "react-query";

export const FetchFunction = () => {
  const { data: weatherData, isLoading }: UseQueryResult<any, Error> = useQuery(
    ["GET_WEATHER_DATA"],
    () => {
      return weatherService.getWeatherData({ q: "Tashkent" });
    }
  );

  const weather = useMemo(() => {
    const grouped: { [key: string]: any[] } = {};
    if (!weatherData) return;
    weatherData?.list?.forEach((element: { dt_txt: string }) => {
      const date = element.dt_txt.substring(0, element.dt_txt.indexOf(" "));
      if (date in grouped) {
        grouped[date].push(element);
      } else {
        grouped[date] = [];
      }
    });

    return {
      ...weatherData,
      grouped,
    };
  }, [weatherData]);

  return { weatherData: weather, isLoading };
};
