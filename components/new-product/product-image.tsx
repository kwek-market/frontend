import React, { useState } from "react";
import DragnDrop from "../DnD/DragnDrop";

function ProductImage() {
  const [previewImage, setPreviewImage] = useState("");
  const [files, setFiles] = useState<File>();

  function checkSetFile(e: React.ChangeEvent<HTMLInputElement>) {}

  function handleFileDrop() {}
  return (
    <div className="tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md">
      <div className="tw-flex tw-justify-between tw-p-3 tw-border-b tw-border-grey-kwek700">
        <div className="tw-flex tw-flex-col">
          <p className="tw-font-semibold tw-capitalize tw-text-lg tw-mb-0">
            product image 0/5
          </p>
          <p className="tw-text-gray-kwek200 tw-text-base tw-font-normal tw-mb-0">
            Recommended Image dimention is 500px by 500px
          </p>
        </div>
        <p className="tw-mb-0">upload image</p>
      </div>
      <div className="tw-grid tw-mt-3">
        <label htmlFor="id-upload" className="tw-mt-3 tw-relative">
          <DragnDrop handleFileDrop={handleFileDrop}>
            <div className="tw-border-2 tw-border-gray-kwek100 tw-border-dashed tw-rounded-md tw-py-7 tw-cursor-pointer">
              <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-relative">
                {previewImage && (
                  <div className="tw-absolute tw-top-0 tw-right-0 tw-bottom-0 tw-left-0 tw-z-10 tw-flex tw-justify-center tw-bg-white-100">
                    <img
                      src={previewImage}
                      alt="preview"
                      className="tw-h-full"
                    />
                  </div>
                )}
                <img src={"/svg/picture.svg"} />
                <p className="tw-text-gray-kwek200 tw-text-lg tw-mt-4 tw-mb-1">
                  Drag and Drop, or click to Add Image
                </p>
                <p className="tw-text-gray-kwek100 tw-text-center tw-text-sm">
                  Recommended image dimension is 500px by 500px
                </p>
              </div>
            </div>
            <input
              type="file"
              id="id-upload"
              name="id-upload"
              accept=".png, .jpg, .jpeg, image/*"
              onChange={(e) => checkSetFile(e)}
              className="tw-absolute tw-overflow-hidden tw-w-1 tw-opacity-0 tw-h-1 tw-z-[-1]"
            />
          </DragnDrop>
        </label>
      </div>
    </div>
  );
}

export default ProductImage;
