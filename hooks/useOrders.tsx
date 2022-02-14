import { userFetcherWithAuth } from "@/helpers";
import { GETORDER } from "@/store/billing/order.queries";
import { message } from "antd";
import { useMutation, useQuery } from "react-query";

function useOrders(token: string) {
  return useQuery(
    ["orders", token],
    () => userFetcherWithAuth(GETORDER, { token }, token),
    { staleTime: Infinity, cacheTime: 1000 * 60 * 20 }
  );
}

export default useOrders;
