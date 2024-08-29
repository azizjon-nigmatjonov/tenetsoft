"use client";

import { useTranslation } from "react-i18next";

export const Reputation = () => {
  const { t } = useTranslation("common");
  return (
    <div className="container" id="reputation">
      <h2 className="section-title lg:px-20">{t("our_reputation")}</h2>

      <div className="grid md:grid-cols-3 gap-5 md:gap-8 mt-10 lg:px-20 mb-20">
        <div className="border border-[var(--border)] p-5 rounded-[12px]">
          <img src="/images/service.svg" alt="service" className="h-[50px]" />
          <h4 className="text-2xl font-semibold py-2">{t("best_Services")}</h4>
          <p className="text-[var(--black)] text-sm leading-6">
            {t("we_appreciate_client_money")}
          </p>
        </div>

        <div className="border border-[var(--border)] p-5 rounded-[12px]">
          <img src="/images/teams.jpg" alt="teams" className="h-[50px]" />
          <h4 className="text-2xl font-semibold py-2">{t("best_Teams")}</h4>
          <p className="text-[var(--black)] text-sm leading-6">
            {t("our_team_dedicated")}
          </p>
        </div>

        <div className="border border-[var(--border)] p-5 rounded-[12px]">
          <img src="/images/search.svg" alt="service" className="h-[50px]" />
          <h4 className="text-2xl font-semibold py-2">{t("Best_Research")}</h4>
          <p className="text-[var(--black)] text-sm leading-6">
            {t("Research_Prototyping")}
          </p>
        </div>
      </div>
    </div>
  );
};
