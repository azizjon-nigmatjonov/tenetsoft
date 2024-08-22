export const Reputation = () => {
  return (
    <div className="container">
      <h2 className="section-title lg:px-20">Our Reputation</h2>

      <div className="grid md:grid-cols-3 gap-5 md:gap-10 mt-10 lg:px-20 mb-20">
        <div className="border border-[var(--border)] p-5 rounded-[8px]">
          <img src="/images/service.svg" alt="service" className="h-[50px]" />
          <h4 className="text-2xl font-semibold py-2">Best Services</h4>
          <p className="text-[var(--black)]">
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>

        <div className="border border-[var(--border)] p-5 rounded-[8px]">
          <img src="/images/teams.jpg" alt="teams" className="h-[50px]" />
          <h4 className="text-2xl font-semibold py-2">Best Teams</h4>
          <p className="text-[var(--black)]">
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>

        <div className="border border-[var(--border)] p-5 rounded-[8px]">
          <img src="/images/search.svg" alt="service" className="h-[50px]" />
          <h4 className="text-2xl font-semibold py-2">Best Research</h4>
          <p className="text-[var(--black)]">
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>
      </div>
    </div>
  );
};
