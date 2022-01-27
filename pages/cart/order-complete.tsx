import React, { useEffect } from "react";
import { useRouter } from "next/router";
import usePaymentVerify from "@/hooks/usePaymentVerify";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { VerifyPaymentType } from "@/interfaces/commonTypes";
import { MainLayout } from "@/layouts";

function OrderComplete() {
  const { user } = useSelector((state: RootState) => state);
  const router = useRouter();
  const { transaction_id } = router.query;

  const { mutate } = usePaymentVerify(user.token);

  useEffect(() => {
    if (transaction_id === null || transaction_id == undefined) return;
    const payload: VerifyPaymentType = {
      transactionId: transaction_id as string,
    };
    mutate(payload);
  }, [transaction_id]);

  return (
    <MainLayout>
      <div>successful</div>
    </MainLayout>
  );
}

export default OrderComplete;
