import { userFetcherWithAuth } from "@/helpers";
import { GET_CUSTOMERS } from "@/store/admin/admin.queries";
import { useQuery } from "react-query";
import { USERTYPE } from "./admin/vendors";

export function useGetCustomers(payload: USERTYPE) {
  return useQuery(
    ["customers", payload],
    () => userFetcherWithAuth(GET_CUSTOMERS, payload, payload.token),
    {
      keepPreviousData: false,
    }
  );
}
