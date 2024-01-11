import { userFetcherWithAuth } from "@/helpers";
import { GET_SELLERS } from "@/store/admin/admin.queries";
import { useQuery } from "react-query";

type SELLERSTYPE = {
  token: string;
  seller: boolean;
  active: boolean;
  redFlagged: boolean;
  page: number;
  pageSize: number;
};

export function useGetSellers(payload: SELLERSTYPE) {
  return useQuery(
    ["seller", payload.page],
    () => userFetcherWithAuth(GET_SELLERS, payload, payload.token),
    {
      keepPreviousData: true,
    },
  );
}
