import React, { useState } from "react";

function Others({ submitDetails, setSubmitDetails }) {
  const [formValues, setFormValues] = useState([
    { size: "", quantity: "", price: "", discountPrice: "", totalPrice: "" },
  ]);

  const handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addNewVariant = () => {
    setFormValues([
      ...formValues,
      { size: "", quantity: "", price: "", discountPrice: "", totalPrice: "" },
    ]);
  };

  const removeFormFields = (i: number) => {
    const newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <>
      <div className="tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md">
        <div className="tw-p-3 tw-border-b tw-border-grey-kwek700">
          <p className="tw-font-semibold tw-capitalize tw-text-lg tw-mb-0">
            product options
            <span className="tw-text-gray-kwek200 tw-text-sm tw-italic tw-font-normal tw-pt-1 tw-opacity-60">
              (Add multiple variants of this item you have in stock)
            </span>{" "}
          </p>
        </div>
        <>
          {formValues.map((element, index) => (
            <div
              key={index}
              className="tw-grid tw-grid-cols-kwek-5 tw-gap-3 tw-mt-3 tw-border-b-2 tw-border-grey-kwek700 tw-pb-4"
            >
              <label className="tw-text-base tw-font-medium tw-capitalize">
                {" "}
                size
                <br />
                <input
                  type="text"
                  placeholder="0"
                  name="size"
                  value={element.size || ""}
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
                  value={element.quantity || ""}
                  onChange={(e) => handleChange(index, e)}
                  className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
                />
              </label>

              <label className="tw-text-base tw-font-medium tw-capitalize">
                {" "}
                price
                <br />
                <input
                  type="text"
                  placeholder="0"
                  name="price"
                  value={element.price || ""}
                  onChange={(e) => handleChange(index, e)}
                  className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
                />
              </label>

              <label className="tw-text-base tw-font-medium tw-capitalize">
                {" "}
                Discounted Price
                <br />
                <input
                  type="text"
                  placeholder="0"
                  name="discountPrice"
                  value={element.discountPrice || ""}
                  onChange={(e) => handleChange(index, e)}
                  className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
                />
              </label>

              <label className="tw-text-base tw-font-medium tw-capitalize">
                {" "}
                Total price (inc VAT)
                <br />
                <input
                  type="text"
                  placeholder="0"
                  name="totalPrice"
                  value={element.totalPrice || ""}
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
        </>

        <div className="tw-mt-3">
          <button
            className="tw-font-medium tw-text-sm tw-text-green-success tw-bg-green-success tw-bg-opacity-20 tw-p-3 hover:tw-text-green-800"
            onClick={addNewVariant}
          >
            <i className="fas fa-plus" /> Add new variant
          </button>
        </div>
      </div>

      <div className="tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md">
        <div className="tw-p-3 tw-border-b tw-border-grey-kwek700">
          <p className="tw-font-semibold tw-capitalize tw-text-lg tw-mb-0">
            other options
          </p>
        </div>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-3 tw-mt-3">
          <label className="tw-text-base tw-font-medium tw-capitalize">
            {" "}
            return policy <br />
            <select className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2">
              <option defaultValue="">no return policy</option>
            </select>
          </label>

          <label className="tw-text-base tw-font-medium tw-capitalize">
            {" "}
            warranty <br />
            <select className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2">
              <option defaultValue="">No warranty</option>
            </select>
          </label>

          <label className="tw-text-base tw-font-medium tw-capitalize">
            {" "}
            color <br />
            <input
              type="text"
              placeholder="what is the color of this item?"
              className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
            />
          </label>

          <label className="tw-text-base tw-font-medium tw-capitalize">
            {" "}
            gender <br />
            <select className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
              <option value="prefer not to say">prefer not to say</option>
            </select>
          </label>
        </div>
      </div>

      <div className="tw-pt-3 tw-px-5 tw-pb-20 tw-bg-white-100 tw-rounded-md">
        <div className="tw-p-3 tw-border-b tw-border-grey-kwek700">
          <p className="tw-font-semibold tw-capitalize tw-text-lg tw-mb-0">
            search engine optimization
          </p>
        </div>
        <div className="tw-gap-3 tw-mt-3">
          <label className="tw-text-base tw-font-medium tw-capitalize">
            {" "}
            Keywords (SEO meta tags describes your store to search engine.
            Separate each tag with comma (,)) <br />
            <input
              type="text"
              className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default Others;
