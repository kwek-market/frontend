import { EditProductProps } from "@/interfaces/commonTypes";
import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";
import { EDITOR_OPTIONS } from "../../constants/constants";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

function EditProductDetails({ submitDetails, setSubmitDetails, product }: EditProductProps) {
  const editorRef = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "",
      defaultActionOnPaste: "insert_as_html",
      defaultLineHeight: 1.5,
      enter: "div",
      // options that we defined in above step.
      buttons: EDITOR_OPTIONS,
      buttonsMD: EDITOR_OPTIONS,
      buttonsSM: EDITOR_OPTIONS,
      buttonsXS: EDITOR_OPTIONS,
      statusbar: false,
      sizeLG: 900,
      sizeMD: 700,
      sizeSM: 400,
      toolbarAdaptive: false,
    }),
    []
  );

  return (
    <div className='tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md'>
      <div className='tw-p-3 tw-border-b tw-border-grey-kwek700'>
        <p className='tw-font-semibold tw-capitalize tw-text-lg tw-mb-0'>product details</p>
      </div>
      <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-3 tw-mt-3'>
        <label className='tw-text-base tw-font-medium tw-capitalize tw-self-end'>
          {" "}
          Brand (Optional)
          <span className='tw-text-red-kwek100 tw-text-sm tw-italic tw-font-normal'>
            (For unbranded items, use the hyphen - sign)
          </span>{" "}
          <br />
          <input
            type='text'
            placeholder='e.g promasidor, gucci'
            required
            className='tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2'
            value={submitDetails.brand}
            onChange={e =>
              setSubmitDetails({
                ...submitDetails,
                brand: e.target.value,
              })
            }
          />
        </label>

        <label className='tw-text-base tw-font-medium tw-capitalize tw-self-end'>
          {" "}
          Product weight (kg) (Optional) <br />
          <input
            type='text'
            placeholder='e.g 70'
            className='tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2'
            value={submitDetails.productWeight}
            onChange={e =>
              setSubmitDetails({
                ...submitDetails,
                productWeight: e.target.value,
              })
            }
          />
        </label>
      </div>
      <div className='tw-mt-3'>
        <label className='tw-text-base tw-font-medium tw-capitalize'>
          {" "}
          Product title{" "}
          <span className='tw-text-red-kwek100 tw-text-sm tw-italic tw-font-normal tw-pt-1'>
            (Do not add the brand name here)
          </span>{" "}
          <br />
          <input
            type='text'
            placeholder='what is the name of this item?'
            className='tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2'
            value={submitDetails.productTitle}
            onChange={e =>
              setSubmitDetails({
                ...submitDetails,
                productTitle: e.target.value,
              })
            }
          />
        </label>

        <div className='tw-mt-3'>
          <label className='tw-text-base tw-font-medium tw-pt-3'>
            {" "}
            short description (Optional) <br />
            <JoditEditor
              ref={editorRef}
              className='!tw-z-0'
              value={product.shortDescription}
              config={config as any}
              onChange={htmlString =>
                setSubmitDetails({ ...submitDetails, shortDescription: htmlString })
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default EditProductDetails;
