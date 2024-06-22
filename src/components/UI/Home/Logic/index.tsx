"use client";
import weatherService from "@/services/Weather";
import { useSearchHistory } from "@/store/history";
import { useSearch } from "@/store/search";
import { useCallback, useMemo } from "react";
import { UseQueryResult, useQuery } from "react-query";

export const FetchFunction = () => {
  const { search } = useSearch();
  const { history_list, setHistoryList } = useSearchHistory();

  const { data: weatherData, isLoading }: UseQueryResult<any, Error> = useQuery(
    ["GET_WEATHER_DATA", search],
    () => {
      return weatherService.getWeatherData({ q: search });
    },
    {
      enabled: !!search,
    }
  );

  const storeList = useCallback((obj: {}, weather: any) => {
    let newData = {
      name: weather.city.name,
      country: weather.city.country,
      weather: weather.list[0].weather[0].main,
      list: [obj],
    };

    let oldArr: any = [...history_list];

    if (oldArr?.length > 0) {
      const found: any = oldArr.find(
        (item: { name: string }) => item.name === newData.name
      );

      if (found?.name) {
        oldArr = oldArr.filter(
          (item: { name: string }) => item.name !== newData.name
        );
        oldArr.push(newData);
        setHistoryList(oldArr);
      } else {
        if (oldArr?.length < 5) {
          setHistoryList([...oldArr, newData]);
        } else {
          oldArr = oldArr.splice(1);
          setHistoryList([...oldArr, newData]);
        }
      }
    } else {
      setHistoryList([newData]);
    }
  }, [history_list, setHistoryList]);

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
    storeList(grouped, weatherData);
    return {
      ...weatherData,
      grouped,
    };
  }, [weatherData, storeList]);

  const lastData = useMemo(() => {
    if (weatherData?.grouped || search) return {};

    if (!history_list?.length) return {};
    const data: any = [...history_list];

    return {
      ...data[data.length - 1],
      grouped: data[data.length - 1].list[0] ?? [],
    };
  }, [history_list, weatherData, search]);

  return { weatherData: weather, isLoading, lastData };
};
