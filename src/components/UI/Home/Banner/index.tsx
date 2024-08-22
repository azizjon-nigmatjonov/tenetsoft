export const Banner = () => {
  return (
    <div className="container">
      <div className="pt-[120px] pb-[210px] flex items-center justify-between px-20">
        <div>
          <h1 className="text-[52px] font-semibold leading-[60px]">
            Building things is our mission.
          </h1>
          <button className="submit-btn mt-10">Contact us</button>
        </div>
        <div className="h-[50vh]">
          <img src="/images/web.jpg" alt="company" className="h-full" />
        </div>
      </div>
    </div>
  );
};
