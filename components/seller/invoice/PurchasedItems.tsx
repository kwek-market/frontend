import { InvoiceProps } from "@/interfaces/commonTypes";
import React, { useMemo, useState } from "react";

const DELIVERYFEE = 200;

export default function PurchasedItems({ invoice, setInvoice }: InvoiceProps) {
  const [formValues, setFormValues] = useState([
    { item: "", description: "", quantity: "", unitCost: "", total: "" },
  ]);

  const SUBTOTAL = useMemo(() => {
    return formValues.reduce((a, b) => a + +b.total, 0);
  }, [formValues]);

  const TOTAL = SUBTOTAL + DELIVERYFEE;

  const handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addNewVariant = () => {
    setFormValues([
      ...formValues,
      { item: "", description: "", quantity: "", unitCost: "", total: "" },
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
      if (formValues[i].item === "") {
        return message.error("Please enter a item for all variants", 4);
      }
      if (formValues[i].description === "") {
        return message.error("Please enter a description for all variants", 4);
      }
      if (formValues[i].quantity === "") {
        return message.error("Please enter a quantity for all variants", 4);
      }
      if (formValues[i].unitCost === "") {
        return message.error("Please enter a unit cost for all variants", 4);
      }
      if (formValues[i].total === "") {
        return message.error("Please enter a total for all variants", 4);
      }
      if (!Number(formValues[i].quantity)) {
        return message.error(
          "Please enter a valid quantity as a number for all variants",
          4
        );
      }
      if (!Number(formValues[i].unitCost)) {
        return message.error(
          "Please enter a valid unit cost as a number for all variants",
          4
        );
      }
      if (Number(formValues[i].total) < 0) {
        return message.error("total cannot be negative", 4);
      }
    }
    console.log(formValues);
    const val: string[] = [];
    // "{'item': 12, 'description':1, 'price': 400, 'discounted_price': 20, 'option_total_price': 380}"
    for (let i = 0; i < formValues.length; i++) {
      const emptyString = `{'item': '${formValues[i].item}' , 'description': '${formValues[i].description}' , 'quantity': ${formValues[i].quantity} , 'unit_cost': ${formValues[i].unitCost} , 'total': ${formValues[i].total}}`;
      val.push(emptyString);
    }
    setInvoice({
      ...invoice,
      purchasedItem: val,
      deliveryFee: DELIVERYFEE,
      subtotal: SUBTOTAL,
      total: TOTAL,
      note: "invoice",
    });
  };

  return (
    <section className="tw-mt-5 tw-p-5 tw-bg-white-100 tw-rounded-md tw-border tw-border-gray-kwek700 tw-shadow-sm">
      <div className="tw-flex tw-justify-between tw-border-b tw-border-gray-kwek700">
        <p className="tw-mb-0 tw-text-gray-kwek200 tw-capitalize tw-font-semibold md:tw-text-2xl tw-text-base">
          Purchased Items
        </p>
      </div>
      <div className="">
        {formValues.map((element, index) => (
          <div
            key={index}
            className="tw-grid tw-grid-cols-kwek-5 tw-gap-3 tw-mt-3 tw-border-b-2 tw-border-grey-kwek700 tw-pb-4"
          >
            <label className="tw-text-base tw-font-medium tw-capitalize">
              {" "}
              item
              <br />
              <input
                type="text"
                placeholder="book"
                name="item"
                required
                value={element.item || ""}
                onChange={(e) => handleChange(index, e)}
                className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
              />
            </label>

            <label className="tw-text-base tw-font-medium tw-capitalize">
              {" "}
              description
              <br />
              <input
                type="text"
                placeholder="0"
                name="description"
                required
                value={element.description || ""}
                onChange={(e) => handleChange(index, e)}
                className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
              />
            </label>

            <label className="tw-text-base tw-font-medium tw-capitalize">
              {" "}
              quantity
              <br />
              <input
                type="text"
                placeholder="0"
                name="quantity"
                required
                value={element.quantity || ""}
                onChange={(e) => handleChange(index, e)}
                className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
              />
            </label>

            <label className="tw-text-base tw-font-medium tw-capitalize">
              {" "}
              unit cost
              <br />
              <input
                type="text"
                placeholder="0"
                name="unitCost"
                required
                value={element.unitCost || ""}
                onChange={(e) => handleChange(index, e)}
                className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
              />
            </label>

            <label className="tw-text-base tw-font-medium tw-capitalize">
              {" "}
              Total
              <br />
              <input
                type="text"
                placeholder="0"
                name="total"
                required
                value={element.total || ""}
                onChange={(e) => handleChange(index, e)}
                className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
              />
            </label>
            {index ? (
              <button
                type="button"
                className="tw-font-medium tw-text-sm tw-text-red-700"
                onClick={() => removeFormFields(index)}
              >
                <i className="fas fa-minus tw-bg-red-700 tw-bg-opacity-20 hover:tw-text-red-900 tw-rounded-full tw-p-3" />
              </button>
            ) : null}
          </div>
        ))}
      </div>
      <div className="tw-mt-3 tw-flex tw-justify-between">
        <button
          className="tw-font-medium tw-text-sm tw-text-green-success tw-bg-green-success tw-bg-opacity-20 tw-p-3 hover:tw-text-green-800"
          onClick={() => addNewVariant()}
        >
          <i className="fas fa-plus" /> Add new variant
        </button>

        <button
          className="tw-font-medium tw-text-sm tw-text-red-700 tw-bg-red-700 tw-bg-opacity-20 tw-py-3 tw-px-5 hover:tw-text-red-800"
          onClick={() => handleSubmit()}
        >
          done
        </button>
      </div>
      <div className="tw-mt-7 tw-flex md:tw-flex-row tw-flex-col tw-justify-between">
        <div>
          <p className="tw-mb-0 tw-uppercase tw-text-xl tw-font-semibold tw-text-gray-kwek200">
            note
          </p>
        </div>
        <div className="tw-w-1/2 tw-p-3">
          <table className="tw-table-auto tw-w-full">
            <tbody>
              <tr>
                <td className="tw-p-3 tw-uppercase tw-text-left tw-font-semibold tw-text-gray-kwek200">
                  subtotal:
                </td>
                <td className="tw-text-right tw-p-3">{SUBTOTAL}</td>
              </tr>
              <tr>
                <td className="tw-p-3 tw-uppercase tw-text-left tw-font-semibold tw-text-gray-kwek200">
                  delivery:
                </td>
                <td className="tw-text-right tw-p-3">{DELIVERYFEE}</td>
              </tr>
              <tr className="tw-bg-opacity-20 tw-bg-gray-kwek100 ">
                <td className="tw-p-3 tw-uppercase tw-text-left tw-font-semibold tw-text-gray-kwek200">
                  total
                </td>
                <td className="tw-text-right tw-p-3">NGN {TOTAL}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
