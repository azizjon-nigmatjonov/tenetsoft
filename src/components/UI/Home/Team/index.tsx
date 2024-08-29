import { useTranslation } from "react-i18next";

export const Team = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-[var(--gray20)]">
      <div className="container">
        <div className="py-20 flex justify-between lg:px-20 flex-col md:flex-row">
          <div className="md:w-1/2">
            <h4 className="section-title" style={{ textAlign: "start" }}>
              {t("our_team")}
            </h4>
            <p className="mt-4 text-xl leading-10 text-[var(--black)]">
              {t("For_your_project")}
            </p>
          </div>
          <img
            className="h-[50vh] mt-10 md:mt-0"
            src="/images/team.png"
            alt="team"
          />
        </div>
      </div>
    </div>
  );
};
