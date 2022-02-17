import React from "react";
import Button from "@/components/buttons/Button";
import Badge from "@/components/badge/Badge";
import { Order as OrderType } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { QueryClient } from "react-query";
import { GETORDER } from "@/store/billing/order.queries";
import { userFetcherWithAuth } from "@/helpers";
import { setOrderDetails } from "@/store/order/order.action";

export type OrderProps = {
  setActiveBtn: React.Dispatch<React.SetStateAction<string>>;
  order: OrderType;
};

const Order = function ({ setActiveBtn, order }: OrderProps) {
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const queryClient = new QueryClient();

  const deliveryStatus =
    order.deliveryStatus === " delivered"
      ? "tw-bg-green-success"
      : "tw-bg-yellow-filled";

  async function checkDetails(id: string) {
    const { message } = await import("antd");
    try {
      const data = await queryClient.fetchQuery("order", () =>
        userFetcherWithAuth(GETORDER, { token, id }, token)
      );
      dispatch(setOrderDetails(data.order));
      setActiveBtn("Open Order Details");
    } catch (err) {
      message.error(err.message);
    }
  }

  return (
    <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-border tw-border-gray-kwek700 tw-rounded-md tw-p-2 tw-mb-2">
      <div className="tw-flex tw-flex-col md:tw-flex-row">
        <div className="tw-grid tw-grid-cols-kwek-4 tw-gap-[5px]">
          <img src="/images/order.png" alt="" className="tw-rounded-md" />
          <img src="/images/order.png" alt="" className="tw-rounded-md" />
          <img src="/images/order.png" alt="" className="tw-rounded-md" />
          <img src="/images/order.png" alt="" className="tw-rounded-md" />
        </div>
        <div className="tw-ml-0 md:tw-ml-2 tw-flex tw-flex-col tw-justify-between">
          <div>
            <h3 className="tw-text-base md:tw-text-lg lg:tw-text-2xl tw-font-medium tw-text-gray-kwek200">
              Order {order.orderId}
            </h3>
            <span className="tw-opacity-60 tw-font-normal tw-text-sm md:tw-text-base tw-text-black-stock">
              {order.cartItems.length} Items
            </span>
          </div>
          <span className="tw-opacity-90 tw-text-sm tw-font-medium tw-text-black-stock">
            {order.deliveryStatus === " delivered" && (
              <>Delivered by, Friday, 6 June</>
            )}
          </span>
        </div>
      </div>
      <div className="tw-flex tw-flex-col">
        <Badge
          badgeStyle={`${deliveryStatus} tw-uppercase tw-p-1.5 tw-text-xs tw-text-center tw-text-white-100 tw-inline tw-mb-2`}
          text={order.deliveryStatus}
        />
        <Button
          buttonStyle="tw-underline tw-text-yellow-primary tw-uppercase"
          text="See Details"
          cmd={() => checkDetails(order.id)}
        />
      </div>
    </div>
  );
};

export default Order;
