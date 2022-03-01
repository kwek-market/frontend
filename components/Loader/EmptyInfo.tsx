import React from "react";
import Image from "next/image";
import Link from "next/link";

export type EmptyInfoProps = {
  title: string;
  btnText: string;
  desc: string;
  extraDesc?: string;
  link: string;
};

export default function EmptyInfo({
  title,
  btnText,
  desc,
  extraDesc,
  link,
}: EmptyInfoProps) {
  return (
    <section className="tw-shadow-sm tw-bg-white-100 tw-m-5 tw-p-5">
      <h3 className="tw-left tw-capitalize tw-font-semibold tw-text-gray-kwek900 tw-text-xl">
        {title}
      </h3>
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-place-content-center">
        <div className="">
          <Image src="/svg/orderEmpty.svg" width="200" height="200" />
        </div>
        <p className="tw-font-semibold tw-text-gray-kwek900 tw-text-xl">
          {desc}
        </p>
        {extraDesc && <p className="">{extraDesc}</p>}

        <Link href={`/seller/${link}`}>
          <a className="tw-bg-red-kwek100 tw-text-white-100 tw-capitalize tw-rounded-md tw-p-3">
            {btnText}
          </a>
        </Link>
      </div>
    </section>
  );
}
