import { Form } from "./Form";

export const ContactUI = ({ ContactRef }: { ContactRef: any }) => {
  return (
    <div className="container" ref={ContactRef}>
      <h2 className="section-title mt-20 lg:px-20 mb-10">Contact</h2>
      <div className="lg:px-20 pb-20">
        <div className="md:p-10 md:border border-[var(--border)] rounded-[12px] md:shadow-lg">
          <p className="text-xl font-semibold mb-2">Do You Have An Idea To Realize? <br /> Let’s Discuss About It! <br /></p>
          <p className="mb-5 font-medium">Leave us your contact we will reach you</p>
          <div className="flex justify-between md:space-x-20 flex-col md:flex-row">
            <div className="md:w-1/2 border border-[var(--border)] rounded-[12px] shadow-lg p-10 md:border-none md:shadow-none md:p-0">
              <Form />
            </div>

            <div className="space-y-5 md:w-1/2 mt-10 md:mt-0 border border-[var(--border)] rounded-[12px] shadow-lg p-10 md:border-none md:shadow-none md:p-0">
              <a
                href="https://yandex.com/maps/org/impact_technology_hub/93011054396/?ll=69.231838%2C41.271773&z=17"
                className="flex space-x-2 items-start"
              >
                <img
                  className="w-[24px]"
                  src="/svg/location.svg"
                  alt="location"
                />
                <p className="text-[var(--black)]">
                  Impact Technology Hub, coworking, Tashkent, Bogibuston Street,
                  186
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
                <img
                  className="w-[24px]"
                  src="/svg/telegram.svg"
                  alt="telegram"
                />
                <p className="text-[var(--black)] text-[var(--primary)]">
                  t.me/tenetsoft_admin
                </p>
              </a>
              <ul className="flex space-x-3">
                <li className="hover:scale-[1.1] duration-200">
                  <a href="https://www.instagram.com/tenetsoft.uz/">
                    <img
                      className="w-[24px]"
                      src="/svg/instagram.svg"
                      alt="instagram"
                    />
                  </a>
                </li>
                <li className="hover:scale-[1.1] duration-200">
                  <a href="https://www.youtube.com/@tenet_soft">
                    <img
                      className="w-[24px]"
                      src="/svg/youtube.svg"
                      alt="youtube"
                    />
                  </a>
                </li>
                <li className="hover:scale-[1.1] duration-200">
                  <a href="https://x.com/tenet_soft">
                    <img
                      className="w-[24px]"
                      src="/svg/twitter.svg"
                      alt="twitter"
                    />
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
