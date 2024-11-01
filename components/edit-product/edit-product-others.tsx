import { EditProductProps } from "@/interfaces/commonTypes";
import { Select } from "antd";
import { SelectValue } from "antd/lib/select";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addCurrentTotalPrice } from "../../helpers/helper";
import { ICreateProductCharge, useGetProductCharge } from "../../hooks/admin/productCharges";
import { RootState } from "../../store/rootReducer";
import Load from "../Loader/Loader";
import SizeSelector from "./size-selector";

const sizes = [
  { id: 1, name: "S" },
  { id: 2, name: "M" },
  { id: 3, name: "L" },
  { id: 4, name: "XL" },
  { id: 5, name: "XXL" },
  { id: 6, name: "INCH" },
  { id: 7, name: "CM" },
  { id: 8, name: "YARD" },
];

function EditProductOthers({ submitDetails, setSubmitDetails, product }: EditProductProps) {
  const [seoKeywords, setSeoKeywords] = useState([]);
  const { token } = useSelector((state: RootState) => state.user);
  const [size, setSize] = useState(sizes[0].name);
  const [formValues, setFormValues] = useState([...submitDetails.productOptions]);

  console.log(
    "🚀 ~~ EditProductOthers ~~ formValues:",
    submitDetails.productOptions,
    formValues[0]
  );

  const { data: productChargeData, isLoading: isLoadingCharge } = useGetProductCharge(token);
  const [currentTotalPrice, setCurrentTotalPrice] = useState(0);

  const productCharge = productChargeData?.getProductCharge[0] as ICreateProductCharge;

  useEffect(() => {
    if (product.options.length > 0) {
      const newProductOptions = product.options.map(option => ({
        size: option.size || "",
        color: option.color || "",
        quantity: option.quantity || "",
        price: Number(option.price) - option.productCharge || "",
        discounted_price: !option.discountedPrice
          ? Number(option.discountedPrice)
          : Number(option.discountedPrice) - option.productCharge || "",
        option_total_price: option.price || "",
      }));
      setFormValues(newProductOptions);
    } else {
      setFormValues([
        {
          size: "",
          color: "",
          quantity: "",
          price: 0,
          discounted_price: 0,
          option_total_price: 0,
        },
      ]);
    }

    return () => {};
  }, [product.options]);

  console.log("this is a fucking formValues", formValues);

  const handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormValues = [...formValues];

    if (e.target.name === "sizePostfix") {
      console.log(e.target.dataset.name, formValues[i]?.size, e.target.value);

      if (e.target.dataset.name === "letter") {
        newFormValues[i]["size"] = `${e.target.value}`;
      } else if (e.target.dataset.name === "number") {
        newFormValues[i]["size"] = `${formValues[i]?.size?.split(" ")?.[0]}`;
      } else {
        newFormValues[i]["size"] = `${formValues[i]?.size?.split(" ")?.[0]} ${e.target.value}`;
      }

      setFormValues(newFormValues);
      return;
    }

    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addNewVariant = () => {
    setFormValues([
      ...formValues,
      {
        size: "",
        color: "",
        quantity: "",
        price: 0,
        discounted_price: 0,
        option_total_price: 0,
      },
    ]);
  };

  const removeFormFields = (i: number) => {
    const newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const handleSubmit = async () => {
    const { message } = await import("antd");
    for (let i = 0; i < formValues.length; i++) {
      // if (formValues[i].size === "") {
      //   return message.error("Please enter a size for all variants", 4);
      // }
      if (formValues[i].quantity === "") {
        return message.error("Please enter a quantity for all variants", 4);
      }
      if (!formValues[i].price) {
        return message.error("Please enter a price for all variants", 4);
      }
      // if (formValues[i].discountPrice === "") {
      //   return message.error(
      //     "Please enter a discount price for all variants",
      //     4
      //   );
      // }
      // if (!formValues[i].totalPrice) {
      //   return message.error("Please enter a total price for all variants", 4);
      // }
      if (!Number(formValues[i].price)) {
        return message.error("Please enter a valid price as a number for all variants", 4);
      }
      // if (!Number(formValues[i].discountPrice)) {
      //   return message.error(
      //     "Please enter a valid price as a number for all variants",
      //     4
      //   );
      // }
      if (Number(formValues[i].discountPrice) > Number(formValues[i].price)) {
        return message.error("Discount price cannot be greater than the price", 4);
      }
      if (Number(formValues[i].discountPrice) < 0) {
        return message.error("Discount price cannot be negative", 4);
      }
    }
    // console.log(formValues);
    const val = [];

    // "{'size': 12, 'quantity':1, 'price': 400, 'discounted_price': 20, 'option_total_price': 380}"
    for (const values of formValues) {
      const newFormValues = {
        size: values.size,
        color: values.color,
        quantity: values.quantity,
        price: values.price || 0,
        discounted_price: values.discounted_price || 0,
        option_total_price: addCurrentTotalPrice(productCharge, values),
      };
      val.push(newFormValues);
    }

    message.success("Product price is now set");

    setSubmitDetails({
      ...submitDetails,
      productOptions: val,
    });
  };

  function handleSeo(e: SelectValue) {
    setSeoKeywords([e]);
    setSubmitDetails({
      ...submitDetails,
      keyword: e as unknown as string[],
    });
  }

  return (
    <>
      <div className='tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md'>
        <div className='tw-p-3 tw-border-b tw-border-grey-kwek700'>
          <p className='tw-font-semibold tw-capitalize tw-text-lg tw-mb-0'>
            product options
            <span className='tw-text-gray-kwek200 tw-text-sm tw-italic tw-font-normal tw-pt-1 tw-opacity-60'>
              (Add multiple variants of this item you have in stock)
            </span>{" "}
          </p>
        </div>
        <>
          {formValues.map((element, index) => (
            <div
              key={index}
              className='2xl:tw-flex tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-items-start tw-gap-3 tw-mt-3 tw-border-b-2 tw-border-grey-kwek700 tw-pb-4'
            >
              <SizeSelector
                key={index}
                index={index}
                element={element}
                sizes={sizes}
                formValues={formValues}
                handleChange={handleChange}
              />

              <label className='tw-text-base tw-font-medium tw-capitalize'>
                {" "}
                color
                <br />
                <input
                  type='text'
                  placeholder='blue'
                  name='color'
                  required
                  value={element.color || ""}
                  onChange={e => handleChange(index, e)}
                  className='tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2'
                />
              </label>

              <label className='tw-text-base tw-font-medium tw-capitalize'>
                {" "}
                quantity
                <br />
                <input
                  type='number'
                  placeholder='0'
                  name='quantity'
                  required
                  value={element.quantity || ""}
                  onChange={e => handleChange(index, e)}
                  className='tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2'
                />
              </label>

              {productCharge ? (
                <label className='tw-text-base tw-font-medium tw-capitalize'>
                  {" "}
                  price
                  <br />
                  <input
                    type='number'
                    placeholder='0'
                    name='price'
                    required
                    value={element.price || ""}
                    onChange={e => handleChange(index, e)}
                    className='tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2'
                  />
                </label>
              ) : null}

              <label className='tw-text-base tw-font-medium tw-capitalize'>
                {" "}
                Discounted Price
                <br />
                <input
                  type='number'
                  placeholder='0'
                  name='discounted_price'
                  value={element.discounted_price || ""}
                  onChange={e => handleChange(index, e)}
                  className='tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2'
                />
                <p className='tw-text-xs tw-text-yellow-900'>
                  The product charge will also be added on the discount price will
                </p>
              </label>

              {productCharge ? (
                <label className='tw-text-base tw-font-medium tw-capitalize'>
                  Total price
                  <br />
                  <input
                    type='number'
                    placeholder='0'
                    name='option_total_price'
                    value={addCurrentTotalPrice(productCharge, element)}
                    disabled={true}
                    onChange={e => handleChange(index, e)}
                    className='tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2 disabled:tw-text-gray-500 disabled:tw-bg-gray-200'
                  />
                  <p className='tw-text-xs tw-text-yellow-900'>This include our Charges</p>
                </label>
              ) : null}

              {isLoadingCharge ? <Load /> : null}

              {index ? (
                <button
                  type='button'
                  className='tw-font-medium tw-text-sm tw-text-red-700'
                  onClick={() => removeFormFields(index)}
                >
                  <i className='fas fa-minus tw-bg-red-700 tw-bg-opacity-20 hover:tw-text-red-900 tw-rounded-full tw-p-3' />
                </button>
              ) : null}
            </div>
          ))}
        </>

        <div className='tw-mt-3 tw-flex tw-justify-between'>
          <button
            className='tw-font-medium tw-text-sm tw-text-green-success tw-bg-green-success tw-bg-opacity-20 tw-p-3 hover:tw-text-green-800'
            onClick={() => addNewVariant()}
          >
            <i className='fas fa-plus' /> Add new variant
          </button>

          <button
            className='tw-font-medium tw-text-sm tw-text-red-700 tw-bg-red-700 tw-bg-opacity-20 tw-py-3 tw-px-5 hover:tw-text-red-800'
            onClick={() => handleSubmit()}
          >
            done
          </button>
        </div>
      </div>

      <div className='tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md'>
        <div className='tw-p-3 tw-border-b tw-border-grey-kwek700'>
          <p className='tw-font-semibold tw-capitalize tw-text-lg tw-mb-0'>other options</p>
        </div>
        <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-3 tw-mt-3'>
          <label className='tw-text-base tw-font-medium tw-capitalize'>
            {" "}
            return policy (Optional) <br />
            <select
              required
              className='tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2'
              value={submitDetails.returnPolicy}
              onChange={e =>
                setSubmitDetails({
                  ...submitDetails,
                  returnPolicy: e.target.value,
                })
              }
            >
              <option value='no'>no return policy</option>
              <option value='yes'>Can be returned</option>
            </select>
          </label>

          <label className='tw-text-base tw-font-medium tw-capitalize'>
            {" "}
            warranty (Optional) <br />
            <select
              required
              className='tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2'
              value={submitDetails.warranty}
              onChange={e =>
                setSubmitDetails({
                  ...submitDetails,
                  warranty: e.target.value,
                })
              }
            >
              <option value='no'>No warranty</option>
              <option value='1 year'>1yr warranty</option>
              <option value='2 years'>2yrs warranty</option>
              <option value='3 years'>3yrs warranty</option>
              <option value='4 years'>4yrs warranty</option>
              <option value='5 years'>5yrs warranty</option>
            </select>
          </label>

          <label className='tw-text-base tw-font-medium tw-capitalize'>
            {" "}
            gender (Optional) <br />
            <select
              value={submitDetails.gender}
              onChange={e =>
                setSubmitDetails({
                  ...submitDetails,
                  gender: e.target.value,
                })
              }
              className='tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2'
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='others'>Others</option>
              <option value='prefer not to say'>prefer not to say</option>
            </select>
          </label>
        </div>
      </div>

      <div className='tw-pt-3 tw-px-5 tw-pb-20 tw-bg-white-100 tw-rounded-md'>
        <div className='tw-p-3 tw-border-b tw-border-grey-kwek700'>
          <p className='tw-font-semibold tw-capitalize tw-text-lg tw-mb-0'>
            search engine optimization
          </p>
        </div>
        <div className='tw-gap-3 tw-mt-3'>
          <label className='tw-text-base tw-font-medium tw-capitalize'>
            {" "}
            Keywords (SEO meta tags describes your store to search engine. Separate each tag with
            comma (,)) (Optional) <br />
            <Select
              mode='tags'
              placeholder='Please enter your keywords'
              onChange={e => handleSeo(e)}
              size='large'
              style={{ width: "100%" }}
              value={submitDetails.keyword}
            ></Select>
          </label>
        </div>
      </div>
    </>
  );
}

export default EditProductOthers;
