import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

export const Reputation = () => {
  return (
    <div className="container">
      <h2 className="section-title">Our Reputation</h2>

      <div className="grid grid-cols-3 gap-x-10 mt-10 px-20 mb-20">
        <div className="border border-[var(--border)] p-5 rounded-[4px]">
          <MiscellaneousServicesIcon
            style={{ fontSize: "50px", color: "var(--primary)" }}
          />
          <h4 className="text-2xl font-semibold py-2">Best Services</h4>
          <p className="text-[var(--black)]">
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>

        <div className="border border-[var(--border)] p-5 rounded-[4px]">
          <MiscellaneousServicesIcon
            style={{ fontSize: "50px", color: "var(--primary)" }}
          />
          <h4 className="text-2xl font-semibold py-2">Best Teams</h4>
          <p className="text-[var(--black)]">
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>

        <div className="border border-[var(--border)] p-5 rounded-[4px]">
          <MiscellaneousServicesIcon
            style={{ fontSize: "50px", color: "var(--primary)" }}
          />
          <h4 className="text-2xl font-semibold py-2">Best Research</h4>
          <p className="text-[var(--black)]">
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>
      </div>
    </div>
  );
};
