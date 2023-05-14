import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

interface BreadCrumbsProps {
  items: {
    name: string;
    path: string;
  }[];
  header?: string;
}

const BreadCrumbs = ({ items, header }: BreadCrumbsProps) => {
  return (
    <div>
      <div className=" tw-flex tw-text-breadcrumb tw-font-poppins tw-tracking-[0.2px] tw-gap-x-4">
        {items.map((item, index) => (
          <Link href={item.path} key={index}>
            <a className="tw-flex tw-gap-x-4 tw-text-breadcrumb">
              {item.name}
              {index === items.length - 1 ? null : (
                <ChevronRightIcon width={20} height={20} />
              )}
            </a>
          </Link>
        ))}
      </div>
      {header ? (
        <h1 className=" tw-text-[2rem] tw-font-bold tw-mb-0 tw-pt-6">
          {header}
        </h1>
      ) : null}
    </div>
  );
};

export default BreadCrumbs;
