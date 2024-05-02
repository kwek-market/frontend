import { message } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { userFetcherWithAuth } from "../../helpers";
import { queryClient } from "../../pages/_app";
import {
  GET_ADMIN_PROMOTED_PRODUCTS,
  PROMOTE_ADMIN_PRODUCT,
} from "../../store/admin/admin.queries";
import { PromoteProductType } from "../../validations/promoteProduct";

export const useAdminPromoteProduct = (token: string) => {
  const router = useRouter();

  return useMutation(
    (payload: PromoteProductType) =>
      userFetcherWithAuth(PROMOTE_ADMIN_PRODUCT, { ...payload, token }, token),
    {
      onSuccess: data => {
        if (!data.promoteProduct.status) {
          throw Error(data.promoteProduct.message);
        } else {
          message.success(data.promoteProduct.message);
          router.push("/admin/marketing/promoted-products");
        }

        queryClient.invalidateQueries("admin-promoted-products");
      },
    }
  );
};

interface IPayload {
  token?: string;
  page: number;
  pageSize?: number;
  search?: string;
}

export const useGetAdminPromotedProducts = (payload: IPayload) => {
  return useQuery([`admin-promoted-products`, payload], () =>
    userFetcherWithAuth(GET_ADMIN_PROMOTED_PRODUCTS, payload, payload.token)
  );
};
