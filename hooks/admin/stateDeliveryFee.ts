import { message } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { userFetcherWithAuth } from "../../helpers";
import { queryClient } from "../../pages/_app";
import { GET_STATE_DELIVERY_FEE, UPDATE_STATE_DELIVERY_FEE } from "../../store/admin/admin.queries";
import { UpdateStateDeliveryFeeType } from "../../validations/updateStateDeliveryFee";

export const useUpdateStateDeliveryFee = (token: string) => {
  const router = useRouter();

  return useMutation(
    (payload: UpdateStateDeliveryFeeType) =>
      userFetcherWithAuth(UPDATE_STATE_DELIVERY_FEE, { ...payload, token }, token),
    {
      onSuccess: data => {
        if (!data.updateStateDeliveryFee.status) {
          throw Error(data.updateStateDeliveryFee.message);
        } else {
          message.success(data.updateStateDeliveryFee.message);
          router.push("/admin/state-delivery-fee");
        }

        queryClient.invalidateQueries("state-delivery-fee");
      },
    }
  );
};

interface IPayload {
  token?: string;
}

export const useGetStateDeliveryFee = (payload: IPayload) => {
  return useQuery([`state-delivery-fee`, payload], () =>
    userFetcherWithAuth(GET_STATE_DELIVERY_FEE, {}, payload.token)
  );
};
