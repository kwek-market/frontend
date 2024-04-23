import { userFetcherWithAuth } from "@/helpers";
import { PaymentLinkType } from "@/interfaces/commonTypes";
import { PAYMENTLINK } from "@/store/billing/paymentLink.queries";
import { message } from "antd";
import { useMutation } from "react-query";

function usePayment(token: string) {
  return useMutation(
    (data: PaymentLinkType) => userFetcherWithAuth(PAYMENTLINK, data, token),
    {
      onSuccess: (data: Record<string, any>) => {
        data.paymentLink.status &&
          window.location.assign(data.paymentLink.paymentLink);
      },
      onError: (error) => {
        message.error((error as any).message);
      },
    }
  );
}

export default usePayment;
