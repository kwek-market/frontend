import { userFetcher } from "@/helpers";
import {
  GET_SELLER_CUSTOMERS,
  GET_SELLER_DAYS_SELLING,
  GET_SELLER_REVENUE_CHART_DATA,
  GET_SELLER_SALES_EARNINGS,
} from "@/store/seller/seller.queries";
import { useQueries } from "react-query";

export default function useHomeCard(token: string) {
  const payload = { token };
  return useQueries([
    {
      queryKey: "sales-earnings",
      queryFn: () => userFetcher(GET_SELLER_SALES_EARNINGS, payload),
    },
    {
      queryKey: "days-selling",
      queryFn: () => userFetcher(GET_SELLER_DAYS_SELLING, payload),
    },
    {
      queryKey: "customers",
      queryFn: () => userFetcher(GET_SELLER_CUSTOMERS, payload),
    },
    {
      queryKey: "revenu-data",
      queryFn: () => userFetcher(GET_SELLER_REVENUE_CHART_DATA, payload),
    },
  ]);
}
