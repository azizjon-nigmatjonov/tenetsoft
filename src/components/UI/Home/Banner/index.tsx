export const Banner = () => {
  return (
    <div className="container">
      <div className="pt-[190px] pb-[210px] flex items-center justify-between px-20">
        <div>
          <h1 className="text-[45px] font-semibold leading-[60px]">
            IT-Outsourcing Company
          </h1>
          <h2 className="text-3xl mt-2">Building things is our mission.</h2>
          <button className="submit-btn mt-10 text-2xl">Contact Us</button>
        </div>
        <div className="h-[50vh]">
          <img src="/images/web.jpg" alt="company" className="h-full" />
        </div>
      </div>
    </div>
  );
};
