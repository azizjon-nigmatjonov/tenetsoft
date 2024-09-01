import { useTranslation } from "react-i18next";

export const OurValues = () => {
  const { t } = useTranslation("common");
  return (
    <div className="container relative">
      <img
        className="absolute z-[-1] right-[-100px] top-[-150px] w-[300px] hidden md:inline-block"
        src="https://firebasestorage.googleapis.com/v0/b/tenetsoft-64cc2.appspot.com/o/others%2FScreenshot%202024-09-01%20at%2018.51.55.png?alt=media&token=dd6c0e07-04db-4b9d-9ad7-2865d164774f"
        alt="design"
      />
      <h2 className="section-title pt-20" id="values">
        {t("our values")}
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mt-10 pb-20 relarive">
        <div className="rounded-[8px] card-shadow p-5 bg-white">
          <div className="flex items-center space-x-3">
            <img className="h-[24px]" src="/svg/speed.svg" alt="speed" />
            <h5 className="text-xl font-semibold">{t("speed")}</h5>
          </div>
          <p className="mt-3 text-sm leading-6">
            {t("We_prioritize_efficiency")}
          </p>
        </div>

        <div className="rounded-[8px] card-shadow p-5 bg-white">
          <div className="flex items-center space-x-3">
            <img className="h-[24px]" src="/images/search.svg" alt="search" />
            <h5 className="text-xl font-semibold">{t("Inovation")}</h5>
          </div>
          <p className="mt-3 text-sm leading-6">
            {t("We constantly innovate and keep moving forward.")}
          </p>
        </div>

        <div className="rounded-[8px] card-shadow p-5 bg-white">
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
