import usePaymentVerify from "@/hooks/usePaymentVerify";
import usePlaceOrder from "@/hooks/usePlaceOrder";
import { VerifyPaymentType } from "@/interfaces/commonTypes";
import { MainLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { message } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function OrderComplete() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const router = useRouter();
  const { reference, trxref } = router.query;

  const { mutate: post } = usePlaceOrder(token);
  const { mutate } = usePaymentVerify(token);

  useEffect(() => {
    if (!reference && !trxref) return;

    const payload: VerifyPaymentType = {
      transactionId: reference as string,
      transactionRef: trxref as string,
    };

    mutate(payload, {
      onSuccess: () => {
        const store = window.localStorage.getItem("order");
        const order = JSON.parse(store);
        order.paymentRef = payload.transactionRef;

        post(order, {
          onSuccess(data, variables, context) {
            message.success("Order have been placed");
            window.localStorage.removeItem("order");
          },
        });
      },
    });
  }, [reference, trxref]);

  return (
    <MainLayout>
      <section className='tw-flex tw-justify-center tw-items-center tw-flex-col tw-py-5'>
        <p className=' tw-text-xl tw-capitalize'>checking order...</p>
        <p className='tw-text-lg'>
          Please wait for your order to be confirmed, you'll be redirected
        </p>
      </section>
    </MainLayout>
  );
}

export default OrderComplete;
