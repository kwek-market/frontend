import { useCallback } from "react";

export default function useItemInCart(prod: any, cart: any[]) {
  return useCallback(
    (id: string) => {
      if (prod !== undefined && cart) {
        const isFound = cart.find((item) => item.product.options[0].id === id);
        return isFound;
      }
    },
    [prod, cart]
  );
}
