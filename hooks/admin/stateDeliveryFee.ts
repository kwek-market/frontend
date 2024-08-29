import { message } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { userFetcherWithAuth } from "../../helpers";
import { queryClient } from "../../pages/_app";
import {
  CREATE_STATE_DELIVERY_FEE,
  DELETE_STATE_DELIVERY_FEE,
  STATE_DELIVERY_FEE,
  UPDATE_STATE_DELIVERY_FEE,
} from "../../store/admin/admin.queries";
import { UpdateStateDeliveryFeeType } from "../../validations/stateDeliveryFee";

export const useCreateStateDeliveryFee = (token: string) => {
  const router = useRouter();

  return useMutation(
    (payload: UpdateStateDeliveryFeeType) =>
      userFetcherWithAuth(CREATE_STATE_DELIVERY_FEE, { ...payload, token }, token),
    {
      onSuccess: data => {
        if (!data.createStateDeliveryFee.status) {
          throw Error(data.createStateDeliveryFee.message);
        } else {
          message.success(data.createStateDeliveryFee.message);
          // router.push("/admin/state-delivery-fee");
        }

        queryClient.invalidateQueries("state-delivery-fee");
      },
    }
  );
};

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
          // router.push("/admin/state-delivery-fee");
        }

        queryClient.invalidateQueries("state-delivery-fee");
      },
    }
  );
};

export const useDeleteStateDeliveryFee = (token: string) => {
  const router = useRouter();

  return useMutation(
    (payload: UpdateStateDeliveryFeeType) =>
      userFetcherWithAuth(DELETE_STATE_DELIVERY_FEE, { ...payload, token }, token),
    {
      onSuccess: data => {
        if (!data.deleteStateDeliveryFee.status) {
          throw Error(data.deleteStateDeliveryFee.message);
        } else {
          message.success(data.deleteStateDeliveryFee.message);
          // router.push("/admin/state-delivery-fee");
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
  return useQuery([`state-delivery-fee`, payload], async () => {
    try {
      const data = await userFetcherWithAuth(STATE_DELIVERY_FEE, {}, payload.token);

      const formattedData = data?.stateDeliveryFees?.map(stateDeliveryFee => {
        const deliveryFees = stateDeliveryFee?.deliveryFees?.filter(fee => !!fee?.city);

        return { ...stateDeliveryFee, deliveryFees };
      });

      return { ...data, stateDeliveryFees: formattedData };
    } catch (error) {
      throw new Error(error?.message);
    }
  });
};
