import { useTranslation } from "react-i18next";

export const OurValues = () => {
  const { t } = useTranslation("common");
  return (
    <div className="container">
      <h2 className="section-title pt-20" id="values">
        {t("our values")}
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mt-10 pb-20">
        <div className="rounded-[8px] border border-[var(--border)] shadow-md p-5">
          <div className="flex items-center space-x-3">
            <img className="h-[24px]" src="/svg/speed.svg" alt="speed" />
            <h5 className="text-xl font-semibold">{t("speed")}</h5>
          </div>
          <p className="mt-3 text-sm leading-6">
            {t("We_prioritize_efficiency")}
          </p>
        </div>

        <div className="rounded-[8px] border border-[var(--border)] shadow-md p-5">
          <div className="flex items-center space-x-3">
            <img className="h-[24px]" src="/images/search.svg" alt="search" />
            <h5 className="text-xl font-semibold">{t("Inovation")}</h5>
          </div>
          <p className="mt-3 text-sm leading-6">
            {t("We constantly innovate and keep moving forward.")}
          </p>
        </div>

        <div className="rounded-[8px] border border-[var(--border)] shadow-md p-5">
          <div className="flex items-center space-x-3">
            <img className="h-[24px]" src="/svg/line.svg" alt="line graph" />
            <h5 className="text-xl font-semibold">{t("help")}</h5>
          </div>
          <p className="mt-3 text-sm leading-6">{t("when we collaborate")}</p>
        </div>
      </div>
    </div>
  );
};
