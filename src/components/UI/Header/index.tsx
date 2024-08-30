"use client";

import { useTranslation } from "react-i18next";
import { LangModal } from "./LangModal";
import { HumbergerMenu } from "./Menu";

const Header = () => {
  const { t } = useTranslation("common");
  return (
    <div className="border-b border-[var(--border)] fixed top-0 w-full bg-white">
      <div className="container flex justify-between items-center h-[70px] mx-0">
        <button>
          <img
            src="/images/logo-big.png"
            alt="logo"
            className="w-[120px] md:w-[170px]"
          />
        </button>

        <div className="md:hidden">
          <HumbergerMenu />
        </div>

        <ul className="space-x-14 hidden md:inline-flex md:items-center">
          <li>
            <a href="#services" className="text-[var(--black)] font-medium">
              {t("services")}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[var(--black)] font-medium">
              {t("contacts")}
            </a>
          </li>
          <li>
            <LangModal />
          </li>
          <li>
            <a href="tel:+998994912830" className="submit-btn text-sm">
              +998 (99) 491 28 30
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
