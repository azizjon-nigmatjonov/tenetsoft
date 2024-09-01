import { AtomicIcon, DesingUIIcon, ProtoTypeIcon, UXIcon } from "@/components/UI/IconPicker/Icons";
import { DesktopIcon, PhoneIcon } from "@/components/UI/Icons";
import { useTranslation } from "react-i18next";

export const DesignDevelopement = ({ element = {} }: { element: any }) => {
  const { t } = useTranslation("services");

  return (
    <div className="py-20">
      <h3
        className="service-title"
        dangerouslySetInnerHTML={{ __html: t("UX/UI Design") }}
      ></h3>
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-20">
        <div>
          <p className="sm:text-xl mt-5 sm:mt-10 leading-[30px] sm:leading-[35px] sm:pr-20">{t("we_provide_design")}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-10">
            <div className="w-full card-shadow rounded-[8px] p-4">
              <UXIcon />
              <h3 className="font-semibold mt-3 text-[var(--primary)]">UX</h3>
            </div>
            <div className="w-full card-shadow rounded-[8px] p-4">
              <DesingUIIcon />
              <h3 className="font-semibold mt-3 text-[var(--primary)]">UI</h3>
            </div>
            <div className="w-full card-shadow rounded-[8px] p-4">
              <PhoneIcon />
              <h3 className="font-semibold mt-3 text-[var(--primary)]">{t("mobile_design")}</h3>
            </div>
            <div className="w-full card-shadow rounded-[8px] p-4">
              <DesktopIcon />
              <h3 className="font-semibold mt-3 text-[var(--primary)]">{t("web_design")}</h3>
            </div>
            <div className="w-full card-shadow rounded-[8px] p-4">
              <ProtoTypeIcon />
              <h3 className="font-semibold mt-3 text-[var(--primary)]">Prototyping</h3>
            </div>
            <div className="w-full card-shadow rounded-[8px] p-4">
              <AtomicIcon />
              <h3 className="font-semibold mt-3 text-[var(--primary)]">Atomic Design</h3>
            </div>
          </div>
        </div>

        <div>
          <img className="scale-[1.1] sm:scale-[1.5]" src={element.image} alt="mobile service" />
        </div>
      </div>
    </div>
  );
};
