import { useQuery } from "react-query";
import { userFetcherWithAuth } from "../../helpers";
import {
  GET_REFUNDS,
  GET_REFUND_REQUESTS,
  GET_WALLET_TRANSACTIONS,
} from "../../store/admin/admin.queries";

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

export const useGetRefundRequests = (payload: IPayload) => {
  return useQuery([`refund-requests`, payload], () =>
    userFetcherWithAuth(GET_REFUND_REQUESTS, { ...payload, token: payload.token }, payload.token)
  );
};

export const useGetRefunds = (payload: IPayload) => {
  return useQuery([`refunds`, payload], () =>
    userFetcherWithAuth(GET_REFUNDS, { ...payload, token: payload.token }, payload.token)
  );
};
