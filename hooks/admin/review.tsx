import { userFetcherWithAuth } from "@/helpers";
import { GET_REVIEWS } from "@/store/admin/admin.queries";
import { useQuery } from "react-query";

export type PayloadType = {
  pageSize: number;
  page: number;
  token: string;
  sortBy?: string;
};

export const useGetReviews = (payload: PayloadType) => {
  return useQuery(["review-admin", payload], () =>
    userFetcherWithAuth(GET_REVIEWS, payload, payload.token),
  );
};
