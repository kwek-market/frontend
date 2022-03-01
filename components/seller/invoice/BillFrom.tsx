import { RootState } from "@/store/rootReducer";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function BillFrom() {
  const {
    seller: { seller },
    user: { user },
  } = useSelector((state: RootState) => state);
  const address = `${seller.shopAddress} ${seller.city}  ${seller.state}`;
  return (
    <div className="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center tw-border-b w-border-gray-kwek700 tw-pb-3 ">
      <article className="tw-w-full">
        <h2 className="tw-font-semibold tw-uppercase tw-text-gray-kwek200 md:tw-text-2xl tw-text-lg tw-mb-0">
          bill from:
        </h2>
        <p className="tw-font-normal tw-text-lg tw-text-opacity-70 tw-text-gray-kwek200 tw-mb-0">
          {seller.shopName}
        </p>
        <p className="tw-font-normal tw-text-lg tw-text-opacity-70 tw-text-gray-kwek200 tw-mb-0">
          {address}
        </p>
        <p className="tw-font-normal tw-text-lg tw-text-opacity-70 tw-text-gray-kwek200 tw-mb-0 tw-break-words">
          {user.email}
        </p>
      </article>
      <Image src="/svg/kweklogo.svg" alt="kweklogo" width="250" height="200" />
    </div>
  );
}
