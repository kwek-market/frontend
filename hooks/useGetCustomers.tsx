import { useQuery } from "react-query";
import { USERTYPE } from "./admin/vendors";
import { userFetcherWithAuth } from "@/helpers";
import { GET_CUSTOMERS } from "@/store/admin/admin.queries";

export function useGetCustomers(payload: USERTYPE) {
  return useQuery(
    ["customer", payload.page],
    () => userFetcherWithAuth(GET_CUSTOMERS, payload, payload.token),
    {
      keepPreviousData: false,
    },
  );
}
