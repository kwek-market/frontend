import { ProductType } from "@/interfaces/commonTypes";
import React, { useMemo } from "react";

export default function useAvgRating(product: ProductType) {
  return useMemo(() => {
    const totalRating = product.productRating.reduce((a, b) => a + b.rating, 0);
    const avg = totalRating / product.productRating.length;
    return avg;
  }, product.productRating);
}
