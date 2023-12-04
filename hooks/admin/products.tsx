import { userFetcherWithAuth, userFetcher } from "@/helpers";
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT_REVIEWS,
} from "@/store/admin/admin.queries";
import { useQuery } from "react-query";

export type PayloadType = {
  pageSize: number;
  page: number;
  token?: string;
};
export type ReviewPayloadType = {
  pageSize: number;
  page: number;
  productId: string;
  sortBy: string;
};

export const useGetProducts = (payload: PayloadType) => {
  return useQuery(["products-admin", payload], () =>
    userFetcher(GET_PRODUCTS, payload)
  );
};

export const useGetProduct = (payload: { id: string }) => {
  return useQuery(["product-admin", payload], () =>
    userFetcher(GET_PRODUCT, payload)
  );
};

export const useGetProductReviews = (payload: ReviewPayloadType) => {
  return useQuery(["product-reviews-admin", payload], () =>
    userFetcher(GET_PRODUCT_REVIEWS, payload)
  );
};
