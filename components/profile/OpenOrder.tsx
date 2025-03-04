import Badge from "@/components/badge/Badge";
import Button from "@/components/buttons/Button";
import { userFetcherWithAuth } from "@/helpers";
import useCancelOrder from "@/hooks/useCancelOrder";
import useCartItems from "@/hooks/useCartItems";
import { Order as OrderType } from "@/interfaces/commonTypes";
import { GETORDER } from "@/store/billing/order.queries";
import { setOrderDetails } from "@/store/order/order.action";
import { RootState } from "@/store/rootReducer";
import { useAtom } from "jotai";
import Image from "next/legacy/image";
import React, { Fragment, useState } from "react";
import { QueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { OrderDeliveryStatus } from "../../validations/orders";
import Load from "../Loader/Loader";
import { activeOrderIdAtom } from "./active-button-atom";

export type OrderProps = {
  setActiveBtn: React.Dispatch<React.SetStateAction<string>>;
  order: OrderType;
  refetch: () => void;
};

const Order = function ({ setActiveBtn, order, refetch }: OrderProps) {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.user?.token);
  const { items, loading } = useCartItems(order);
  const [load, setLoading] = useState(false);
  const [orderId, setOrderId] = useAtom(activeOrderIdAtom);
  const queryClient = new QueryClient();

  const deliveryStatus =
    order.deliveryStatus === OrderDeliveryStatus.Delivered
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
      setOrderDetails(data.order);
      1;
      setActiveBtn("Open Order Details");
      setOrderId(id);
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
    <div className='tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-border tw-border-gray-kwek700 tw-rounded-md tw-p-2 tw-mb-2'>
      <div className='tw-flex tw-flex-col md:tw-flex-row'>
        <div className='tw-grid tw-grid-cols-kwek-7 tw-gap-[5px]'>
          {loading ? (
            <Load />
          ) : (
            <Fragment>
              {items.slice(0, 4).map((item, idx) => (
                <Image
                  key={idx}
                  src={item.product.image[0].imageUrl}
                  alt='order-img'
                  width='60'
                  height='60'
                  className='tw-rounded-md tw-overflow-hidden'
                />
              ))}
            </Fragment>
          )}
        </div>
        <div className='tw-ml-0 md:tw-ml-2 tw-flex tw-flex-col tw-justify-between'>
          <div>
            <h3 className='tw-text-base md:tw-text-lg lg:tw-text-2xl tw-font-medium tw-text-gray-kwek200'>
              Order {order.orderId}
            </h3>
            <span className='tw-opacity-60 tw-font-normal tw-text-sm md:tw-text-base tw-text-black-stock'>
              {order.cartItems.length} Items
            </span>
          </div>
          <span className='tw-opacity-90 tw-text-sm tw-font-medium tw-text-black-stock'>
            {order.deliveryStatus === OrderDeliveryStatus.Delivered && <>Delivered</>}
          </span>
        </div>
      </div>
      <div className='tw-flex tw-flex-col tw-justify-between'>
        <Badge
          badgeStyle={`${deliveryStatus} tw-uppercase tw-p-1.5 tw-text-xs tw-text-center tw-text-white-100 tw-inline tw-mb-2`}
          text={order.deliveryStatus}
        />
        <Button
          buttonStyle='tw-underline tw-text-yellow-primary tw-uppercase'
          text={load ? "loading..." : "See Details"}
          cmd={() => checkDetails(order.id)}
        />
        <Button
          buttonStyle='tw-p-2 tw-bg-red-kwek100 tw-text-white-100 tw-rounded-sm tw-border tw-border-red-kwek100 hover:tw-opacity-50'
          text={isLoading ? "loading..." : "Cancel Order"}
          cmd={() => cancelItem(order.id)}
        />
      </div>
    </div>
  );
};

export default Order;
