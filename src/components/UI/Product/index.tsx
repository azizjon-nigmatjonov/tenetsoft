interface Props {
  classes?: string;
  element?: { image?: string };
}

export const ProductUI = ({ classes = "", element = {} }: Props) => {
  return (
    <div className="w-full">
      <div
        className={`rounded-[12px] bg-[var(--gray20)] overflow-hidden ${classes}`}
      >
        <img
          className="w-full h-full"
          src={
            element.image ||
            "https://images.uzum.uz/cqvf2p5bntafgos2ekd0/t_product_540_high.jpg#1726211279151"
          }
          alt="https://images.uzum.uz/cqvf2p5bntafgos2ekd0/t_product_540_high.jpg#1726211279151"
        />
      </div>
      <div className="mt-2">
        <p className="line-through text-[12px] font-medium text-[var(--grey)] text-esm">
          350 000 so'm
        </p>
        <p className="text-sm font-medium">85 000 so'm</p>
      </div>
    </div>
  );
};
