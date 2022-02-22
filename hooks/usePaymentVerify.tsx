import { userFetcherWithAuth } from "@/helpers";
import { PlaceOrder, VerifyPaymentType } from "@/interfaces/commonTypes";
import { VERIFYPAYMENT } from "@/store/billing/paymentLink.queries";
import { message } from "antd";
import React from "react";
import { useMutation } from "react-query";
import usePlaceOrder from "./usePlaceOrder";

function usePaymentVerify(token: string, ref: string | string[]) {
  const { mutate } = usePlaceOrder(token);
  const txRef = ref;

  return useMutation(
    (data: VerifyPaymentType) =>
      userFetcherWithAuth(VERIFYPAYMENT, data, token),
    {
      onSuccess: (res) => {
        const store = window.sessionStorage.getItem("order");
        const order = JSON.parse(store);
        console.log(ref);
        order.paymentRef = txRef;
        console.log(order);
        message.success(res.verifyPayment.message);
        mutate(order);
      },
      onError: (error) => {
        message.error((error as any).message);
      },
    }
  );
}

export default usePaymentVerify;
