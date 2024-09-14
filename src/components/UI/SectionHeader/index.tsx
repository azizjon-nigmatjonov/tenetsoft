import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const SectionHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="section-title">Divanlar</h2>

      <button className="flex">
        <span>hammasini ko'rish</span>

        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
};
