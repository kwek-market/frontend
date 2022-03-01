import { userFetcher } from "@/helpers";
import { PROMOTE_PRODUCT } from "@/store/seller/seller.queries";
import { useMutation } from "react-query";

type PromoteData = {
  amount: number;
  days: number;
  productId: string;
  token: string;
};

export default function usePromoteProduct() {
  return useMutation((payload: PromoteData) =>
    userFetcher(PROMOTE_PRODUCT, payload)
  );
}
