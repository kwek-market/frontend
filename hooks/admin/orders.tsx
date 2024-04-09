import { userFetcherWithAuth } from "@/helpers";
import { useQuery } from "react-query";
import { GET_ALL_ORDERS } from "../../store/admin/admin.queries";
import { PAGE_SIZE } from "../../constants/constants";

interface PayloadType {
  token: string;
  page?: number;
  pageSize?: number;
  search?: string;
  orderBy?: string;
  productId?: string;
}
export function useGetAllOrders(variables: PayloadType) {
  if (!variables.page) {
    variables.page = 1;
  }

  if (!variables.pageSize) {
    variables.pageSize = PAGE_SIZE;
  }

  return useQuery(["admin-orders", variables.search, variables.page], () =>
    userFetcherWithAuth(GET_ALL_ORDERS, variables, variables.token)
  );
}
