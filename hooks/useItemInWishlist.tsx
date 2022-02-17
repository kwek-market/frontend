import { useCallback } from "react";

export default function useItemInWishlist(prod: any, wishlists: any[]) {
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
