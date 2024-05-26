import { message } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { userFetcherWithAuth } from "../../helpers";
import { getCouponEmailTemplate } from "../../helpers/emailTemplates";
import { queryClient } from "../../pages/_app";
import { CREATE_ADMIN_COUPON, GET_ADMIN_COUPONS } from "../../store/admin/admin.queries";
import { CreateCouponType } from "../../validations/createCoupon";
import { useAdminSendEmails } from "./email";

export const useAdminCreateCoupon = (token: string, onSuccess?: (data: any) => void) => {
  const router = useRouter();
  const { mutateAsync } = useAdminSendEmails(token);

  return useMutation(
    (payload: CreateCouponType) => userFetcherWithAuth(CREATE_ADMIN_COUPON, payload, token),
    {
      onSuccess: async data => {
        if (!data.createCoupon.status) {
          throw Error(data.createCoupon.message);
        } else {
          message.success(data.createCoupon.message);
          // router.push("/admin/marketing/coupon-list");
        }

        if (data?.createCoupon?.coupon) {
          message.loading({ content: "Sending emails to the users", key: "email" });
          const { code, value, userList, validUntil } = data.createCoupon.coupon;

          await mutateAsync({
            subject: "Exclusive Offer Just for You! Save Big at Kwek Market",
            template: getCouponEmailTemplate({
              code,
              discount: value,
              expirationDate: new Date(validUntil).toDateString(),
            }),
            token,
            userList,
          });

          router.push("/admin/marketing/coupon-list");
        }

        if (onSuccess) {
          onSuccess(data);
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
}

export const useGetAdminCoupons = (payload: IPayload) => {
  return useQuery([`admin-coupons`], () =>
    userFetcherWithAuth(GET_ADMIN_COUPONS, payload, payload.token)
  );
};
