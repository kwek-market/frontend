import { userFetcherWithAuth } from "@/helpers";
import { PlaceOrder, VerifyPaymentType } from "@/interfaces/commonTypes";
import { VERIFYPAYMENT } from "@/store/billing/paymentLink.queries";
import { message } from "antd";
import React from "react";
import { useMutation } from "react-query";
import usePlaceOrder from "./usePlaceOrder";

function usePaymentVerify(token: string) {
  const { mutate } = usePlaceOrder(token);

  return useMutation(
    (data: VerifyPaymentType) =>
      userFetcherWithAuth(VERIFYPAYMENT, data, token),
    {
      onSuccess: (data) => {
        // add paymentRef to place order
        const store = window.sessionStorage.getItem("order");
        const order = JSON.parse(store);
        console.log(order);
        message.success(data.verifyPayment.message);
        data.verifyPayment.status && mutate(order);
      },
      onError: (error) => {
        message.error((error as any).message);
      },
    }
  );
}

export default usePaymentVerify;
