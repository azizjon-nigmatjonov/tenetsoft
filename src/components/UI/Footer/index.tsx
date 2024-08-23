interface Props {
  handleScroll: (val: string) => void;
}

export const FooterUI = ({ handleScroll }: Props) => {
  return (
    <div className="border-t border-[var(--border)]">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 py-20 gap-y-14 sm:gap-x-40 lg:px-20 text-center sm:text-left">
          <div>
            <img
              src="/images/logo-big.png"
              alt="logo"
              className="w-[170px] mx-auto sm:mx-0"
            />
            <p className="mt-10 text-lg">
              Your partner in transformative IT solutions for growth and success
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mt-[-5px]">Service</h3>
            <ul className="space-y-5 text-[var(--black)] mt-8 font-bold">
              <li>Web Developement</li>
              <li>ERP/CRM Developement</li>
              <li>Mobile Developement</li>
              <li>UX/UI Design</li>
              <li>MVP For Startups</li>
              <li>It Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mt-[-5px]">About Us</h3>
            <ul className="space-y-5 text-[var(--black)] mt-8 font-bold">
              <li>
                <button>Reputation</button>
              </li>
              <li>
                <button>Team</button>
              </li>
              <li>
                <button>Services</button>
              </li>
              <li>
                <button>Values</button>
              </li>
              <li>
                <button onClick={() => handleScroll("contact")}>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[var(--main)] text-white h-[70px] flex items-center">
        <p className="container text-sm">
          TenetSoft Company © 2024. All Rights Reserved
        </p>
      </div>
    </div>
  );
};
