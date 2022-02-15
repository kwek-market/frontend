import useOrders from "@/hooks/useOrders";
import { Order } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import React from "react";
import { useSelector } from "react-redux";
import ErrorInfo from "../Loader/ErrorInfo";
import Load from "../Loader/Loader";
import { OpenOrder } from "./index";

const OpenOrders = function ({ setActiveBtn }) {
  const { user } = useSelector((state: RootState) => state);
  const { status, data, error } = useOrders(user.token);
  console.log(data);

  const loading = status === "loading" && <Load />;
  const hasError = status === "error" && <ErrorInfo error={error} />;
  return (
    <>
      {loading}
      {hasError}
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
