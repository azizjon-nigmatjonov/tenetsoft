"use client";

import { Breadcrumbs } from "@mui/material";
import "./style.scss";

import { useMemo } from "react";
// import BackButton from "../../../../../../aka-taxi/crm/admin_react/src/components/UI/Buttons/BackButton";
import { ArrowIcon, FolderIcon } from "@/components/UI/IconPicker/Icons";
import Link from "next/link";

interface Props {
  icon?: any;
  withDefautlIcon?: any;
  size?: number;
  className?: string;
  items: any;
  type?: string;
  progmatic?: boolean;
}

const CBreadcrumbs = ({
  icon,
  withDefautlIcon,
  size,
  className,
  items,
  type = "element",
  progmatic = false,
}: Props) => {
  const navigateLink = useMemo(() => {
    if (items[0]?.link) return items[0]?.link;
    if (progmatic) return -1;
  }, [progmatic, items]);

  return (
    <div className="flex items-center w-full z-[99] relative justify-between">
      <div className="CBreadcrumbs-wrapper mr-5">
        {/* {navigateLink && <BackButton link={navigateLink} />} */}
        <Breadcrumbs
          className={`CBreadcrumbs ${size} ${className}`}
          separator={<ArrowIcon fill="var(--gray)" />}
        >
          {items?.map((item: any, index: number) => (
            <div
              key={index}
              className={`breadcrumb-item ${item?.link ? "" : "last"} ${type}`}
            >
              {icon}
              <div className="mr-2">{withDefautlIcon && index < 1 ? <FolderIcon /> : ""}</div>
              {type === "link" && item?.link ? (
                <Link href={item.link} className="breadcrumb-label">
                  {item.label}
                </Link>
              ) : (
                <div className="breadcrumb-label">
                  {item.link ? <Link href={item.link}>{item.label}</Link> : item.label}
                </div>
              )}
            </div>
          ))}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default CBreadcrumbs;
