import { userFetcher } from "@/helpers";
import { UploadProductProps } from "@/interfaces/commonTypes";
import { CATEGORY } from "@/store/category/categories.queries";
import { RootState } from "@/store/rootReducer";
import React, { useEffect, useState } from "react";
import { QueryClient } from "react-query";
import { useSelector } from "react-redux";
import { v4 } from "uuid";

export type SubCategoriesType = {
  id: string;
  name: string;
  categories: any[];
  child: [
    {
      id: string;
      name: string;
    }
  ];
};

function ProductCategory({
  submitDetails,
  setSubmitDetails,
}: UploadProductProps) {
  const { categories } = useSelector((state: RootState) => state);
  const queryClient = new QueryClient();
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string>("");
  const [subCategoryValue, setSubCategoryValue] = useState<string[]>(
    [] as string[]
  );
  const [subCategories, setSubCategories] = useState<SubCategoriesType[]>(
    [] as SubCategoriesType[]
  );

  console.log(subCategoryValue);
  console.log(submitDetails);
  async function getSubCategories(id: string) {
    const { message } = await import("antd");
    try {
      const data =
        id &&
        (await queryClient.fetchQuery("sub-category", () =>
          userFetcher(CATEGORY, { id })
        ));
      console.log(data.category);
      data.category.child.length > 0
        ? setSubCategories([...subCategories, data.category])
        : setSubmitDetails({
            ...submitDetails,
            subcategory: subCategoryValue[subCategoryValue.length - 1],
          });
    } catch (error) {
      message.error(error.message);
    }
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
            placeholder="Select Main Category"
            className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubmitDetails({
                ...submitDetails,
                category: e.target.value,
              });
              getSubCategories(e.target.value);
            }}
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
                placeholder="Select subcategory"
                required
                value={subCategoryValue[index]}
                onChange={(e) => {
                  setSubCategoryValue([...subCategoryValue, e.target.value]);
                  setSubmitDetails({
                    ...submitDetails,
                    subcategory: e.target.value,
                  });
                  getSubCategories(e.target.value);
                }}
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
    </div>
  );
}

export default ProductCategory;
