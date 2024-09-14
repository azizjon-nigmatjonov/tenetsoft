import { ProductUI } from "@/components/UI/Product";

interface Props {
  classes?: string
}

export const CSlider = ({ classes = "card" }: Props) => {
  return (
    <div className="flex space-x-3 overflow-x-scroll remove-scroll">
      <ProductUI classes={classes} />
      <ProductUI classes={classes} />
      <ProductUI classes={classes} />
      <ProductUI classes={classes} />
      <ProductUI classes={classes} />
      <ProductUI classes={classes} />
    </div>
  );
};
