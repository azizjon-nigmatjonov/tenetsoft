import { LocaitonIcon } from "@/components/CElements/IconGenerater/Icons/custom";

export const Location = ({ title = "" }) => {
  return (
    <div className="flex items-center space-x-2">
      <LocaitonIcon />
      <p>{title || 'Location...'}</p>
    </div>
  );
};
