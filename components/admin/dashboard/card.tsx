import Load from "@/components/Loader/Loader";
import {
  ArrowError,
  ArrowSuccess,
} from "@/components/icons/admin/dashboard/arrow";
import React from "react";

interface CardProps {
  text: string;
  subText: string;
  Icon: () => JSX.Element;
  down?: boolean;
  fig: number;
  lastText: string;
  loading?: boolean;
}

const Card = ({
  text,
  subText,
  Icon,
  down,
  fig,
  lastText,
  loading,
}: CardProps) => {
  return (
    <div className=" tw-border-2 tw-border-gray-kwek100a tw-rounded-[10px] tw-p-6 tw-font-poppins">
      {loading ? (
        <Load />
      ) : (
        <>
          <div className=" tw-flex tw-justify-between">
            <div>
              <h2 className="tw-mb-0 tw-text-[#71717A] tw-font-medium tw-tracking-[1px] tw-uppercase">
                {text}
              </h2>
              <p className="tw-mb-0  tw-font-medium tw-text-[2rem] tw-pt-3">
                {subText}
              </p>
            </div>
            <Icon />
          </div>
          <div className=" tw-pt-4 tw-flex tw-gap-x-[10px] tw-items-center">
            <div className=" tw-flex tw-gap-x-1 tw-items-center">
              {down ? <ArrowError /> : <ArrowSuccess />}{" "}
              <span
                className={`${
                  down ? "tw-text-[#FF2D1A]" : "tw-text-[#22C55E]"
                }`}
              >
                {fig}%
              </span>
            </div>
            <span className=" tw-text-sm tw-text-[#1D1616] tw-text-opacity-40">
              {lastText}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
