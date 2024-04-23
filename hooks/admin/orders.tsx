import { userFetcherWithAuth } from "@/helpers";
import { useQuery } from "react-query";
import { PAGE_SIZE } from "../../constants/constants";
import { IdAndTokenPayload } from "../../interfaces/commonTypes";
import {
  GET_ALL_ORDERS,
  GET_ORDERS_ADMIN,
} from "../../store/admin/admin.queries";

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

  return useQuery(
    ["admin-orders", variables.search, variables.page],
    () =>
      userFetcherWithAuth(
        GET_ALL_ORDERS,
        variables,
        variables.token
      ) as Promise<Record<string, any>>
  );
}

export function useGetOrdersAdmin(payload: IdAndTokenPayload) {
  return useQuery(
    ["orders", "admin", payload.id],
    () =>
      userFetcherWithAuth(GET_ORDERS_ADMIN, payload, payload.token) as Promise<
        Record<string, any>
      >,
    {
      keepPreviousData: false,
      enabled: !!payload.id,
    }
  );
}
