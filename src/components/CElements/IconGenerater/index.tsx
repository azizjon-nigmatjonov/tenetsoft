import { memo } from "react";
import { iconsList } from "./list";

interface Props {
  icon: string;
  fill?: any;
}

const IconGenerater = memo(function IconGenerater({ icon, fill, ...props }: Props) {
  const foundIcon = iconsList.find((el) => el.name === icon);
  if (!foundIcon) return null;

  const IconComponent = foundIcon.component;
  return <IconComponent fill={fill} {...props} />;
});

export default IconGenerater;
