import { useRouter } from "next/router";
import { useEffect } from "react";

export interface IPagination {
  page?: number;
  pageSize?: number;
  search?: string;
  orderBy?: string;
}

export const usePagination = (data: IPagination) => {
  const router = useRouter();
  const params = new URLSearchParams();

  if (!data.page) {
    params.append("page", "1");
  }

  const nextPage = page => {
    params.append("page", `${Number(page) + 1}`);
  };

  const prevPage = page => {
    params.append("page", `${Number(page) - 1}`);
  };

  useEffect(() => {}, [router.query]);

  return { nextPage, prevPage, params };
};
