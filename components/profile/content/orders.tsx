import React from "react";
import Button from "@/components/buttons/Button";
import { ClosedOrders, OpenOrders } from "../index";
import useOrders from "@/hooks/useOrders";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";

const Orders = function ({ activeBtn, setActiveBtn }) {
  const { user } = useSelector((state: RootState) => state);
  const { data } = useOrders(user.token);

  const [orderStatus, setOrderStatus] = React.useState<string>("open");

  const openOrderStatus =
    orderStatus === "open"
      ? "tw-text-red-kwek100 tw-border-red-kwek100"
      : "tw-text-brown-kwek200";

  const closedOrderStatus =
    orderStatus === "closed"
      ? "tw-text-red-kwek100 tw-border-red-kwek100"
      : "tw-text-brown-kwek200";

  const numOfOpenOrders = data
    ? (data as Record<string, any>).orders.filter(
        (order) => (order as Record<string, any>).closed !== true
      ).length
    : 0;

  const numOfClosedOrders = data
    ? (data as Record<string, any>).orders.filter(
        (order) => order.closed === true
      ).length
    : 0;

  return (
    <>
      <div className="tw-border-b tw-border-gray-500 tw-border-opacity-50">
        <h4 className="tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-xl lg:tw-text-3xl">
          {activeBtn}
        </h4>
      </div>
      <div className="tw-border-b tw-border-gray-500 tw-border-opacity-50 tw-flex tw-my-3">
        <Button
          buttonStyle={`tw-mr-3 tw-capitalize tw-pb-3 tw-border-b ${openOrderStatus}   `}
          text={`open orders (${numOfOpenOrders})`}
          cmd={() => setOrderStatus("open")}
        />
        <Button
          buttonStyle={`tw-capitalize tw-pb-3 tw-border-b ${closedOrderStatus}   `}
          text={`closed orders (${numOfClosedOrders})`}
          cmd={() => setOrderStatus("closed")}
        />
      </div>
      <>
        {orderStatus === "open" && <OpenOrders setActiveBtn={setActiveBtn} />}
        {orderStatus === "closed" && (
          <ClosedOrders setActiveBtn={setActiveBtn} />
        )}
      </>
    </>
  );
};

export default Orders;
