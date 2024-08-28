"use client";

import { HumbergerMenu } from "./Menu";

const Header = () => {
  return (
    <div className="border-b border-[var(--border)] fixed top-0 w-full bg-white">
      <div className="container flex justify-between items-center h-[70px] mx-0">
        <button>
          <img
            src="/images/logo-big.png"
            alt="logo"
            className="w-[120px] md:w-[170px]"
          />
        </button>

        <div className="md:hidden">
          <HumbergerMenu />
        </div>

        <ul className="flex space-x-14 hidden md:inline-block">
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
          <li>
            <a
              href="tel:+998901856398"
              className="submit-btn text-sm"
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
