import { QueryClient } from "react-query";
import { userFetcher } from "@/helpers";
import { GETCARTITEM } from "@/store/cart/cart.queries";
import { CartItemType, Order } from "@/interfaces/commonTypes";
import { useEffect, useState } from "react";

export default function useCartItems(order: Order) {
  const [items, setItems] = useState<CartItemType[]>([] as CartItemType[]);
  const [loading, setLoading] = useState(true);
  const queryClient = new QueryClient();

  useEffect(() => {
    const itemsArray = [];
    (async () => {
      try {
        setLoading(true);
        for (let i = 0; i < order.cartItems.length; i++) {
          const data = await queryClient.fetchQuery("cart-item", () =>
            userFetcher(GETCARTITEM, { id: order.cartItems[i].id })
          );
          itemsArray.push(data.cartitem);
        }
        setLoading(false);
        setItems(itemsArray);
      } catch (err) {
        itemsArray.push({});
      }
    })();
    return () => {
      queryClient.cancelQueries("cart-item");
    };
  }, [order]);

  return { items, loading };
}
