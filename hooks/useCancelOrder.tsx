import { userFetcherWithAuth } from "@/helpers";
import { CANCELORDER } from "@/store/cart/cart.queries";
import React from "react";
import { QueryClient, useMutation } from "react-query";
import { message } from "antd";

export type CancelOrderType = {
  orderId: string;
  token: string;
};

export default function useCancelOrder() {
  const queryClient = new QueryClient();
  return useMutation(
    (data: CancelOrderType) =>
      userFetcherWithAuth(CANCELORDER, { orderId: data.orderId }, data.token),
    {
      onSuccess: (data) => {
        message.success(data.cancelOrder.message);
        queryClient.invalidateQueries(["orders"]);
      },
      onError: (error) => {
        message.error((error as { message: string }).message);
      },
    }
  );
}
