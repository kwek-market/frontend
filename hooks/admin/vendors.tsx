import { userFetcherWithAuth } from "@/helpers";
import { GET_SELLERS } from "@/store/admin/admin.queries";
import { RootState } from "@/store/rootReducer";
import { COMPLETE_SELLER_VERIFICATION } from "@/store/seller/seller.queries";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";

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
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  return useMutation(
    (payload: { email: string; isVerified: boolean }) =>
      userFetcherWithAuth(COMPLETE_SELLER_VERIFICATION, payload, token),
    {
      onSuccess: () => {
        const queryClient = useQueryClient();
        queryClient.invalidateQueries("seller");
      },
    },
  );
}
