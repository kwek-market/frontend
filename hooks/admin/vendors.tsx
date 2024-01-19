import { userFetcherWithAuth } from "@/helpers";
import { GET_SELLERS } from "@/store/admin/admin.queries";
import { COMPLETE_SELLER_VERIFICATION } from "@/store/seller/seller.queries";
import { useMutation, useQuery, useQueryClient } from "react-query";

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

export function useCompleteSeller() {
  return useMutation(
    (payload: { id: string; token: string }) =>
      userFetcherWithAuth(COMPLETE_SELLER_VERIFICATION, payload, payload.token),
    {
      onSuccess: () => {
        const queryClient = useQueryClient();
        queryClient.invalidateQueries("seller");
      },
    },
  );
}
