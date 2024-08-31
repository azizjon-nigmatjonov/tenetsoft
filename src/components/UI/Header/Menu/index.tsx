"use client";

import { CloseOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { InstagramIcon, TelegramIcon, TwitterIcon } from "../../Icons";
import { useTranslation } from "react-i18next";
export const HumbergerMenu = () => {
  // const { i18n } = useTranslation("common");
  const [open, setOpen] = useState(false);

  // const changeLang = (val: string) => {
  //   i18n.changeLanguage(val);
  // };

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <MenuIcon style={{ color: "var(--main)" }} />
      </button>

      <div
        className={`w-full h-[100vh] fixed top-0 bg-[var(--primary20)] duration-200 px-[22px] ${
          open ? "right-0" : "right-[-100vw]"
        }`}
      >
        <div className="py-5 flex justify-between items-center">
          <div>
            <img width={140} src="/svg/logo-menu.png" alt="logo" />
          </div>
          <button onClick={() => setOpen(false)}>
            <CloseOutlined />
          </button>
        </div>

        <div>
          <ul className="flex flex-col items-center my-20 text-3xl space-y-5">
            <li>
              <a href="#services" className="text-[var(--black)] font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-[var(--black)] font-medium">
                Contacts
              </a>
            </li>
            <li className="flex space-x-3">
              <div>
                {/* <button
                  onClick={() => changeLang("uz")}
                  className={`text-[var(--gray)] ${
                    i18n.language === "uz" ? "text-[var(--black)]" : ""
                  }`}
                >
                  UZ
                </button>
                <button
                  onClick={() => changeLang("ru")}
                  className={
                    i18n.language === "ru"
                      ? "text-[var(--black)]"
                      : "text-[var(--gray)]"
                  }
                >
                  RU
                </button>
                <button
                  onClick={() => changeLang("en")}
                  className={
                    i18n.language === "en"
                      ? "text-[var(--black)]"
                      : "text-[var(--gray)]"
                  }
                >
                  EN
                </button> */}
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <a href="tel:+998901856398" className="submit-btn text-sm">
            +998 (99) 491 28 30
          </a>

          <ul className="mb-5 md:mb-0 flex space-x-3 mt-5">
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
    </>
  );
};
