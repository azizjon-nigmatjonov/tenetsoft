import { UXIcon } from "@/components/UI/IconPicker/Icons";
import { AutoTest, BuildTestIcon } from "@/components/UI/Icons";
import { useTranslation } from "react-i18next";

export const StartUpdDevelopement = ({ element = {} }: { element: any }) => {
  const { t } = useTranslation("services");

  return (
    <div className="pb-20 sm:py-20">
      <h3
        className="service-title"
        dangerouslySetInnerHTML={{ __html: t("start_up_mvp") }}
      ></h3>
      <div className="grid lg:grid-cols-2 sm:gap-20 mt-10">
        <div>
          <img
            className="scale-[1.1] md:scale-[1.3]"
            src={element.image}
            alt="mobile service"
          />
        </div>
        <div>
          <p className="sm:text-xl mt-5 sm:mt-10 leading-[30px] sm:leading-[35px] sm:pr-20">
            {t("start_up_suppport")}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-10">
            <div className="w-full card-shadow rounded-[8px] p-4 bg-white">
              <UXIcon />
              <h3 className="font-semibold mt-3 text-[var(--primary)]">{t("analayze")}</h3>
            </div>
            <div className="w-full card-shadow rounded-[8px] p-4 bg-white">
              <BuildTestIcon />
              <h3 className="font-semibold mt-3 text-[var(--primary)]">{t("build_test")}</h3>
            </div>
            <div className="w-full card-shadow rounded-[8px] p-4 bg-white">
              <AutoTest />
              <h3 className="font-semibold mt-3 text-[var(--primary)]">{t("find_investment")}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
