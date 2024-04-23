import { userFetcherWithAuth } from "@/helpers";
import { GETORDER } from "@/store/billing/order.queries";
import { useQuery } from "react-query";

function useOrder(token: string, id: string) {
  return useQuery(
    "order",
    () =>
      userFetcherWithAuth(GETORDER, { token, id }, token) as Promise<
        Record<string, any>
      >,
    { staleTime: Infinity, cacheTime: 1000 * 60 * 20, enabled: !!id }
  );
}

export default useOrder;
