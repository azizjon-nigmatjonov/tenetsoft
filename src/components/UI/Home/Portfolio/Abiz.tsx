import { useTranslation } from "react-i18next";
import { AdminPanelIcon, CrossPlatformIcon } from "../../IconPicker/Icons";
import {
  DesktopIcon,
  EcomerseIcon,
  PhoneIcon,
  WhereHouseIcon,
} from "../../Icons";

export const AbizPlatform = ({ element }: { element: any }) => {
  const { t } = useTranslation("portfolio");
  return (
    <div className="grid lg:grid-cols-2 gap-10 sm:gap-20 relative">
      <div>
        <h3 className="service-title" style={{ color: "#09B0E7" }}>
          Abiz
        </h3>
        <div className="bg-[#09B0E711] items-center rounded-full px-4 py-2 inline-flex space-x-3 mt-5">
          <EcomerseIcon width={24} fill="#09B0E7" />
          <p className="text-[#09B0E7]">E-Commerce</p>
        </div>
        <p className="sm:text-xl mt-5 sm:mt-8 leading-[30px] sm:leading-[35px] font-medium">
          {t("wholescale_platform")}.
        </p>
        <h3 className="text-2xl text-[var(--black)] font-semibold mt-10">
          {t("we_developed")}:
        </h3>
        <div className="grid sm:grid-cols-3 gap-5 mt-5">
          <div className="w-full card-shadow rounded-[8px] p-4 bg-white">
            <PhoneIcon />
            <h3 className="font-semibold mt-3 text-[var(--primary)]">
              {t("mobile_app")}
            </h3>
          </div>
          <div className="w-full card-shadow rounded-[8px] p-4 bg-white">
            <CrossPlatformIcon />
            <h3 className="font-semibold mt-3 text-[var(--primary)]">
              {t("crossplatform")}
            </h3>
          </div>
          <div className="w-full card-shadow rounded-[8px] p-4 bg-white">
            <AdminPanelIcon />
            <h3 className="font-semibold mt-3 text-[var(--primary)]">
              {t("admin_panel")}
            </h3>
          </div>
          <div className="w-full card-shadow rounded-[8px] p-4 bg-white">
            <WhereHouseIcon />
            <h3 className="font-semibold mt-3 text-[var(--primary)]">
              {t("Wherehouse")}
            </h3>
          </div>
          <div className="w-full card-shadow rounded-[8px] p-4 bg-white">
            <DesktopIcon />
            <h3 className="font-semibold mt-3 text-[var(--primary)]">
              {t("web_design")}
            </h3>
          </div>
          <div className="w-full card-shadow rounded-[8px] p-4 bg-white">
            <PhoneIcon />
            <h3 className="font-semibold mt-3 text-[var(--primary)]">
              {t("mobile_design")}
            </h3>
          </div>
        </div>
      </div>
      <div>
        <img
          className="rounded-[32px] md:scale-[1.4]"
          src={element?.image}
          alt={element?.name ?? element?.image}
        />
      </div>

      <img
        className="absolute z-[-1] left-[-100px] bottom-[-200px] w-[500px]"
        src="https://firebasestorage.googleapis.com/v0/b/tenetsoft-64cc2.appspot.com/o/others%2FScreenshot%202024-09-01%20at%2018.53.33.png?alt=media&token=2b89ce53-6a3c-41ea-b8c1-1be516b0f7be"
        alt="pattern"
      />
    </div>
  );
};
