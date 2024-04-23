import { userFetcherWithAuth } from "@/helpers";
import { BILLINGADDRESSDELETE } from "@/store/billing/billing.queries";
import { message } from "antd";
import { useMutation } from "react-query";

function useBillingDelete(token: string) {
  return useMutation(
    (data: { addressId: string }) =>
      userFetcherWithAuth(BILLINGADDRESSDELETE, data, token),
    {
      onSuccess: (data: Record<string, any>) => {
        message.success(data.billingAddressDelete.message);
      },
      onError: (error) => {
        message.error((error as any).message);
      },
    }
  );
}

export default useBillingDelete;
