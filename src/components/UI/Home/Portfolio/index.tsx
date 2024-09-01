import { useTranslation } from "react-i18next";
import { FikratPlatform } from "./Fikrat";
import { useEffect, useState } from "react";
import axios from "axios";
import { AbizPlatform } from "./Abiz";

export const PrortfolioSection = () => {
  const { t } = useTranslation("portfolio");
  const [data, setData]: any = useState({ isLoading: true, list: [] });
  useEffect(() => {
    axios
      .get("https://tenetsoft-64cc2-default-rtdb.firebaseio.com/portfolio.json")
      .then((res) => {
        console.log('res', res);
        
        setData({ list: res?.data, isLoading: false });
      })
      .catch(() => {
        setData({ ...data, isLoading: false });
      });
  }, []);
  
  return (
    <div className="container">
      <div className="py-10 sm:py-20">
        <h2 className="section-title pt-20" id="values">
          {t("our_clients")}
        </h2>

        <div className="space-y-40 mt-10 sm:mt-20">
          <FikratPlatform element={data.list.fikrat} />
          <AbizPlatform element={data.list.abiz} />
        </div>
      </div>
    </div>
  );
};
