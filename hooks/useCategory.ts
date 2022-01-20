import { userFetcher } from "@/helpers";
import { CATEGORY } from "@/store/category/categories.queries";
import React from "react";
import { useQuery } from "react-query";

function useCategory(payload: { id: string }) {
  return useQuery(["category"], () => userFetcher(CATEGORY, payload));
}

export default useCategory;
