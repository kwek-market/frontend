import React from "react";
import Image from "next/image";

export type WalletCardType = {
  name: string;
  content?: string | number;
  num: number | string;
  imgSrc: string;
  imgAlt: string;
};

export default function WalletCard({
  name,
  content,
  num,
  imgSrc,
  imgAlt,
}: WalletCardType) {
  return (
    <div className="tw-rounded-md tw-p-3 tw-flex tw-justify-between tw-border tw-border-gray-kwek700 tw-bg-white-100">
      <div>
        <p className="tw-text-sm tw-text-gray-kwek900 tw-font-semibold tw-capitalize">
          {name}
        </p>
        <h2 className="tw-text-gray-kwek200 tw-text-lg">NGN {num}</h2>
        {content && (
          <p className="tw-text-xs tw-text-gray-kwek900 tw-font-semibold">
            This month - {content}
          </p>
        )}
      </div>
      <div className="tw-self-end">
        <Image src={imgSrc} alt={imgAlt} width="35" height="35" />
      </div>
    </div>
  );
}
