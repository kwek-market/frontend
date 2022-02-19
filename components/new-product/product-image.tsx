import { UploadProductProps } from "@/interfaces/commonTypes";
import { Progress } from "antd";
import axios from "axios";
import React, { useState } from "react";
import Button from "../buttons/Button";
import DragnDrop from "../DnD/DragnDrop";

function ProductImage({ submitDetails, setSubmitDetails }: UploadProductProps) {
  const [previewImage, setPreviewImage] = useState([]);
  const [files, setFiles] = useState<File[]>();
  const [uploadPercent, setUploadPercent] = useState(0);

  async function checkSetFile(e: React.ChangeEvent<HTMLInputElement>) {
    const { message } = await import("antd");
    if (!e.target.files) return message.error("No file selected", 4);
    let fileList = e.target.files;
    const previewArray = [];
    //console.log({ fileList });
    if (fileList.length > 5)
      return message.error("You can't pick more than 5 files", 4);
    // loop through and do checks
    Array.from(fileList).forEach((file) => {
      // ensure all the files picked are images
      if (!file.type.match("image/*")) {
        return message.error(
          `${file.name} is not an image, must be an image`,
          5
        );
      }
      // check if file is larger than 2mb
      if (file.size > 2000000) {
        return message.error(
          `${file.name} is larger than 2mb, must be less than 2mb`,
          6
        );
      }
      previewArray.push(URL.createObjectURL(file));
    });
    //console.log({ previewArray });
    setPreviewImage(previewArray);
    setFiles(Array.from(fileList));
    //console.log({ files });
  }

  async function handleFileDrop(files: FileList) {
    const { message } = await import("antd");
    let fileList = files;
    console.log({ fileList });
    if (!fileList) return message.error("No file selected", 4);
    const previewArray = [];
    if (fileList.length > 5) {
      return message.error("You can't pick more than 5 files", 4);
    }
    // loop through and do checks
    Array.from(fileList).forEach((file) => {
      // ensure all the files picked are images
      if (!file.type.match("image/*")) {
        return message.error(
          `${file.name} is not an image, must be an image`,
          5
        );
      }
      // check if file is larger than 2mb
      if (file.size > 2000000) {
        return message.error(
          `${file.name} is larger than 2mb, must be less than 2mb`,
          6
        );
      }
      previewArray.push(URL.createObjectURL(file));
    });
    console.log({ previewArray });
    setPreviewImage(previewArray);
    setFiles(Array.from(fileList));
    //console.log({ files });
  }

  async function removeImage() {}

  async function handleImageUpload() {
    const { message } = await import("antd");
    if (!files) return message.error("No file selected", 4);
    console.log({ files });
    const formData = new FormData();
    const uploadedUrls: string[] = [];
    let loading = "uploading images";
    message.info(loading, 3);
    for (let x = 0; x < files.length; x++) {
      formData.append("file", files[x]);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_PRESET
      );
      try {
        const response = await axios.post(
          process.env.NEXT_PUBLIC_CLOUDINARY_URL,
          formData,
          {
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              const loading = Math.round((loaded / total) * 100);
              console.log(`${loading}%`);
              setUploadPercent(loading);
            },
          }
        );
        console.log({ response });
        const {
          data: { secure_url },
        } = response;
        uploadedUrls.push(secure_url);
      } catch (error) {
        message.error(`Unable to upload ${files[x].name}`, 5);
      }
    }
    loading = "done uploading images";
    message.success(loading, 4);
    setSubmitDetails({ ...submitDetails, productImageUrl: uploadedUrls });
  }

  return (
    <div className="tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md">
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-p-3 tw-border-b tw-border-grey-kwek700">
        <div className="tw-flex tw-flex-col">
          <p className="tw-font-semibold tw-capitalize tw-text-lg tw-mb-0">
            product image 0/5
          </p>
          <p className="tw-text-gray-kwek200 tw-text-sm md:tw-text-base tw-font-normal tw-mb-0">
            Recommended Image dimention is 500px by 500px
          </p>
        </div>
        <Button
          buttonStyle={"tw-text-error hover:cursor-pointer"}
          text={"upload image(s)"}
          cmd={handleImageUpload}
        />
      </div>
      <div className="tw-grid tw-mt-3">
        {!!uploadPercent && <Progress percent={uploadPercent} />}
        <label htmlFor="id-upload" className="tw-mt-3 tw-relative">
          <DragnDrop handleFileDrop={handleFileDrop}>
            <div className="tw-border-2 tw-border-gray-kwek100 tw-border-dashed tw-rounded-md tw-py-7 tw-cursor-pointer">
              <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-relative tw-p-2">
                {!!previewImage.length && (
                  <div className="tw-grid tw-grid-cols-kwek-4 tw-absolute tw-top-0 tw-right-0 tw-bottom-0 tw-left-0 tw-z-10 tw-justify-center tw-bg-white-100">
                    {previewImage.map((files) => (
                      <img
                        key={files}
                        src={files}
                        alt="preview"
                        className="tw-h-[150px]"
                      />
                    ))}
                  </div>
                )}
                <img src={"/svg/picture.svg"} />
                <p className="tw-text-gray-kwek200 tw-text-base md:tw-text-lg tw-mt-4 tw-mb-1">
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
              multiple={true}
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
