import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import UZ from "./public/locales/uz/common.json";
import RU from "./public/locales/ru/common.json";
import EN from "./public/locales/en/common.json";

const resources = {
  ru: RU,
  uz: UZ,
  en: EN,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uz",
    saveMissing: true,
    react: { useSuspense: false },
  });

export default i18n;
