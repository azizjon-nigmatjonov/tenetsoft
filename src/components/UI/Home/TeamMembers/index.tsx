import { useEffect, useState } from "react";
import { SwiperWrapper } from "../../SwiperWrapper";
import axios from "axios";
import { useTranslation } from "react-i18next";

export const TeamMembers = () => {
  const { t } = useTranslation("common");
  const [data, setData]: any = useState({ isLoading: true, list: [] });
  useEffect(() => {
    axios
      .get("https://tenetsoft-64cc2-default-rtdb.firebaseio.com/team.json")
      .then((res) => {
        setData({ list: res?.data, isLoading: false });
      })
      .catch(() => {
        setData({ ...data, isLoading: false });
      });
  }, []);

  return (
    <div id="team_members" className="container">
      <div className="pt-20">
        <h4 className="section-title mb-10" style={{ textAlign: "start" }}>
          {t("our_team")}
        </h4>
        <div>
          <SwiperWrapper swiperList={data.list} />
        </div>
      </div>
    </div>
  );
};
