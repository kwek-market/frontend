import { userFetcherWithAuth } from "@/helpers";
import { PLACEORDER } from "@/store/billing/placeOrder.queries";
import { useRouter } from "next/router";
import { message } from "antd";
import { QueryClient, useMutation } from "react-query";
import { PlaceOrder } from "@/interfaces/commonTypes";

function usePlaceOrder(token: string) {
  const router = useRouter();
  const queryClient = new QueryClient();

  return useMutation(
    (data: PlaceOrder) => userFetcherWithAuth(PLACEORDER, data, token),
    {
      onSuccess: (data) => {
        data.placeOrder.status &&
          router.push(
            `/cart/order-complete?orderId=${data.placeOrder.orderId}`
          );
        queryClient.invalidateQueries("orders");
      },
      onError: (error) => {
        message.error((error as any).message);
      },
    }
  );
}

export default usePlaceOrder;
