import { useEffect, useState } from "react";
import { MobileDevelopement } from "./Mobile";
import axios from "axios";
import { ERPDevelopement } from "./ERP";
import { DesignDevelopement } from "./Design";
import { StartUpdDevelopement } from "./StartUp";

export const ServicesAllInOne = () => {
  const [data, setData]: any = useState({ isLoading: true, list: [] });
  useEffect(() => {
    axios
      .get("https://tenetsoft-64cc2-default-rtdb.firebaseio.com/services.json")
      .then((res) => {
        setData({ list: res?.data, isLoading: false });
      })
      .catch(() => {
        setData({ ...data, isLoading: false });
      });
  }, []); 
  
  return (
    <div className="container">
      <div className="sm:py-20">
        <MobileDevelopement element={data.list?.mobile ?? {}} />
        <ERPDevelopement element={data.list?.erp ?? {}} />
        <DesignDevelopement element={data.list?.design ?? {}} />
        <StartUpdDevelopement element={data.list?.startup ?? {}} />
      </div>
    </div>
  );
};
