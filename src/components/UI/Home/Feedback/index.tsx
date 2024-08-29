import { useTranslation } from "react-i18next";

interface Props {
  handleScroll: (val: string) => void;
}

export const Feedback = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-[var(--main)] text-white py-20 text-center">
      <h2
        className="text-3xl md:text-[45px] font-semibold leading-[45px] md:leading-[60px]"
        dangerouslySetInnerHTML={{ __html: t("NEED_EXPERT_FEEDBACK") }}
      ></h2>
      <a className="submit-btn mt-10 inline-block" href="#contact">
        {t("Schedule a meeting")}
      </a>
    </div>
  );
};
