import { userFetcherWithAuth } from "@/helpers";
import {
  CATEGORIES,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "@/store/admin/admin.queries";
import { CreateCategoryType, UpdateCategoryType } from "@/validations/createCategory";
import { useMutation, useQuery, useQueryClient } from "react-query";

type SearchProps = {
  search: string;
  token: string;
};

type UpdatePayload = {
  id: string;
  name: string;
  parent: string;
  publishDate: string;
  visibility: string;
};

export const useGetAdminCategories = (payload: SearchProps) => {
  return useQuery(["admin-categories", payload], () =>
    userFetcherWithAuth(CATEGORIES, payload, payload.token),
  );
};

export const useCreateCategory = (token: string) => {
  return useMutation(
    (payload: CreateCategoryType) =>
      userFetcherWithAuth(CREATE_CATEGORY, payload, token),
    {
      onSuccess: () => {
        const queryClient = useQueryClient();
        queryClient.invalidateQueries("admin-categories");
      },
    },
  );
};

export const useDeleteCategory = () => {
  return useMutation(
    (payload: { id: string; token: string }) =>
      userFetcherWithAuth(DELETE_CATEGORY, payload, payload.token),
    {
      onSuccess: () => {
        const queryClient = useQueryClient();
        queryClient.invalidateQueries("admin-categories");
      },
    },
  );
};

export const useUpdateCategory = (token: string) => {
  return useMutation(
    (payload: UpdateCategoryType) =>
      userFetcherWithAuth(UPDATE_CATEGORY, payload, token),
    {
      onSuccess: () => {
        const queryClient = useQueryClient();
        queryClient.invalidateQueries("admin-categories");
      },
    },
  );
};
