import { userFetcherWithAuth } from "@/helpers";
import { BillingAddressType } from "@/interfaces/commonTypes";
import { BILLINGADDRESS } from "@/store/billing/billing.queries";
import { message } from "antd";
import { useMutation } from "react-query";

function useBilling(token: string, setAddressId?: any) {
  return useMutation(
    (data: BillingAddressType) =>
      userFetcherWithAuth(BILLINGADDRESS, data, token),
    {
      onSuccess: (data) => {
        message.success("Billing address added successfully");
        setAddressId && setAddressId(data.billingAddress.billingAddress.id);
      },
      onError: (error) => {
        message.error((error as any).message);
      },
    }
  );
}

export default useBilling;
