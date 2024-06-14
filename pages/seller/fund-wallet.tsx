import Load from "@/components/Loader/Loader";
import useFundWallet from "@/hooks/useFundWallet";
import usePaymentVerify from "@/hooks/usePaymentVerify";
import { VerifyPaymentType } from "@/interfaces/commonTypes";
import { MainLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { message } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function fundWallet() {
  const {
    user: { token, user },
  } = useSelector((state: RootState) => state);
  const router = useRouter();
  const { transaction_id, tx_ref, status } = router.query;
  const { mutate, isLoading } = useFundWallet();
  const { mutate: post, isLoading: loading } = usePaymentVerify(token);

  useEffect(() => {
    if (status === "cancelled") {
      message.error("Payment was cancelled, redirecting to profile page");
      router.push("/seller/profile");
      return;
    }
    if (tx_ref && transaction_id) {
      const payload: VerifyPaymentType = {
        transactionId: transaction_id as string,
        paymentRef: tx_ref as string,
      };
      console.log("🚀 ~~ useEffect ~~ payload:", payload);

      post(payload, {
        onSuccess: () => {
          mutate(
            {
              paymentRef: tx_ref as string,
              remark: `Funded ${user.fullName}'s wallet`,
              token,
            },
            {
              onSuccess: data => {
                message.success(data.fundWallet.message);
                router.push("/seller/profile");
              },
              onError: (err: { message: string }) => {
                message.error(err.message);
                router.push("/seller/profile");
              },
            }
          );
        },
        onError: (err: { message: string }) => {
          message.error(err.message);
          router.push("/seller/profile");
        },
      });
    }
  }, [tx_ref]);

  return (
    <MainLayout>
      <div>
        {isLoading && <Load />}
        <p className='tw-uppercase tw-font-bold tw-text-center tw-text-2xl'>
          funding your wallet...
        </p>
      </div>
    </MainLayout>
  );
}
