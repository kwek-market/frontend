import { userFetcher } from "@/helpers";
import {
  SubCategoriesType,
  UploadProductProps,
} from "@/interfaces/commonTypes";
import { CATEGORY } from "@/store/category/categories.queries";
import { RootState } from "@/store/rootReducer";
import React, { useState } from "react";
import { QueryClient } from "react-query";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import Load from "../Loader/Loader";

function ProductCategory({
  submitDetails,
  setSubmitDetails,
}: UploadProductProps) {
  const { categories } = useSelector((state: RootState) => state);
  const queryClient = new QueryClient();
  const [loading, setLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [subCategoryValue, setSubCategoryValue] = useState<string[]>(
    [] as string[]
  );
  const [subCategories, setSubCategories] = useState<SubCategoriesType[]>(
    [] as SubCategoriesType[]
  );

  async function getSubCategories(id: string, index?: number) {
    const { message } = await import("antd");
    try {
      setLoading(true);
      const data =
        id &&
        (await queryClient.fetchQuery("sub-category", () =>
          userFetcher(CATEGORY, { id })
        ));
      setLoading(false);
      (data as Record<string, any>).category.child.length > 0
        ? setSubCategories((prev) => {
            // find the one that was clicked, then replace the values,
            // and clear the values in the array after it
            if (index === undefined) {
              return [(data as Record<string, any>)?.category];
            }
            if (prev[index + 1]) {
              subCategories.splice(
                index + 1,
                subCategories.length - 1,
                (data as Record<string, any>).category
              );
              return subCategories;
            }
            return [...prev, (data as Record<string, any>).category];
          })
        : setSubmitDetails({
            ...submitDetails,
            subcategory: (data as Record<string, any>).category.id,
          });
    } catch (error) {
      setLoading(false);
      message.error(error.message);
    }
  }

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setCategory(e.target.value);
    setSubmitDetails({
      ...submitDetails,
      category: e.target.value,
    });
    getSubCategories(e.target.value);
  }

  function handleSubCategoryChange(
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) {
    setSubCategoryValue((prev) => {
      // replace the value in the array if there's an existing value and
      // remove the values after it
      if (subCategoryValue[index]) {
        subCategoryValue.splice(
          index,
          subCategories.length - 1,
          e.target.value
        );
        return subCategoryValue;
      }
      return [...prev, e.target.value];
    });
    getSubCategories(e.target.value, index);
  }

  return (
    <div className="tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md">
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-p-3 tw-border-b tw-border-grey-kwek700">
        <p className="tw-font-semibold tw-capitalize tw-text-lg tw-mb-0">
          product category
        </p>
      </div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-3 tw-mt-3">
        <label className="tw-text-base tw-font-medium tw-capitalize">
          {" "}
          Main Category <br />
          <select
            className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
            value={category}
            onChange={(e) => handleCategoryChange(e)}
            required
          >
            <option>Select Main Category</option>
            {categories.categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>

        {subCategories.length > 0 &&
          subCategories?.map((cat, index) => (
            <label
              key={v4()}
              className="tw-text-base tw-font-medium tw-capitalize"
            >
              {" "}
              Sub Category <br />
              <select
                className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
                required
                value={subCategoryValue[index]}
                onChange={(e) => handleSubCategoryChange(e, index)}
              >
                <option>select subcategory</option>
                {cat?.child.map((subcat) => (
                  <option key={v4()} value={subcat.id}>
                    {subcat.name}
                  </option>
                ))}
              </select>
            </label>
          ))}
      </div>
      {loading && <Load />}
    </div>
  );
}

export default ProductCategory;
