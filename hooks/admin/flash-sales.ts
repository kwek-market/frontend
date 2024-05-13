import { message } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { userFetcherWithAuth } from "../../helpers";
import { queryClient } from "../../pages/_app";
import { CREATE_FLASH_SALE, GET_ADMIN_FLASH_SALES } from "../../store/admin/admin.queries";
import { CreateNewFlashSalesType } from "../../validations/createFlashSale";

export const useAdminCreateFlashSales = (token: string) => {
  const router = useRouter();

  return useMutation(
    (payload: CreateNewFlashSalesType) => userFetcherWithAuth(CREATE_FLASH_SALE, {...payload, token}, token),
    {
      onSuccess: data => {
        if (!data.newFlashSales.status) {
          throw Error(data.newFlashSales.message);
        } else {
          message.success(data.newFlashSales.message);
          router.push("/admin/flash-sales");
        }

        queryClient.invalidateQueries("admin-flash-sales");
      },
    }
  );
};

interface IPayload {
  token?: string;
  page: number;
  pageSize?: number;
}

export const useGetAdminFlashSales = (payload: IPayload) => {
  return useQuery([`admin-flash-sales`, payload], () =>
    userFetcherWithAuth(GET_ADMIN_FLASH_SALES, payload, payload.token)
  );
};
