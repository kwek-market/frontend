import React from "react";
import Image from "next/image";

const Empty = function ({ activeBtn }) {
  return (
    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
      <img src="/images/order-empty.png" alt="Empty" />
      <h4 className="tw-capitalize tw-text-base md:tw-text-xl tw-font-semibold">
        no transaction history
      </h4>
      <h5 className="tw-text-gray-kwek200 tw-font-normal tw-text-sm md:tw-text-lg tw-opacity-70 tw-text-center">
        You have not make any purchase recently.
      </h5>
    </div>
  );
};

export default Empty;
