"use client";

const Header = () => {
  return (
    <div className="border-b border-[var(--border)] fixed top-0 w-full bg-white">
      <div className="container flex justify-between items-center h-[70px]">
        <button>
          <img src="/svg/logo.png" alt="logo" />
        </button>

        <button className="submit-btn">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
