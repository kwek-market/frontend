import { userFetcherWithAuth } from "@/helpers";
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
  UPDATE_CATEGORY,
} from "@/store/admin/admin.queries";
import {
  CreateCategoryType,
  UpdateCategoryType,
} from "@/validations/createCategory";
import { message } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../pages/_app";

type SearchProps = {
  search: string;
  token: string;
};

export interface CreateCategoryPayload {
  name: string;
  parent?: string;
  publishDate?: string;
  visibility: string;
  icon?: string;
}

type UpdatePayload = {
  id: string;
  name: string;
  parent: string;
  publishDate: string;
  visibility: string;
};

export const useGetAdminCategories = (payload: SearchProps) => {
  return useQuery(
    [`admin-categories`, payload.search],
    () =>
      userFetcherWithAuth(GET_CATEGORIES, payload, payload.token) as Promise<
        Record<string, any>
      >
  );
};

export const useCreateCategory = (token: string) => {
  const router = useRouter();

  return useMutation(
    (payload: CreateCategoryType) =>
      userFetcherWithAuth(CREATE_CATEGORY, payload, token),
    {
      onSuccess: (data: Record<string, any>) => {
        if (!data.addCategory.status) {
          throw Error(data.addCategory.message);
        } else {
          message.success(data.addCategory.message);
          router.push("/admin/categories/category-list");
        }

        queryClient.invalidateQueries("admin-categories");
      },
    }
  );
};

export const useDeleteCategory = () => {
  return useMutation(
    (payload: { id: string; token: string }) =>
      userFetcherWithAuth(DELETE_CATEGORY, payload, payload.token),
    {
      onSuccess: (data: Record<string, any>) => {
        if (!data.deleteCategory.status) {
          message.error({
            key: "delete-category",
            content: data.deleteCategory.message,
            duration: 3,
          });
        } else {
          message.success({
            key: "delete-category",
            content: data.deleteCategory.message,
            duration: 3,
          });
        }

        queryClient.invalidateQueries("admin-categories");
      },
      onMutate(variables) {
        message.loading({
          key: "delete-category",
          content: "Loading..",
          duration: 3,
        });
      },
    }
  );
};

export const useUpdateCategory = (token: string) => {
  const router = useRouter();

  return useMutation(
    (payload: UpdateCategoryType) =>
      userFetcherWithAuth(UPDATE_CATEGORY, payload, token),
    {
      onSuccess: (data: Record<string, any>) => {
        if (!data.updateCategory.status) {
          throw Error(data.updateCategory.message);
        } else {
          message.success(data.updateCategory.message);
          router.push("/admin/categories/category-list");
        }

        queryClient.invalidateQueries("admin-categories");
      },
    }
  );
};
