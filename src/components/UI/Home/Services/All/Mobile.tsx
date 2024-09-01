import { AndroidIcon, AppleIcon, CrossPlatformIcon } from "@/components/UI/IconPicker/Icons";
import { useTranslation } from "react-i18next";

export const MobileDevelopement = ({ element = {} }: { element: any }) => {
  const { t } = useTranslation("services");

  return (
    <div className="py-20">
      <h3
        className="service-title"
        dangerouslySetInnerHTML={{ __html: t("mobile_developement") }}
      ></h3>
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-20">
        <div>
          <p className="sm:text-xl mt-5 sm:mt-10 leading-[30px] sm:leading-[35px] sm:pr-20">{t("we_build_mobile")}</p>

          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            <div className="w-full card-shadow rounded-[8px] p-4">
              <AppleIcon />
              <h3 className="font-semibold mt-3 text-[var(--primary)]">iOS</h3>
            </div>
            <div className="w-full card-shadow rounded-[8px] p-4">
              <AndroidIcon />
              <h3 className="font-semibold mt-3 text-[var(--primary)]">Android</h3>
            </div>
            <div className="w-full card-shadow rounded-[8px] p-4">
              <CrossPlatformIcon />
              <h3 className="font-semibold mt-3 text-[var(--primary)]">{t("crossplatform")}</h3>
            </div>
          </div>
        </div>

        <div>
          <img className="scale-[1.1] md:scale-[1.5]" src={element.image} alt="mobile service" />
        </div>
      </div>
    </div>
  );
};
