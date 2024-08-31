import {
  AndroidIcon,
  AppleIcon,
  CrossPlatformIcon,
} from "@/components/UI/IconPicker/Icons";
import { CrmIcon, EcomerseIcon, ELearningIcon, EmailIcon, ListIcon, WhareHouseIcon } from "@/components/UI/Icons";
import { useTranslation } from "react-i18next";

export const ERPDevelopement = ({ element = {} }: { element: any }) => {
  const { t } = useTranslation("services");

  return (
    <div className="py-20">
      <h3
        className="service-title"
        dangerouslySetInnerHTML={{ __html: t("erp_systems") }}
      ></h3>
      <div className="grid grid-cols-2 gap-x-20 mt-10">
        <div>
          <img
            className="scale-[1.3]"
            src={element.image}
            alt="mobile service"
          />
        </div>
        <div>
          <p className="text-xl mt-10 leading-[35px] pr-20">
            {t("systems_delivery")}
          </p>

          <div className="grid grid-cols-3 gap gap-3 mt-10">
            <div className="w-full bg-[var(--primary60)] rounded-[8px] p-4">
              <CrmIcon />
              <h3 className="font-semibold mt-3">CRM</h3>
            </div>
            <div className="w-full bg-[var(--primary60)] rounded-[8px] p-4">
              <WhareHouseIcon />
              <h3 className="font-semibold mt-3">Wherehouse</h3>
            </div>
            <div className="w-full bg-[var(--primary60)] rounded-[8px] p-4">
              <ELearningIcon />
              <h3 className="font-semibold mt-3">E-Learning</h3>
            </div>
            <div className="w-full bg-[var(--primary60)] rounded-[8px] p-4">
              <EcomerseIcon />
              <h3 className="font-semibold mt-3">E-Commerce</h3>
            </div>
            <div className="w-full bg-[var(--primary60)] rounded-[8px] p-4">
              <ListIcon />
              <h3 className="font-semibold mt-3">Pos system</h3>
            </div>
            <div className="w-full bg-[var(--primary60)] rounded-[8px] p-4">
              <EmailIcon />
              <h3 className="font-semibold mt-3">Sms / Email</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
