// import { useTranslation } from "react-i18next";

import { CSlider } from "@/components/CElements/CSlider";

export const HomeDiscounts = () => {
  // const {t} = useTranslation("common")
  return (
    <div className="container">
      <div className="flex justify-between">
        <h2 className="section-title">Kun chegirmalari</h2>

        <div className="flex space-x-1">
          <div className="bg-[var(--main)] w-[30px] rounded-[4px] flex justify-center text-white">
            13
          </div>
          <div>:</div>
          <div className="bg-[var(--main)] w-[30px] rounded-[4px] flex justify-center text-white">
            55
          </div>
          <div>:</div>
          <div className="bg-[var(--main)] w-[30px] rounded-[4px] flex justify-center text-white">
            29
          </div>
        </div>
      </div>

      <div className="mt-5">
        <CSlider classes="discount-card" />
      </div>
      <button className="custom-btn mt-5">Barcha tovarlarni ko'rish</button>
    </div>
  );
};
