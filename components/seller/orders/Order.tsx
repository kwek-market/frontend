import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import useSellerOrders from "@/hooks/useSellerOrders";
import { RootState } from "@/store/rootReducer";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { OrdersEmpty, OrdersFilled } from ".";

export default function Order() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const {
    status: ordersStatus,
    data: ordersData,
    error: ordersError,
  } = useSellerOrders(token);
  return (
    <Fragment>
      {ordersStatus === "loading" && <Load />}
      {ordersStatus === "error" && <ErrorInfo error={ordersError} />}
      {ordersStatus === "success" &&
      ordersData !== undefined &&
      ordersData.getSellerOrders.length > 0 ? (
        <OrdersFilled orders={ordersData.getSellerOrders} />
      ) : (
        <OrdersEmpty />
      )}
    </Fragment>
  );
}
