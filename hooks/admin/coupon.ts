import { message } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { userFetcherWithAuth } from "../../helpers";
import { queryClient } from "../../pages/_app";
import { CREATE_ADMIN_COUPON, GET_ADMIN_COUPONS } from "../../store/admin/admin.queries";
import { CreateCouponType } from "../../validations/createCoupon";

export const useAdminCreateCoupon = (token: string) => {
  const router = useRouter();

  return useMutation(
    (payload: CreateCouponType) => userFetcherWithAuth(CREATE_ADMIN_COUPON, payload, token),
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

export const useGetAdminCoupons = (payload: { token?: string }) => {
  return useQuery([`admin-coupons`], () =>
    userFetcherWithAuth(GET_ADMIN_COUPONS, payload, payload.token)
  );
};
