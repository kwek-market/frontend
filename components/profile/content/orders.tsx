import Button from "@/components/buttons/Button";
import React from "react";
import { ClosedOrders, OpenOrders } from "../index";

function Orders({ activeBtn, setActiveBtn }) {
  const [orderStatus, setOrderStatus] = React.useState<string>("open");

  return (
    <>
      <div className="tw-border-b tw-border-gray-500 tw-border-opacity-50">
        <h4 className="tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-xl lg:tw-text-3xl">
          {activeBtn}
        </h4>
      </div>
      <div className="tw-border-b tw-border-gray-500 tw-border-opacity-50 tw-flex tw-my-3">
        <Button
          buttonStyle={`tw-mr-3 tw-capitalize tw-pb-3 tw-border-b ${
            orderStatus === "open"
              ? "tw-text-red-kwek100 tw-border-red-kwek100"
              : "tw-text-brown-kwek200"
          }   `}
          text={"open orders (2)"}
          cmd={() => setOrderStatus("open")}
        />
        <Button
          buttonStyle={`tw-capitalize tw-pb-3 tw-border-b ${
            orderStatus === "closed"
              ? "tw-text-red-kwek100 tw-border-red-kwek100"
              : "tw-text-brown-kwek200"
          }   `}
          text={"closed orders (12)"}
          cmd={() => setOrderStatus("closed")}
        />
      </div>
      <>
        {orderStatus === "open" && <OpenOrders setActiveBtn={setActiveBtn} />}
        {orderStatus === "closed" && <ClosedOrders setActiveBtn={setActiveBtn} />}
      </>
    </>
  );
}

export default Orders;
