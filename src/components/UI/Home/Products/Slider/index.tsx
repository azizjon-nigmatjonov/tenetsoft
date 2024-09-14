import { CSlider } from "@/components/CElements/CSlider";
import { SectionHeader } from "@/components/UI/SectionHeader";

export const ProductSlider = () => {
  return (
    <div className="container">
      <div className="mb-2">
        <SectionHeader />
        <div className="flex overflow-scroll remove-scroll gap-x-2 mt-3">
          <CSlider />
        </div>
      </div>
    </div>
  );
};
