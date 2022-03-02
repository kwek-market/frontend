import { useRouter } from "next/router";
import React from "react";

export default function FilledHeader() {
  const router = useRouter();

  return (
    <div className="tw-flex tw-justify-between ">
      <h1 className="tw-font-semibold tw-text-lg tw-text-gray-kwek900">
        Promotions
      </h1>
      <button
        className="tw-rounded-md tw-capitalize tw-bg-red-kwek100 tw-text-white-100 tw-p-3 tw-flex tw-items-center"
        onClick={() => router.push("/seller/profile")}
      >
        <i className="fas fa-plus tw-mr-2" /> new promotion
      </button>
    </div>
  );
}
