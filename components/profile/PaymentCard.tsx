import React from 'react';

const PaymentCard = function ({ title, desc }) {
  return (
    <div className="tw-bg-white-100 tw-rounded-md  tw-p-3 ">
      <h5 className="tw-text-black-stock tw-text-base tw-font-semibold tw-capitalize">{title}</h5>
      <p className="tw-opacity-70 tw-text-black-stock tw-text-base tw-font-normal">{desc}</p>
    </div>
  );
};

export default PaymentCard;
