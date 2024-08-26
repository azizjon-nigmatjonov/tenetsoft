export const Services = () => {
  return (
    <div className="container">
      <h2 className="section-title pt-20 lg:px-20" id="services">Our Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mt-10 lg:mx-20 pb-20">
        <div className="rounded-[8px] border border-[var(--border)] shadow-md flex items-center justify-center flex-col py-8 px-8">
          <img className="w-[70px]" src="/images/webservice.png" alt="web" />
          <h5 className="text-xl font-semibold mt-3">Web Developement</h5>
        </div>

        <div className="rounded-[8px] border border-[var(--border)] shadow-md flex items-center justify-center flex-col py-8 px-8">
          <img className="w-[70px]" src="/images/crm.png" alt="crm" />
          <h5 className="text-xl font-semibold mt-3">ERP/CRM Development</h5>
        </div>

        <div className="rounded-[8px] border border-[var(--border)] shadow-md flex items-center justify-center flex-col py-8 px-8">
          <img className="w-[70px]" src="/images/mobile.png" alt="mobile" />
          <h5 className="text-xl font-semibold mt-3">Mobile developement</h5>
        </div>

        <div className="rounded-[8px] border border-[var(--border)] shadow-md flex items-center justify-center flex-col py-8 px-8">
          <img className="w-[70px]" src="/images/search.svg" alt="ux/ui" />
          <h5 className="text-xl font-semibold">UX/UI Design</h5>
        </div>

        <div className="rounded-[8px] border border-[var(--border)] shadow-md flex items-center justify-center flex-col py-8 px-8">
          <img className="w-[70px]" src="/images/start.png" alt="start ups" />
          <h5 className="text-xl font-semibold">MVP For Startups</h5>
        </div>

        <div className="rounded-[8px] border border-[var(--border)] shadow-md flex items-center justify-center flex-col py-8 px-8">
          <img className="w-[70px]" src="/images/it.webp" alt="it" />
          <h5 className="text-xl font-semibold">IT Consulting</h5>
        </div>
      </div>
    </div>
  );
};
