import { useTranslation } from "react-i18next";

export const HomeCategories = () => {
  const { t } = useTranslation("common");
  return (
    <div className="container">
      <ul className="mt-5 flex overflow-x-scroll remove-scroll text-center">
        <li className="min-w-[50px] mr-4 inline-flex flex-col items-center cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-[12px] flex items-center justify-center border border-[var(--border)] overflow-hidden">
            <img
              className="w-full h-full"
              src="https://frankfurt.apollo.olxcdn.com/v1/files/29mxpfkl9emi2-UZ/image;s=1080x898"
              alt="category"
            />

          </div>
          <h3 className="text-[12px] mt-2 leading-[14px]">{t("mebel")}</h3>
        </li>
        <li className="min-w-[90px] inline-flex flex-col items-center cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-[12px] flex items-center justify-center border border-[var(--border)] overflow-hidden">
            <img
              className="w-full h-full"
              src="https://frankfurt.apollo.olxcdn.com/v1/files/29mxpfkl9emi2-UZ/image;s=1080x898"
              alt="category"
            />

          </div>
          <h3 className="text-[12px] mt-2 leading-[14px]">{t("Tovar yetkazib berish")}</h3>
        </li>
        <li className="min-w-[90px] inline-flex flex-col items-center cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-[12px] flex items-center justify-center border border-[var(--border)] overflow-hidden">
            <img
              className="w-full h-full"
              src="https://frankfurt.apollo.olxcdn.com/v1/files/29mxpfkl9emi2-UZ/image;s=1080x898"
              alt="category"
            />

          </div>
          <h3 className="text-[12px] mt-2 leading-[14px]">{t("mebel")}</h3>
        </li>
        <li className="min-w-[90px] inline-flex flex-col items-center cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-[12px] flex items-center justify-center border border-[var(--border)] overflow-hidden">
            <img
              className="w-full h-full"
              src="https://frankfurt.apollo.olxcdn.com/v1/files/29mxpfkl9emi2-UZ/image;s=1080x898"
              alt="category"
            />

          </div>
          <h3 className="text-[12px] mt-2 leading-[14px]">{t("mebel")}</h3>
        </li>
        <li className="min-w-[90px] inline-flex flex-col items-center cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-[12px] flex items-center justify-center border border-[var(--border)] overflow-hidden">
            <img
              className="w-full h-full"
              src="https://frankfurt.apollo.olxcdn.com/v1/files/29mxpfkl9emi2-UZ/image;s=1080x898"
              alt="category"
            />

          </div>
          <h3 className="text-[12px] mt-2 leading-[14px]">{t("mebel")}</h3>
        </li>
        <li className="min-w-[90px] inline-flex flex-col items-center cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-[12px] flex items-center justify-center border border-[var(--border)] overflow-hidden">
            <img
              className="w-full h-full"
              src="https://frankfurt.apollo.olxcdn.com/v1/files/29mxpfkl9emi2-UZ/image;s=1080x898"
              alt="category"
            />

          </div>
          <h3 className="text-[12px] mt-2 leading-[14px]">{t("mebel")}</h3>
        </li>
        <li className="min-w-[90px] inline-flex flex-col items-center cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-[12px] flex items-center justify-center border border-[var(--border)] overflow-hidden">
            <img
              className="w-full h-full"
              src="https://frankfurt.apollo.olxcdn.com/v1/files/29mxpfkl9emi2-UZ/image;s=1080x898"
              alt="category"
            />

          </div>
          <h3 className="text-[12px] mt-2 leading-[14px]">{t("mebel")}</h3>
        </li>
      </ul>
    </div>
  );
};
