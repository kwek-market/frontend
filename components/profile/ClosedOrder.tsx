import React, { useState } from "react";
import Button from "@/components/buttons/Button";
import Badge from "@/components/badge/Badge";
import { OrderProps } from "./OpenOrder";
import { userFetcherWithAuth } from "@/helpers";
import { GETORDER } from "@/store/billing/order.queries";
import { setOrderDetails } from "@/store/order/order.action";
import { RootState } from "@/store/rootReducer";
import { QueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import useCartItems from "@/hooks/useCartItems";
import Load from "../Loader/Loader";

const ClosedOrder = function ({ order, setActiveBtn }: OrderProps) {
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const { items, loading } = useCartItems(order);
  const [load, setLoading] = useState(false);
  const queryClient = new QueryClient();

  async function checkDetails(id: string) {
    const { message } = await import("antd");
    try {
      setLoading(true);
      const data = await queryClient.fetchQuery("order", () =>
        userFetcherWithAuth(GETORDER, { token, id }, token)
      );
      setLoading(false);
      dispatch(setOrderDetails(data.order));
      // console.log(data);
      setActiveBtn("Closed Order Details");
    } catch (err) {
      message.error(err.message);
    }
  }

  return (
    <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-border tw-border-gray-kwek700 tw-rounded-md tw-p-2 tw-mb-3">
      <div className="tw-flex tw-flex-col md:tw-flex-row">
        <div className="tw-grid tw-grid-cols-kwek-4 tw-gap-[5px]">
          {loading ? (
            <Load />
          ) : (
            <img
              src={items[0]?.product.image[0].imageUrl}
              alt="order"
              className="tw-rounded-md"
            />
          )}
        </div>
        <div className="tw-ml-0 md:tw-ml-2 tw-flex tw-flex-col tw-justify-between">
          <div>
            <h3 className="tw-text-base md:tw-text-lg lg:tw-text-2xl tw-font-medium tw-text-gray-kwek200">
              {loading ? <Load /> : items[0]?.product.productTitle}
            </h3>
            <span className="tw-opacity-60 tw-font-normal tw-text-sm md:tw-text-base tw-text-black-stock">
              Order {order.orderId}
            </span>
          </div>
        </div>
      </div>
      <div className="tw-flex tw-flex-col tw-items-end">
        <Badge
          badgeStyle="tw-bg-black-stock tw-opacity-40 tw-p-1.5 tw-text-xs tw-text-center tw-text-white-100 tw-inline tw-uppercase tw-whitespace-nowrap"
          text="CANCELLED - PAYMENT UNSUCCESSFUL"
        />
        <Button
          buttonStyle="tw-underline tw-text-yellow-primary tw-uppercase"
          text={load ? "loading..." : "See Details"}
          cmd={() => checkDetails(order.id)}
        />
      </div>
    </div>
  );
};

export default ClosedOrder;
