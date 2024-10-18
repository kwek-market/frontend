import { userFetcher, userFetcherWithAuth } from "@/helpers";
import { message } from "antd";
import { useMutation, useQuery } from "react-query";
import { PAGE_SIZE } from "../../constants/constants";
import { IdAndTokenPayload } from "../../interfaces/commonTypes";
import {
  GET_ALL_ORDERS,
  GET_ORDERS_ADMIN,
  GET_ORDERS_BY_ID,
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

export function useGetOrder(payload: { id: string; token?: string }) {
  const query = payload.id?.startsWith("KWEK") ? GET_ORDERS_BY_ID : GET_ORDERS_ADMIN;
  return useQuery(["orders", payload.id], () => userFetcher(query, payload), {
    keepPreviousData: false,
    enabled: !!payload.id,
  });
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
