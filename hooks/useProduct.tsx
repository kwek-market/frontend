import { userFetcher } from "@/helpers";
import { ProductType } from "@/interfaces/commonTypes";
import { GetProduct } from "@/store/product/product.queries";
import { useEffect, useState } from "react";
import { QueryClient, useQuery } from "react-query";

function useProduct(payload: { id: string }) {
  const queryClient = new QueryClient();
  const { id } = payload;
  const [productData, setProductData] = useState({
    loading: false,
    error: null,
    product: {} as ProductType,
  });

  useEffect(() => {
    if (!payload.id) return;
    (async () => {
      try {
        setProductData({ ...productData, loading: true });
        const data = await queryClient.fetchQuery(["product"], () =>
          userFetcher(GetProduct, payload)
        );
        setProductData({
          ...productData,
          error: null,
          loading: false,
          product: data.product,
        });
      } catch (err) {
        setProductData({ ...productData, loading: false, error: err });
      }
    })();

    return () => {
      queryClient.cancelQueries(["product"]);
    };
  }, [id]);

  return productData;
}

export default useProduct;

export function useGetProduct(id: string, enabled?: boolean) {
  console.log("🚀 ~~ useGetProduct ~~ id:", id);

  return useQuery(["single-product", id], () => userFetcher(GetProduct, { id }), {
    enabled: !!id,
  });
}
