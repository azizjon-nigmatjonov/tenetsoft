interface Props {
  handleScroll: (val: string) => void;
}

export const Feedback = ({ handleScroll }: Props) => {
  return (
    <div className="bg-[var(--main)] text-white py-20 text-center">
      <h2 className="text-3xl md:text-[45px] font-semibold leading-[45px] md:leading-[60px]">
        NEED EXPERT FEEDBACK <br /> ON YOUR IDEA?
      </h2>
      <button
        className="submit-btn mt-10"
        onClick={() => handleScroll("contact")}
      >
        Shedule a meeting
      </button>
    </div>
  );
};
