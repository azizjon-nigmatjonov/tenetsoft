"use client";

export const Reputation = () => {
  return (
    <div className="container" id="reputation">
      <h2 className="section-title lg:px-20">Our Reputation</h2>

      <div className="grid md:grid-cols-3 gap-5 md:gap-8 mt-10 lg:px-20 mb-20">
        <div className="border border-[var(--border)] p-5 rounded-[12px]">
          <img src="/images/service.svg" alt="service" className="h-[50px]" />
          <h4 className="text-2xl font-semibold py-2">Best Services</h4>
          <p className="text-[var(--black)] text-sm leading-6">
            We appreciate client money, time and energy so we do our best
            service
          </p>
        </div>

        <div className="border border-[var(--border)] p-5 rounded-[12px]">
          <img src="/images/teams.jpg" alt="teams" className="h-[50px]" />
          <h4 className="text-2xl font-semibold py-2">Best Teams</h4>
          <p className="text-[var(--black)] text-sm leading-6">
            Our team is dedicated to craete inovative solutions and we are here
            to help you to build up your product
          </p>
        </div>

        <div className="border border-[var(--border)] p-5 rounded-[12px]">
          <img src="/images/search.svg" alt="service" className="h-[50px]" />
          <h4 className="text-2xl font-semibold py-2">Best Research</h4>
          <p className="text-[var(--black)] text-sm leading-6">
            Research, Prototyping, and Cutting-Edge Techniques for Perfect
            Solutions
          </p>
        </div>
      </div>
    </div>
  );
};
