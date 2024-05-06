import { useQuery } from "react-query";
import { userFetcherWithAuth } from "../../helpers";
import { GET_WALLET_TRANSACTIONS } from "../../store/admin/admin.queries";

interface IPayload {
  token?: string;
  page: number;
  pageSize?: number;
  search?: string;
  sortBy?: string;
}

export const useGetWalletTransactions = (payload: IPayload) => {
  return useQuery([`wallet-transactions`, payload], () =>
    userFetcherWithAuth(
      GET_WALLET_TRANSACTIONS,
      { ...payload, token: payload.token },
      payload.token
    )
  );
};
