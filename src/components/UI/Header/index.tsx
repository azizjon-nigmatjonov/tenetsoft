"use client";

interface Props {
  handleScroll: (val: string) => void;
}

const Header = () => {
  return (
    <div className="border-b border-[var(--border)] fixed top-0 w-full bg-white">
      <div className="container flex justify-between items-center h-[70px]">
        <button>
          <img
            src="/images/logo-big.png"
            alt="logo"
            className="w-[120px] md:w-[170px]"
          />
        </button>

        <ul className="flex space-x-14">
        <li className="hidden sm:inline-block">
            <a
              href="#services"
              className="text-[var(--black)] font-medium"
            >
              Services
            </a>
          </li>
          <li className="hidden sm:inline-block">
            <a
              href="#contact"
              className="text-[var(--black)] font-medium"
            >
              Contacts
            </a>
          </li>
          <li>
            <a
              href="tel:+998901856398"
              className="submit-btn text-[11px] sm:text-sm"
            >
              +998 (90) 185 63 98
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
