"use client";

import { useTranslation } from "react-i18next";

interface Props {
  handleScroll: (val: string) => void;
}

export const Banner = ({ handleScroll }: Props) => {
  const { t } = useTranslation("common");

  return (
    <div className="container">
      <div className="pt-[150px] md:pt-[190px] pb-[170px] md:pb-[210px] flex items-center md:justify-between flex-col md:flex-row text-center sm:text-left">
        <div>
          <img width={400} src="/images/logo-big.png" alt="logo" />
          <h1 className="mt-20 text-[55px] text-[var(--main)] font-semibold leading-[60px]">
            {t("it_outsource_company")}
          </h1>
          <h2
            className="text-3xl mt-3 text-[var(--primary)] leading-[45px]"
            dangerouslySetInnerHTML={{ __html: t("your_partner") }}
          ></h2>
          <div className="mt-20 flex space-x-8">
            <button
              className="submit-btn font-medium sm:text-2xl"
              onClick={() => handleScroll("contact")}
            >
              {t("contact_us")}
            </button>
            <button
              className="default-btn font-medium sm:text-2xl"
              onClick={() => handleScroll("contact")}
            >
              {t("services")}
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src="/images/web.jpg" alt="company" className="h-full" />
        </div>
      </div>
    </div>
  );
};
