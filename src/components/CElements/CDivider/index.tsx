interface Props {
  title?: string;
  classes?: string;
  column?: boolean;
  direction?: string;
}

export const CDriver = ({ title, classes, direction = "horizantal" }: Props) => {
  if (direction === "vertical") {
    return <div className={`h-[20px] w-[2px] bg-[var(--gray20)] mx-5 ${classes}`}></div>;
  }

  if (direction === "horizantal") {
    return (
      <div
        className={`flex items-center w-full ${title ? "space-x-3" : ""}`}
      >
        <div className={`w-full h-[2px] bg-[var(--grey20)] ${classes}`}></div>
        {title && (
          <span className="font-medium whitespace-nowrap">{title}</span>
        )}
        <div className={`w-full h-[2px] bg-[var(--grey20)] ${classes}`}></div>
      </div>
    );
  }
};
