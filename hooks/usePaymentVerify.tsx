import { userFetcherWithAuth } from "@/helpers";
import { PlaceOrder, VerifyPaymentType } from "@/interfaces/commonTypes";
import { VERIFYPAYMENT } from "@/store/billing/paymentLink.queries";
import { message } from "antd";
import React from "react";
import { useMutation } from "react-query";
import usePlaceOrder from "./usePlaceOrder";

function usePaymentVerify(token: string, order: PlaceOrder) {
  const { mutate } = usePlaceOrder(token);

  return useMutation(
    (data: VerifyPaymentType) =>
      userFetcherWithAuth(VERIFYPAYMENT, data, token),
    {
      onSuccess: (data) => {
        message.success(data.verifyPayment.message);
        data.verifyPayment.success && mutate(order);
      },
      onError: (error) => {
        message.error(error);
      },
    }
  );
}

export default usePaymentVerify;
