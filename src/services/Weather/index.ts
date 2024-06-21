import { ApiKey } from "@/contants/website";
import { request } from "../../utils/request";

interface getWeatherProps {
  q: string;
}

const weatherService = {
  getWeatherData: (params: getWeatherProps) =>
    request.get(`/data/2.5/forecast?appid=${ApiKey}`, { params }),
};

export default weatherService;
