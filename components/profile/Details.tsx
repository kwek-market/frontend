import useCartItems from "@/hooks/useCartItems";
import { Order } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import router from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Badge from "../badge/Badge";
import Button from "../buttons/Button";
import Load from "../Loader/Loader";

export type DetailsProps = {
  show: boolean;
  order: Order;
  idx: number;
  setActiveBtn: any;
};

const Details = function ({ show, order, idx, setActiveBtn }) {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const { items, loading } = useCartItems(order);

  function trackItem() {
    setActiveBtn("Track My Order");
  }

  function statusHistory() {
    // status history
  }

  return loading ? (
    <Load />
  ) : (
    <div className="tw-border tw-border-gray-kwek700 tw-bg-opacity-50 tw-rounded-lg tw-p-2 tw-flex tw-flex-row tw-justify-between tw-mb-2">
      <div className="tw-flex md:tw-flex-row tw-flex-col tw-flex-[3]">
        <div className="tw-flex-1">
          <img
            src={loading ? null : items[idx]?.product.image[0].imageUrl}
            alt="order"
            className="tw-rounded-md"
          />
        </div>
        <div className="tw-ml-0 md:tw-ml-2 tw-flex tw-flex-[2] tw-flex-col tw-justify-between">
          <h5 className="tw-capitalize tw-font-medium tw-text-base md:tw-text-lg tw-text-gray-kwek200">
            {loading ? null : items[idx]?.product.productTitle}
          </h5>
          {show && (
            <span className="tw-opacity-90 tw-font-medium tw-text-black-stock tw-text-sm">
              Delivered
            </span>
          )}
          {!order.closed ? (
            !show ? (
              <>
                <div className="tw-flex tw-flex-row tw-justify-between">
                  <Button
                    buttonStyle="tw-p-2 tw-text-red-kwek100 tw-border tw-border-red-kwek100 tw-rounded-sm"
                    text="Track Item"
                    cmd={() => trackItem()}
                  />
                </div>
              </>
            ) : (
              <Button
                buttonStyle={
                  "tw-p-2 tw-text-red-kwek100 tw-border tw-border-red-kwek100 tw-rounded-sm"
                }
                text={"See Status History"}
                cmd={statusHistory}
              />
            )
          ) : null}
        </div>
      </div>
      <div className="tw-flex tw-flex-col md:tw-justify-between tw-items-end tw-p-0 md:tw-p-3 tw-flex-[1]">
        {!order.closed ? (
          show ? (
            <Badge
              badgeStyle={
                "tw-p-1 tw-bg-green-success tw-center tw-uppercase tw-text-white-100 tw-text-xs tw-font-semibold"
              }
              text={order.deliveryStatus}
            />
          ) : (
            <Badge
              badgeStyle="tw-p-1 tw-bg-yellow-filled tw-center tw-uppercase tw-text-white-100 tw-text-xs tw-font-semibold"
              text={order.deliveryStatus}
            />
          )
        ) : null}
        <div className="tw-flex tw-flex-col tw-justify-between tw-items-end">
          <span className="tw-uppercase tw-opacity-60 tw-text-black-stock tw-text-base tw-font-normal">
            qty: {loading ? null : items[idx]?.quantity}
          </span>
          <span className="tw-uppercase tw-text-black-stock tw-font-medium tw-text-lg">
            NGN {loading ? null : Number(items[idx]?.price).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
