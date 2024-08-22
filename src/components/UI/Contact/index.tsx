export const ContactUI = () => {
  return (
    <div className="container">
      <h2 className="section-title mt-20 px-20">Contact</h2>
      <div className="flex justify-between px-20 mt-10 pb-20">
        <div></div>

        <div className="space-y-5">
          <a
            href="https://yandex.com/maps/org/impact_technology_hub/93011054396/?ll=69.231838%2C41.271773&z=17"
            className="flex space-x-2 items-start"
          >
            <img className="w-[24px]" src="/svg/location.svg" alt="location" />
            <p className="text-[var(--black)]">
              Impact Technology Hub, coworking, <br /> Tashkent, Bogibuston
              Street, 186
            </p>
          </a>
          <a href="tel:+998901856398" className="flex space-x-2">
            <img className="w-[24px]" src="/svg/phone.svg" alt="phone" />
            <p className="text-[var(--black)]">+998 90 185 63 98</p>
          </a>
          <a href="mailto:tenetsoftuz@gmail.com" className="flex space-x-2">
            <img className="w-[24px]" src="/svg/email.svg" alt="email" />
            <p className="text-[var(--black)]">tenetsoftuz@gmail.com</p>
          </a>
          <a href="https://t.me/tenetsoft_admin" className="flex space-x-2">
            <img className="w-[24px]" src="/svg/telegram.svg" alt="telegram" />
            <p className="text-[var(--black)] text-[var(--primary)]">
              t.me/tenetsoft_admin
            </p>
          </a>
          <ul className="flex space-x-3">
            <li className="hover:scale-[1.1] duration-200">
              <a href="https://www.instagram.com/tenetsoft.uz/">
                <img className="w-[24px]"  src="/svg/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li className="hover:scale-[1.1] duration-200">
              <a href="https://www.youtube.com/@tenet_soft">
                <img className="w-[24px]"  src="/svg/youtube.svg" alt="youtube" />
              </a>
            </li>
            <li className="hover:scale-[1.1] duration-200">
              <a href="https://x.com/tenet_soft">
                <img className="w-[24px]" src="/svg/twitter.svg" alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
