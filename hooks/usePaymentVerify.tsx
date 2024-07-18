import { userFetcherWithAuth } from "@/helpers";
import { VerifyPaymentType } from "@/interfaces/commonTypes";
import { VERIFYPAYMENT } from "@/store/billing/paymentLink.queries";
import { message } from "antd";
import { useMutation } from "react-query";

function usePaymentVerify(token: string) {
  return useMutation(
    (data: VerifyPaymentType) => {
      console.log("🚀 ~~ usePaymentVerify ~~ data:", data);

      return userFetcherWithAuth(VERIFYPAYMENT, data, token);
    },
    {
      onSuccess: res => {
        message.success(res.verifyPayment.message);
      },
      onError: error => {
        message.error((error as any).message);
      },
    }
  );
}

export default usePaymentVerify;
