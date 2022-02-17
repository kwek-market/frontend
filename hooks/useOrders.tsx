import { userFetcherWithAuth } from "@/helpers";
import { GETORDERS } from "@/store/billing/order.queries";
import { useQuery } from "react-query";

function useOrders(token: string) {
  return useQuery(
    ["orders", token],
    () => userFetcherWithAuth(GETORDERS, { token }, token),
    { staleTime: Infinity, cacheTime: 1000 * 60 * 20 }
  );
}

export default useOrders;
