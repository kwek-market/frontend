import useOrders from "@/hooks/useOrders";
import { Order } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import React from "react";
import { useSelector } from "react-redux";
import ErrorInfo from "../Loader/ErrorInfo";
import Load from "../Loader/Loader";
import { OpenOrder } from "./index";

const OpenOrders = function ({ setActiveBtn }) {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const { status, data, error } = useOrders(token);

  const loading = status === "loading" && <Load />;
  const hasError = status === "error" && <ErrorInfo error={error} />;

  return (
    <>
      {loading}
      {hasError}
      {data !== undefined &&
        data.orders.filter((order) => order.closed !== true).length < 1 && (
          <ErrorInfo error={"No open order"} />
        )}
      {data !== undefined &&
        data.orders.map(
          (order: Order) =>
            order.closed !== true && (
              <OpenOrder
                key={order.id}
                order={order}
                setActiveBtn={setActiveBtn}
              />
            )
        )}
    </>
  );
};

export default OpenOrders;
