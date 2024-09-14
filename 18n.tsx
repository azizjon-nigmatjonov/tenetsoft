import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import UZ from "./public/locales/uz/common.json";
import RU from "./public/locales/ru/common.json";

const resources = {
  ru: RU,
  uz: UZ,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uz",
    saveMissing: true,
    react: { useSuspense: true },
  });

export default i18n;
