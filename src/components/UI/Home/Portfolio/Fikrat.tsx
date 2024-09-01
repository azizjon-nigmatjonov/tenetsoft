import { useTranslation } from "react-i18next";
import { AdminPanelIcon, VideoCameraIcon } from "../../IconPicker/Icons";
import { DesktopIcon, WebIcon } from "../../Icons";

export const FikratPlatform = ({ element }: { element: any }) => {
  const { t } = useTranslation("portfolio");
  return (
    <div className="grid lg:grid-cols-2 gap-10 sm:gap-20">
      <div>
        <img
          className="rounded-[32px] md:scale-[1.3]"
          src={element?.image}
          alt={element?.name ?? element?.image}
        />
      </div>
      <div>
        <h3 className="service-title" style={{ color: "#ffb800" }}>
          fikrat.online
        </h3>
        <div className="bg-[#ffb80019] rounded-full px-4 py-2 inline-flex space-x-3 mt-5">
          <VideoCameraIcon />
          <p className="text-[#ffb800]">{t("videostreaming")}</p>
        </div>
        <p className="sm:text-xl mt-5 sm:mt-8 leading-[30px] sm:leading-[35px] font-medium">
          {t("video_platform_text")}.
        </p>
        <h3 className="text-2xl text-[var(--black)] font-semibold mt-10">
          {t("we_developed")}:
        </h3>
        <div className="grid sm:grid-cols-3 gap-5 mt-5">
          <div className="w-full card-shadow rounded-[8px] p-4">
            <WebIcon />
            <h3 className="font-semibold mt-3 text-[var(--primary)]">
              {t("website")}
            </h3>
          </div>
          <div className="w-full card-shadow rounded-[8px] p-4">
            <DesktopIcon />
            <h3 className="font-semibold mt-3 text-[var(--primary)]">
              {t("web_design")}
            </h3>
          </div>
          <div className="w-full card-shadow rounded-[8px] p-4">
            <AdminPanelIcon />
            <h3 className="font-semibold mt-3 text-[var(--primary)]">
              {t("admin_panel")}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
