import useOrders from "@/hooks/useOrders";
import { Order } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import React from "react";
import { useSelector } from "react-redux";
import ErrorInfo from "../Loader/ErrorInfo";
import Load from "../Loader/Loader";
import { ClosedOrder } from "./index";

const ClosedOrders = function ({ setActiveBtn }) {
  const { user } = useSelector((state: RootState) => state);
  const { status, data, error } = useOrders(user.token);

  const loading = status === "loading" && <Load />;
  const hasError = status === "error" && <ErrorInfo error={error} />;

  return (
    <>
      {loading}
      {hasError}
      {data !== undefined &&
        data.orders.map(
          (order: Order) =>
            order.closed && (
              <ClosedOrder
                key={order.id}
                order={order}
                setActiveBtn={setActiveBtn}
              />
            )
        )}
    </>
  );
};

export default ClosedOrders;
