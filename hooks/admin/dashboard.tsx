import { userFetcherWithAuth } from "@/helpers";
import {
  GET_TOTAL_ORDERS,
  GET_TOTAL_SALES,
  GET_AVERAGE_ORDER_VALUE,
  GET_TOTAL_ACTIVE_CUSTOMERS,
  GET_TOTAL_REVENUE,
  GET_RECENT_TRANSACTIONS,
} from "@/store/admin/admin.queries";
import { useQuery } from "react-query";

export type PayloadType = {
  startDate: string;
  endDate: string;
  token: string;
};

export type PayloadType2 = {
  pageSize: number;
  page: number;
  token: string;
};

export const useGetTotalOrders = (payload: PayloadType) => {
  return useQuery(["total-orders-admin", payload], () =>
    userFetcherWithAuth(GET_TOTAL_ORDERS, payload, payload.token)
  );
};

export const useGetTotalSales = (payload: PayloadType) => {
  return useQuery(["total-sales-admin", payload], () =>
    userFetcherWithAuth(GET_TOTAL_SALES, payload, payload.token)
  );
};

export const useGetAverageOrderValues = (payload: PayloadType) => {
  return useQuery(["average-order-value-admin", payload], () =>
    userFetcherWithAuth(GET_AVERAGE_ORDER_VALUE, payload, payload.token)
  );
};

export const useGetTotalActiveCustomers = (payload: PayloadType) => {
  return useQuery(["total-active-customers-admin", payload], () =>
    userFetcherWithAuth(GET_TOTAL_ACTIVE_CUSTOMERS, payload, payload.token)
  );
};

export const useGetTotalRevenue = (payload: { token: string }) => {
  return useQuery(["total-revenue", payload], () =>
    userFetcherWithAuth(GET_TOTAL_REVENUE, payload, payload.token)
  );
};

export const useGetRecentTransactions = (payload: PayloadType2) => {
  return useQuery(["recent-transactions", payload], () =>
    userFetcherWithAuth(GET_RECENT_TRANSACTIONS, payload, payload.token)
  );
};
