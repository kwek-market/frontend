import {
  getCategories,
  getSubCategories,
} from "@/store/category/categories.actions";
import { RootState } from "@/store/rootReducer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductCategory({ submitDetails, setSubmitDetails }) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state);
  const [subCategories, setSubCategories] = useState([]);
  const [uploadProduct, setUploadProduct] = useState({
    mainCategory: "",
    subCategory: "",
  });

  function showSubCategories(): Array<{ id: ""; name: "" }> {
    if (uploadProduct.mainCategory) {
      const main = categories.categories.find(
        (subcat: { id: string }) => subcat.id === uploadProduct.mainCategory
      );
      // console.log(main);
      if (main !== undefined) {
        return main.child;
      }
    }
  }

  useEffect(() => {
    const val = showSubCategories();
    if (val !== null && val !== undefined) {
      console.log(val);
      setSubCategories(val);
      setUploadProduct({
        ...uploadProduct,
        subCategory: val[val.length - 1].id,
      });
      console.log(uploadProduct.subCategory);
    }
  }, [uploadProduct.mainCategory]);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSubCategories());
  }, []);

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
            value={uploadProduct.mainCategory}
            onChange={(e) =>
              setUploadProduct({
                ...uploadProduct,
                mainCategory: e.target.value,
              })
            }
          >
            <option value="">Select Main Category</option>
            {categories.categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>

        {!!subCategories &&
          subCategories.length > 0 &&
          subCategories.map((subcat, index) => (
            <label
              key={subcat.id}
              className="tw-text-base tw-font-medium tw-capitalize"
            >
              {" "}
              Sub Category <br />
              <select
                className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
                placeholder="Select subcategory"
              >
                <option value="">Select Sub Category</option>
                <option key={subcat.id} value={subcat.id}>
                  {subcat.name}
                </option>
              </select>
            </label>
          ))}
      </div>
    </div>
  );
}

export default ProductCategory;
