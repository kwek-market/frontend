import { userFetcherWithAuth } from "@/helpers";
import { GET_SELLERS } from "@/store/admin/admin.queries";
import { RootState } from "@/store/rootReducer";
import {
  ADMIN_FLAG_VENDOR,
  COMPLETE_SELLER_VERIFICATION,
  REJECT_SELLER_VERIFICATION,
} from "@/store/seller/seller.queries";
import { message } from "antd";
import { QueryClient, useMutation, useQuery } from "react-query";
import { useSelector } from "react-redux";

export type USERTYPE = {
  token: string;
  seller?: boolean;
  sellerIsRejected?: boolean;
  customer?: boolean;
  active?: boolean;
  redFlagged?: boolean;
  sellerIsVerified?: boolean;
  page?: number;
  pageSize?: number;
  search?: string;
};

export function useGetSellers(payload: USERTYPE) {
  return useQuery(
    ["seller", JSON.stringify(payload)],
    () => userFetcherWithAuth(GET_SELLERS, payload, payload.token),
    {
      keepPreviousData: false,
    }
  );
}

export function useCompleteSeller() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  return useMutation(
    (payload: { email: string }) =>
      userFetcherWithAuth(COMPLETE_SELLER_VERIFICATION, payload, token),
    {
      onSuccess: data => {
        if (!data?.completeSellerVerification?.status) {
          throw Error(data?.completeSellerVerification?.message);
        } else {
          message.success({
            content: data?.completeSellerVerification?.message,
            key: "vendor",
            duration: 3000,
          });
        }

        const queryClient = new QueryClient();
        queryClient.invalidateQueries("seller");
      },
      onError(error) {
        message.error({ content: (error as any).message, key: "vendor", duration: 3000 });
      },
      onMutate() {
        message.loading({ content: "loading..", key: "vendor", duration: 3000 });
      },
    }
  );
}

export function useRejectSeller() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  return useMutation(
    (payload: { email: string }) => userFetcherWithAuth(REJECT_SELLER_VERIFICATION, payload, token),
    {
      onSuccess: data => {
        if (!data?.rejectSellerVerification?.status) {
          throw Error(data?.rejectSellerVerification?.message);
        } else {
          message.success({
            content: data?.rejectSellerVerification?.message,
            key: "vendor",
            duration: 3000,
          });
        }

        const queryClient = new QueryClient();
        queryClient.invalidateQueries("seller");
      },
      onError(error) {
        message.error({ content: (error as any).message, key: "vendor", duration: 3000 });
      },
      onMutate() {
        message.loading({ content: "loading..", key: "vendor", duration: 3000 });
      },
    }
  );
}

export function useFlagVendor() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  return useMutation(
    (payload: { id: string; redFlaggedVendor: boolean; token?: string }) =>
      userFetcherWithAuth(ADMIN_FLAG_VENDOR, { ...payload, token }, token),
    {
      onSuccess: data => {
        if (!data?.flagVendor?.status) {
          throw Error(data?.flagVendor?.message);
        } else {
          message.success({
            content: data?.flagVendor?.message,
            key: "vendor",
            duration: 300,
          });
        }

        const queryClient = new QueryClient();
        queryClient.invalidateQueries(["seller"]);
      },
      onError(error) {
        message.error({ content: (error as any).message, key: "vendor", duration: 300 });
      },
      onMutate() {
        message.loading({ content: "loading..", key: "vendor", duration: 300 });
      },
    }
  );
}
