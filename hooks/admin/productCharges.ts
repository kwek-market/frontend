import { message } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { userFetcherWithAuth } from "../../helpers";
import { queryClient } from "../../pages/_app";
import {
  CREATE_PRODUCT_CHARGE,
  GET_PRODUCT_CHARGE,
  UPDATE_PRODUCT_CHARGE,
} from "../../store/admin/admin.queries";

export interface ICreateProductCharge {
  charge?: number;
  hasFixedAmount?: boolean;
  token?: string;
}

export interface IUpdateProductCharge {
  charge?: number;
  hasFixedAmount?: boolean;
  token?: string;
  id?: string;
}

export const useCreateProductCharge = (token: string, onSuccess?: (data: any) => void) => {
  const router = useRouter();

  return useMutation(
    (payload: ICreateProductCharge) =>
      userFetcherWithAuth(CREATE_PRODUCT_CHARGE, { ...payload, token }, token),
    {
      onSuccess: data => {
        if (!data.createCharge.status) {
          throw Error(data.createCharge.message);
        } else {
          queryClient.invalidateQueries("product-charge");
          message.success(data.createCharge.message);
          if (onSuccess) onSuccess(data);
          // router.push("/admin/marketing/promoted-products");
        }
      },
    }
  );
};

export const useUpdateProductCharge = (token: string, onSuccess?: (data: any) => void) => {
  const router = useRouter();

  return useMutation(
    (payload: IUpdateProductCharge) =>
      userFetcherWithAuth(UPDATE_PRODUCT_CHARGE, { ...payload, token }, token),
    {
      onSuccess: data => {
        if (!data.updateCharge.status) {
          throw Error(data.updateCharge.message);
        } else {
          queryClient.invalidateQueries("product-charge");
          message.success(data.updateCharge.message);
          if (onSuccess) onSuccess(data);
          // router.push("/admin/marketing/promoted-products");
        }
      },
    }
  );
};

export const useGetProductCharge = (token: string) => {
  return useQuery([`product-charge`], () => userFetcherWithAuth(GET_PRODUCT_CHARGE, {}, token));
};
