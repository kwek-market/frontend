import { Order } from "@/interfaces/commonTypes";
import React from "react";
import PaymentCard from "./PaymentCard";

const Payment = function ({ order }: { order: Order }) {
  const subtotal = Number(order.orderPrice).toLocaleString();
  const totalPrice = Number(order.orderPriceTotal).toLocaleString();
  const shippingAddress = `${order.doorStep.fullName} ${order.doorStep.address} ${order.doorStep.city} ${order.doorStep.state}`;

  return (
    <>
      <div className="tw-rounded-md tw-bg-gray-kwek700 tw-p-3 tw-w-full">
        <div>
          <p className="tw-capitalize tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-lg lg:tw-text-2xl">
            payment information
          </p>
        </div>
        <div className="tw-ml-2">
          <PaymentCard title="Payment Method" desc={order.paymentMethod} />
          <br />
          <PaymentCard
            title="Payment Details"
            desc={`Items subtotal: NGN ${subtotal} Shipping Fees: NGN 100 Total: NGN ${totalPrice}`}
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
          <PaymentCard title="Delivery Method" desc={order.deliveryMethod} />
          <br />
          <PaymentCard title="Shipping Address" desc={shippingAddress} />
        </div>
      </div>
    </>
  );
};

export default Payment;
