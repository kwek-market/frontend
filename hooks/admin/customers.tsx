import { useQuery } from "react-query";
import { userFetcherWithAuth } from "../../helpers";
import { GET_CUSTOMER_ORDERS, GET_CUSTOMER_TOTAL_ORDERS } from "../../store/admin/admin.queries";
import { IPagination } from "../usePagination";

interface IdAndTokenPayload {
  id: string;
  token: string;
}

export function useGetCustomerTotalOrders(payload: IdAndTokenPayload) {
  return useQuery(
    ["customer", "total-orders", payload.id],
    () => userFetcherWithAuth(GET_CUSTOMER_TOTAL_ORDERS, payload, payload.token),
    {
      keepPreviousData: false,
      enabled: !!payload.id,
    }
  );
}

export function useGetCustomerOrders(payload: IPagination & { token: string; id: string }) {
  return useQuery(
    ["customer", "orders", payload],
    () =>
      userFetcherWithAuth(GET_CUSTOMER_ORDERS, { ...payload, token: payload.token }, payload.token),
    {
      keepPreviousData: false,
      enabled: !!payload.id,
    }
  );
}
