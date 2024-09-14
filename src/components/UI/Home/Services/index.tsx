"use client";

import { useTranslation } from "react-i18next";
import {
  CodeIcon,
  CrmIcon,
  DesktopIcon,
  PhoneIcon,
  UxIcon,
  WebIcon,
} from "../../Icons";

export const Services = () => {
  const { t } = useTranslation("common");
  return (
    <div className="container">
      <h2 className="section-title mt-5" id="services">
        {t("Our Services")}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 sm:p-8 mt-10 pb-20 capitalize">
        <div className="rounded-[12px] card-shadow flex flex-col space-y-3 p-4 sm:p-8">
          <WebIcon />
          <h5 className="md:text-2xl font-semibold mt-3">
            {t("Web Developement")}
          </h5>
        </div>

        <div className="rounded-[12px] card-shadow flex flex-col space-y-3 p-4 sm:p-8">
          <CrmIcon />
          <h5 className="md:text-2xl font-semibold mt-3">
            {t("ERP/CRM Development")}
          </h5>
        </div>

        <div className="rounded-[12px] card-shadow flex flex-col space-y-3 p-4 sm:p-8">
          <PhoneIcon />
          <h5 className="md:text-2xl font-semibold mt-3">
            {t("Mobile developement")}
          </h5>
        </div>

        <div className="rounded-[12px] card-shadow flex flex-col space-y-3 p-4 sm:p-8">
          <UxIcon />
          <h5 className="md:text-2xl font-semibold">{t("UX/UI Design")}</h5>
        </div>

        <div className="rounded-[12px] card-shadow flex flex-col space-y-3 p-4 sm:p-8">
          <CodeIcon />
          <h5 className="md:text-2xl font-semibold">{t("MVP For Startups")}</h5>
        </div>

        <div className="rounded-[12px] card-shadow flex flex-col space-y-3 p-4 sm:p-8">
          <DesktopIcon />
          <h5 className="md:text-2xl font-semibold">{t("it_consulting")}</h5>
        </div>
      </div>
    </div>
  );
};
