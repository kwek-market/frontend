import React from 'react';
import PaymentCard from './PaymentCard';

const Payment = function () {
  return (
    <>
      <div className="tw-rounded-md tw-bg-gray-kwek700 tw-p-3 tw-w-full">
        <div>
          <p className="tw-capitalize tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-lg lg:tw-text-2xl">
            payment information
          </p>
        </div>
        <div className="tw-ml-2">
          <PaymentCard title="Payment Method" desc="cash on delivery" />
          <PaymentCard
            title="Payment Details"
            desc="Items subtotal: NGN 9,700 Shipping Fees: NGN 3,400 Total: NGN 13, 100"
          />
        </div>
      </div>
      <div className="tw-rounded-md tw-bg-gray-kwek700 tw-p-3 tw-w-full">
        <div>
          <p className="tw-capitalize tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-lg lg:tw-text-2xl">
            delivery information
          </p>
        </div>
        <div className="tw-ml-2">
          <PaymentCard title="Delivery Method" desc="Standar Door Delivery" />
          <PaymentCard
            title="Shipping Address"
            desc="Alison Eyo Suite 5, OGB Plaza, Obafemi Awolowo Way, Utako,Abuja."
          />
        </div>
      </div>
    </>
  );
};

export default Payment;
