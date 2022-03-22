import { ProductType } from "@/interfaces/commonTypes";
import { useCallback } from "react";

export default function useItemInWishlist(prod: ProductType, wishlists: any[]) {
  return useCallback(
    (id: string) => {
      if (prod !== undefined && wishlists) {
        const isFound = wishlists.find((item) => item.product.id === id);
        return isFound;
      }
    },
    [prod, wishlists]
  );
}
