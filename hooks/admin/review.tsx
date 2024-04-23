import { userFetcherWithAuth } from "@/helpers";
import { GET_PRODUCT_REVIEWS } from "@/store/admin/admin.queries";
import { useQuery } from "react-query";

export type PayloadType = {
  pageSize: number;
  page: number;
  token: string;
  sortBy?: string;
};

export const useGetReviews = (payload: PayloadType) => {
  return useQuery(
    ["review-admin", payload],
    () =>
      userFetcherWithAuth(
        GET_PRODUCT_REVIEWS,
        payload,
        payload.token
      ) as Promise<Record<string, any>>
  );
};
