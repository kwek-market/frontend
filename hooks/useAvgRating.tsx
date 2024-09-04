import { ProductType } from "@/interfaces/commonTypes";

export default function useAvgRating(product: ProductType) {
  const totalRating = product?.productRating?.reduce((a, b) => a + b?.rating, 0);
  const avg = totalRating / product?.productRating?.length;
  return avg;
}
