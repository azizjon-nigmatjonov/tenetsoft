interface Props {
  handleScroll: (val: string) => void;
}

export const Feedback = () => {
  return (
    <div className="bg-[var(--main)] text-white py-20 text-center">
      <h2 className="text-3xl md:text-[45px] font-semibold leading-[45px] md:leading-[60px]">
        NEED EXPERT FEEDBACK <br /> ON YOUR IDEA?
      </h2>
      <a className="submit-btn mt-10 inline-block" href="#contact">
        Schedule a meeting
      </a>
    </div>
  );
};
