import { useTranslation } from "react-i18next";
import { InstagramIcon, TwitterIcon, YoutubeIcon } from "../Icons";
import { Form } from "./Form";

export const ContactUI = ({ ContactRef }: { ContactRef: any }) => {
  const { t } = useTranslation("common");
  return (
    <div id="contact" ref={ContactRef}>
      {/* <h2 className="section-title mt-20 lg:px-20 mb-10">our Contacts</h2> */}
      <div className="container">
        <div className="lg:px-20">
          <div className="flex justify-center py-5 md:py-20 items-center md:space-x-20 flex-col md:flex-row px-[22px] lg:px-40 bg-[var(--main)] rounded-[32px]">
            <div className="md:w-1/2 border border-[var(--border)] rounded-[12px] p-8 bg-white">
              <p
                className="text-2xl font-bold mb-2"
                dangerouslySetInnerHTML={{ __html: t("Do You Have An Idea") }}
              ></p>
              <p className="mb-5 font-medium text-lg">{t("Leave us your")}</p>
              <Form />
            </div>

            <div className="text-white space-y-5 md:w-1/2 mt-10">
              <a
                href="https://yandex.com/maps/org/impact_technology_hub/93011054396/?ll=69.231838%2C41.271773&z=17"
                className="flex space-x-2 items-start"
              >
                <img
                  className="w-[24px]"
                  src="/svg/location.svg"
                  alt="location"
                />
                <p>{t("Impact Technology Hub")}</p>
              </a>
              <a href="tel:+998901856398" className="flex space-x-2">
                <img className="w-[24px]" src="/svg/phone.svg" alt="phone" />
                <p>+998 90 185 63 98</p>
              </a>
              <a href="mailto:tenetsoftuz@gmail.com" className="flex space-x-2">
                <img className="w-[24px]" src="/svg/email.svg" alt="email" />
                <p>tenetsoftuz@gmail.com</p>
              </a>
              <a href="https://t.me/tenetsoft_admin" className="flex space-x-2">
                <img
                  className="w-[24px]"
                  src="/svg/telegram.svg"
                  alt="telegram"
                />
                <span>t.me/tenetsoft_admin</span>
              </a>
              <ul className="flex space-x-5">
                <li className="hover:scale-[1.1] duration-200">
                  <a href="https://www.instagram.com/tenetsoft.uz/">
                    <InstagramIcon width={24} fill="white" />
                  </a>
                </li>
                <li className="hover:scale-[1.1] duration-200">
                  <a href="https://www.youtube.com/@tenet_soft">
                    <YoutubeIcon width={24} fill="white" />
                  </a>
                </li>
                <li className="hover:scale-[1.1] duration-200">
                  <a href="https://x.com/tenet_soft">
                    <TwitterIcon width={24} fill="white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
