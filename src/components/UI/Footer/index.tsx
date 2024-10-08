import { useTranslation } from "react-i18next";
import { InstagramIcon, TelegramIcon, TwitterIcon } from "../Icons";

export const FooterUI = () => {
  const { t } = useTranslation("common");
  return (
    <div className="border-t border-[var(--border)] mt-20">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 py-20 gap-y-14 sm:gap-x-40 text-center sm:text-left">
          <div>
            <img
              src="/images/logo-big.png"
              alt="logo"
              className="w-[170px] mx-auto sm:mx-0"
            />
            <p
              className="mt-5 md:mt-10 text-lg"
              dangerouslySetInnerHTML={{ __html: t("your_partner") }}
            ></p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mt-[-5px]">
              {t("services")}
            </h3>
            <ul className="space-y-5 text-[var(--primary)] mt-8 font-bold">
              <li>Web Developement</li>
              <li>ERP/CRM Developement</li>
              <li>Mobile Developement</li>
              <li>UX/UI Design</li>
              <li>MVP For Startups</li>
              <li>It Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mt-[-5px]">
              {t("about_us")}
            </h3>
            <ul className="space-y-5 text-[var(--primary)] mt-8 font-bold">
              <li>
                <a href="#reputation">{t("Reputation")}</a>
              </li>
              <li>
                <a href="#team">{t("Team")}</a>
              </li>
              <li>
                <a href="#service">{t("services")}</a>
              </li>
              <li>
                <a href="#values">{t("values")}</a>
              </li>
              <li>
                <a href="#contact">{t("contacts")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-[var(--primary)] border-t border-[var(--border)] py-5">
        <div className="container flex items-center justify-center md:justify-between flex-col-reverse md:flex-row text-center md:text-left">
          <p className="text-sm">{t("rights_reserved")}</p>
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
            <li>
              <a
                href="https://x.com/tenet_soft"
                target="_blank"
                className="inline-block w-[35px] h-[35px] rounded-full bg-[var(--primary50)] flex items-center justify-center"
              >
                <TwitterIcon />
              </a>
            </li>
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
