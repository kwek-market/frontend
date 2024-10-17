import React, { useState } from "react";

interface Size {
  id: number;
  name: string;
}

interface Element {
  size?: string;
}

interface SizeSelectorProps {
  index: number;
  element: Element;
  sizes: Size[];
  formValues: Element[];
  handleChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  index,
  element,
  sizes,
  formValues,
  handleChange,
}) => {
  const [sizeInputType, setSizeInputType] = useState("letter");

  return (
    <label className='tw-text-base tw-font-medium tw-capitalize'>
      Size (Optional)
      <br />
      <div className='tw-flex tw-space-x-2 tw-items-center'>
        {(sizeInputType === "number" || sizeInputType === "both") && (
          <input
            type='number'
            placeholder='0'
            name='size'
            value={element.size?.split(" ")[0] || ""}
            onChange={e => handleChange(index, e)}
            className='tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2'
          />
        )}

        {(sizeInputType === "letter" || sizeInputType === "both") && (
          <select
            aria-label='Select Main Category'
            className='tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2'
            name='sizePostfix'
            data-name={sizeInputType}
            onChange={e => handleChange(index, e)}
            value={formValues[index].size?.split(" ")[0] || ""}
          >
            {sizes.map(size => (
              <option key={size.id} value={size.name}>
                {size.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className='tw-flex tw-space-x-3 tw-mt-2 tw-mb-2'>
        <button
          className={`tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-border ${
            sizeInputType === "letter" ? "tw-bg-green-200" : ""
          }`}
          onClick={() => setSizeInputType("letter")}
        >
          use Letter
        </button>
        <button
          className={`tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-border ${
            sizeInputType === "number" ? "tw-bg-green-200" : ""
          }`}
          onClick={() => setSizeInputType("number")}
        >
          use Number
        </button>
        {/* <button
          className={`tw-px-2 tw-py-1 tw-text-xs tw-rounded-full tw-border ${
            sizeInputType === "both" ? "tw-bg-green-200" : ""
          }`}
          onClick={() => setSizeInputType("both")}
        >
          Both
        </button> */}
      </div>
    </label>
  );
};

export default SizeSelector;
