"use client";

interface Props {
  handleScroll: (val: string) => void;
}

const Header = ({ handleScroll = () => {} }: Props) => {
  return (
    <div className="border-b border-[var(--border)] fixed top-0 w-full bg-white">
      <div className="container flex justify-between items-center h-[70px]">
        <button>
          <img src="/images/logo-big.png" alt="logo" className="w-[170px]" />
        </button>

        <button className="submit-btn" onClick={() => handleScroll("contact")}>Contact</button>
      </div>
    </div>
  );
};

export default Header;
