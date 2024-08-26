export const OurStaff = () => {
  return (
    <div className="container">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 lg:mx-20 py-20" id="team">
        <div className="rounded-[24px] bg-[var(--lightGray)] p-5">
          <img className="h-[24px]" src="/svg/speed.svg" alt="speed" />
          <h5 className="text-xl font-semibold text-[var(--black)]">Azizjon Nigmatjonov</h5>
          <p className="mt-3 text-sm leading-6">
            We prioritize efficiency and excellence. Partnering with funded
            startups, we help clients outpace competitors by delivering
            high-quality projects swiftly.
          </p>
        </div>
      </div>
    </div>
  );
};
