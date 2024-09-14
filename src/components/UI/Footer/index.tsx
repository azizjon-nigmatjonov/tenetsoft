import { useTranslation } from "react-i18next";
import { InstagramIcon, TelegramIcon } from "../Icons";
import { ProjectName } from "@/contants/website";

export const FooterUI = () => {
  const { t } = useTranslation("common");

  return (
    <div className="mt-20">
      <div className="text-[var(--primary)] container">
        <div className="border-t border-[var(--border)] py-5 flex items-center justify-center md:justify-between flex-col-reverse md:flex-row text-center md:text-left">
          <p className="text-sm text-[var(--gray)]">
            © 2024 {ProjectName}. {t("all_rights_reserved")}
          </p>
          <ul className="mb-5 md:mb-0 flex space-x-3">
            <li>
              <a
                href="https://www.instagram.com/tenetsoft.uz/"
                target="_blank"
                className="inline-block w-[35px] h-[35px] rounded-full bg-[var(--primary50)] flex items-center justify-center"
              >
                <InstagramIcon />
              </a>
            </li>
            {/* <li>
              <a
                href="https://x.com/tenet_soft"
                target="_blank"
                className="inline-block w-[35px] h-[35px] rounded-full bg-[var(--primary50)] flex items-center justify-center"
              >
                <TwitterIcon />
              </a>
            </li> */}
            <li>
              <a
                href="https://t.me/tenetsoft"
                target="_blank"
                className="inline-block w-[35px] h-[35px] rounded-full bg-[var(--primary50)] flex items-center justify-center"
              >
                <TelegramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
