import { userFetcherWithAuth } from "@/helpers";
import { PLACEORDER } from "@/store/billing/placeOrder.queries";
import { useRouter } from "next/router";
import { message } from "antd";
import { useMutation } from "react-query";
import { PlaceOrder } from "@/interfaces/commonTypes";

function usePlaceOrder(token: string) {
  const router = useRouter();

  return useMutation(
    (data: PlaceOrder) => userFetcherWithAuth(PLACEORDER, data, token),
    {
      onSuccess: (data) => {
        data.placeOrder.status && router.push("/orderComplete");
      },
      onError: (error) => {
        message.error(error);
      },
    }
  );
}

export default usePlaceOrder;
