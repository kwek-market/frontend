import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

interface BreadCrumbsProps {
  items: {
    name: string;
    path: string;
  }[];
  header?: string;
  buttonText?: string;
  buttonPath?: string;
}

const BreadCrumbs = ({
  items,
  header,
  buttonPath,
  buttonText,
}: BreadCrumbsProps) => {
  return (
    <div>
      <div className=" tw-flex tw-text-breadcrumb tw-font-poppins tw-tracking-[0.2px] tw-gap-x-[0.1rem] md:tw-gap-x-4">
        {items.map((item, index) => (
          <Link href={item.path} key={index}>
            <a className="tw-flex tw-gap-x-[0.1rem] md:tw-gap-x-4 tw-text-breadcrumb">
              <span className="tw-max-w-[6rem] md:tw-max-w-max tw-truncate">
                {item.name}
              </span>
              {index === items.length - 1 ? null : (
                <ChevronRightIcon width={20} height={20} />
              )}
            </a>
          </Link>
        ))}
      </div>
      {header ? (
        <div className=" tw-flex tw-justify-between tw-pt-6 tw-items-center">
          <h1 className="tw-text-[1.5rem] md:tw-text-[2rem] tw-font-bold tw-mb-0 ">
            {header}
          </h1>
          {buttonText ? (
            <Link href={buttonPath}>
              <a>
                <button
                  // className="md:tw-font-semibold tw-font-extralight  tw-py-2 tw-px-11 tw-rounded tw-text-white-100 tw-bg-[#1E944D]"
                  className="tw-font-semibold tw-py-1 tw-px-3  md:tw-py-2 md:tw-px-11 tw-rounded tw-text-white-100 tw-bg-[#1E944D]"
                  type="button"
                >
                  {buttonText}
                </button>
              </a>
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default BreadCrumbs;
