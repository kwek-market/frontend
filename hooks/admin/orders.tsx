import { userFetcherWithAuth } from "@/helpers";
import { message } from "antd";
import { useMutation, useQuery } from "react-query";
import { PAGE_SIZE } from "../../constants/constants";
import { IdAndTokenPayload } from "../../interfaces/commonTypes";
import {
  CREATE_FLASH_SALE,
  GET_ALL_ORDERS,
  GET_ORDERS_ADMIN,
  UPDATE_DELIVERY_STATUS,
} from "../../store/admin/admin.queries";
import { UpdateOrderDeliveryStatusType } from "../../validations/orders";

interface PayloadType {
  token: string;
  page?: number;
  pageSize?: number;
  search?: string;
  orderBy?: string;
  productId?: string;
}
export function useGetAllOrders(variables: PayloadType) {
  if (!variables.page) {
    variables.page = 1;
  }

  if (!variables.pageSize) {
    variables.pageSize = PAGE_SIZE;
  }

  return useQuery(["admin-orders", variables], () =>
    userFetcherWithAuth(GET_ALL_ORDERS, variables, variables.token)
  );
}

export function useGetOrdersAdmin(payload: IdAndTokenPayload) {
  return useQuery(
    ["orders", "admin", payload.id],
    () => userFetcherWithAuth(GET_ORDERS_ADMIN, payload, payload.token),
    {
      keepPreviousData: false,
      enabled: !!payload.id,
    }
  );
}

export const useUpdateOrderDeliveryStatus = () => {
  return useMutation(
    (payload: UpdateOrderDeliveryStatusType) =>
      userFetcherWithAuth(UPDATE_DELIVERY_STATUS, { ...payload }, payload.token),
    {
      onSuccess: data => {
        if (!data.updateDeliveryStatus.status) {
          throw Error(data.updateDeliveryStatus.message);
        } else {
          message.success(data.updateDeliveryStatus.message);
        }
      },
    }
  );
};
