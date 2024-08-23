export const OurValues = () => {
  return (
    <div className="container">
      <h2 className="section-title mt-20 lg:px-20">our values</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mt-10 lg:mx-20 pb-20">
        <div className="rounded-[8px] border border-[var(--border)] shadow-md p-5">
          <div className="flex items-center space-x-3">
            <img className="h-[24px]" src="/svg/speed.svg" alt="speed" />
            <h5 className="text-xl font-semibold">Speed</h5>
          </div>
          <p className="mt-3 text-sm leading-6">
            We prioritize efficiency and excellence. Partnering with funded
            startups, we help clients outpace competitors by delivering
            high-quality projects swiftly.
          </p>
        </div>

        <div className="rounded-[8px] border border-[var(--border)] shadow-md p-5">
          <div className="flex items-center space-x-3">
            <img className="h-[24px]" src="/images/search.svg" alt="search" />
            <h5 className="text-xl font-semibold">Inovation</h5>
          </div>
          <p className="mt-3 text-sm leading-6">
            We constantly innovate and keep moving forward.
          </p>
        </div>

        <div className="rounded-[8px] border border-[var(--border)] shadow-md p-5">
          <div className="flex items-center space-x-3">
            <img className="h-[24px]" src="/svg/line.svg" alt="line graph" />
            <h5 className="text-xl font-semibold">Help</h5>
          </div>
          <p className="mt-3 text-sm leading-6">
            When we collaborate with our clients, we aim to bring their ideas to
            life. We support them in developing their product and provide
            guidance when needed.
          </p>
        </div>
      </div>
    </div>
  );
};
