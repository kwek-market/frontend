import { userFetcherWithAuth } from "@/helpers";
import { BILLINGADDRESSUPDATE } from "@/store/billing/billing.queries";
import { message } from "antd";
import { useMutation } from "react-query";

export type DataType = {
  address: string;
  addressId: string;
  city: string;
  contact: string;
  fullName: string;
  state: string;
};

export default function useBillingUpdate(token: string) {
  return useMutation(
    (data: DataType) => userFetcherWithAuth(BILLINGADDRESSUPDATE, data, token),
    {
      onSuccess: (data: Record<string, any>) => {
        message.success(data.billingAddressUpdate.message);
      },
      onError: (error) => {
        message.error((error as any).message);
      },
    }
  );
}
