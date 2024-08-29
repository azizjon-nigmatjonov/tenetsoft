"use client";

import CSelect from "@/components/CElements/CSelect";
import { useLangs } from "@/hooks/useLangs";
import { useLanguageStore } from "@/store/languageStore";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const LangModal = () => {
  const { setLang, lang } = useLanguageStore();
  const { langList } = useLangs();
  const { i18n } = useTranslation("common");
  console.log('lang', lang);
  
  const changeLanguage = (val: string) => {
    setLang(val);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <CSelect
      value={lang}
      options={langList}
      handlerValue={(obj: { value: string }) => changeLanguage(obj.value)}
    />
  );
};
