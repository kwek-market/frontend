import React, { Fragment, useState } from "react";
import Button from "@/components/buttons/Button";
import Badge from "@/components/badge/Badge";
import { Order as OrderType } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { QueryClient } from "react-query";
import { GETORDER } from "@/store/billing/order.queries";
import { userFetcherWithAuth } from "@/helpers";
import { setOrderDetails } from "@/store/order/order.action";
import useCartItems from "@/hooks/useCartItems";
import Load from "../Loader/Loader";
import { v4 } from "uuid";
import Image from "next/image";
import useCancelOrder from "@/hooks/useCancelOrder";

export type OrderProps = {
  setActiveBtn: React.Dispatch<React.SetStateAction<string>>;
  order: OrderType;
  refetch: () => void;
};

const Order = function ({ setActiveBtn, order, refetch }: OrderProps) {
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const { items, loading } = useCartItems(order);
  const [load, setLoading] = useState(false);
  const queryClient = new QueryClient();

  const deliveryStatus =
    order.deliveryStatus === " delivered"
      ? "tw-bg-green-success"
      : "tw-bg-yellow-filled";

  async function checkDetails(id: string) {
    const { message } = await import("antd");
    try {
      setLoading(true);
      const data = await queryClient.fetchQuery("order", () =>
        userFetcherWithAuth(GETORDER, { token, id }, token)
      );
      setLoading(false);
      dispatch(setOrderDetails(data.order));
      setActiveBtn("Open Order Details");
    } catch (err) {
      message.error(err.message);
    }
  }

  const { mutate, isLoading } = useCancelOrder();
  function cancelItem(id: string) {
    mutate(
      { orderId: id, token },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  }

  return (
    <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-border tw-border-gray-kwek700 tw-rounded-md tw-p-2 tw-mb-2">
      <div className="tw-flex tw-flex-col md:tw-flex-row">
        <div className="tw-grid tw-grid-cols-kwek-7 tw-gap-[5px]">
          {loading ? (
            <Load />
          ) : (
            <Fragment>
              {items.slice(0, 4).map((item, idx) => (
                <Image
                  key={idx}
                  src={item.product.image[0].imageUrl}
                  alt="order-img"
                  width="60"
                  height="60"
                  className="tw-rounded-md tw-overflow-hidden"
                />
              ))}
            </Fragment>
          )}
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
      <div className="tw-flex tw-flex-col tw-justify-between">
        <Badge
          badgeStyle={`${deliveryStatus} tw-uppercase tw-p-1.5 tw-text-xs tw-text-center tw-text-white-100 tw-inline tw-mb-2`}
          text={order.deliveryStatus}
        />
        <Button
          buttonStyle="tw-underline tw-text-yellow-primary tw-uppercase"
          text={load ? "loading..." : "See Details"}
          cmd={() => checkDetails(order.id)}
        />
        <Button
          buttonStyle="tw-p-2 tw-bg-red-kwek100 tw-text-white-100 tw-rounded-sm tw-border tw-border-red-kwek100 hover:tw-opacity-50"
          text={isLoading ? "loading..." : "Cancel Order"}
          cmd={() => cancelItem(order.id)}
        />
      </div>
    </div>
  );
};

export default Order;
