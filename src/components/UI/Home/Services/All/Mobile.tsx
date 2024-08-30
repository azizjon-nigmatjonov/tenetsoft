import { useTranslation } from "react-i18next";

export const MobileDevelopement = () => {
  const { t } = useTranslation("services");
  return (
    <div>
      <h3 className="section-title">{t("mobile_developement")}</h3>
      <div className="grid grid-cols-2">
        <p className="text-lg mt-10 leading-[35px]">{t("we_build_mobile")}</p>
      </div>
    </div>
  );
};
