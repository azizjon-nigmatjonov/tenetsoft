import { CDriver } from "@/components/CElements/CDivider";
import { ProductGrid } from "./Grid";
import { ProductSlider } from "./Slider";

export const Products = () => {
  return (
    <div>
      <ProductGrid />
      <CDriver direction="horizantal" classes="my-3 py-1" />
      <ProductSlider />
      <CDriver direction="horizantal" classes="my-3 py-1" />
      <ProductGrid />
      <CDriver direction="horizantal" classes="my-3 py-1" />
      <ProductSlider />
      <CDriver direction="horizantal" classes="my-3 py-1" />
      <ProductGrid />
    </div>
  );
};
