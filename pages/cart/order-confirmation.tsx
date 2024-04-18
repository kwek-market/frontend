import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import usePaymentVerify from "@/hooks/usePaymentVerify";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { VerifyPaymentType } from "@/interfaces/commonTypes";
import { MainLayout } from "@/layouts";
import usePlaceOrder from "@/hooks/usePlaceOrder";

function OrderComplete() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const router = useRouter();
  const { transaction_id, tx_ref } = router.query;

  const { mutate: post } = usePlaceOrder(token);
  const { mutate } = usePaymentVerify(token);

  useEffect(() => {
    if (transaction_id === null || transaction_id == undefined) return;
    const payload: VerifyPaymentType = {
      transactionId: transaction_id as string,
      paymentRef: tx_ref as string,
    };
    mutate(payload, {
      onSuccess: () => {
        const store = window.sessionStorage.getItem("order");
        const order = JSON.parse(store);
        order.paymentRef = tx_ref;
        post(order);
      },
    });
  }, [transaction_id, tx_ref]);

  return (
    <MainLayout>
      <section className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-py-5">
        <p className=" tw-text-xl tw-capitalize">checking order...</p>
        <p className="tw-text-lg">
          Please wait for your order to be confirmed, you'll be redirected
        </p>
      </section>
    </MainLayout>
  );
}

export default OrderComplete;
