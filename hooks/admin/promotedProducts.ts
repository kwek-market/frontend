import { message } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { userFetcherWithAuth } from "../../helpers";
import { queryClient } from "../../pages/_app";
import { CREATE_ADMIN_COUPON, GET_ADMIN_PROMOTED_PRODUCTS, PROMOTE_ADMIN_PRODUCT } from "../../store/admin/admin.queries";
import { CreateCouponType } from "../../validations/createCoupon";

export const useAdminPromoteProduct = (token: string) => {
  const router = useRouter();

  return useMutation(
    (payload: CreateCouponType) => userFetcherWithAuth(PROMOTE_ADMIN_PRODUCT, payload, token),
    {
      onSuccess: data => {
        if (!data.createCoupon.status) {
          throw Error(data.createCoupon.message);
        } else {
          message.success(data.createCoupon.message);
          router.push("/admin/marketing/coupon-list");
        }

        queryClient.invalidateQueries("admin-coupon");
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
