import React, { useState } from "react";
import Button from "../buttons/Button";
import DragnDrop from "../DnD/DragnDrop";
import Header from "./Header";
import { StepComponentProps } from "react-step-builder";

function ValidID(props: StepComponentProps) {
  console.log({ props });
  console.log(props.state.validID);

  const [file, setFile] = useState<FileList>(null);
  const [files, setFiles] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>();

  async function handleFileDrop(files: FileList) {
    let fileList = files[0];
    const { message } = await import("antd");
    // check if file is there
    if (!fileList) {
      return message.error("No file selected");
    }
    // check if file is an image
    console.log({ fileList });
    if (!fileList.type.match("image/")) {
      console.log(fileList.type);
      return message.error("File must be an image");
    }
    // check if file is larger than 1mb
    if (fileList.size > 1000000) {
      return message.error("File is larger than 1mb");
    }
    setPreviewImage(URL.createObjectURL(fileList));
    setFiles(fileList);
  }

  async function checkSetFile(e: React.ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files);
    const { message } = await import("antd");
    if (!file) return message.error("No file selected");
    let fileList = file[0];
    // check if file is an image
    console.log({ fileList });
    if (!fileList.type.match("image/")) {
      return message.error("File must be an image");
    }
    // check if file is larger than 1mb
    if (fileList.size > 1000000) {
      return message.error("File is larger than 1mb");
    }
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setFiles(fileList);
  }

  async function handleFileUpload() {
    console.log("file", files);
    const { message } = await import("antd");
    if (!props.state.validID) return message.error("Click the type of ID");
    if (!files) return message.error("No file selected");
    const formData = new FormData();
    formData.append("file", files);
    console.log(formData.getAll("file"));
    console.log(props.state);
    props.next();
  }

  return (
    <>
      <Header title="upload a valid id" num="2" />
      <div className="tw-bg-white-100 tw-border tw-border-white-300 tw-p-6">
        <h4 className="tw-text-gray-kwek200 tw-font-semibold tw-text-2xl tw-mb-3">
          Select your preferred ID
        </h4>
        <form className="tw-flex tw-flex-col">
          <label htmlFor="drivers-license" className="tw-mb-2">
            <div>
              <input
                type="radio"
                id="drivers-license"
                name="validID"
                checked={props.state.validID === "drivers-license"}
                value={"drivers-license"}
                onChange={props.handleChange}
                className="tw-mr-2"
              />{" "}
              Drivers License
            </div>
          </label>
          <label htmlFor="national-id" className="tw-mb-2">
            <div>
              <input
                type="radio"
                id="national-id"
                name="validID"
                checked={props.state.validID === "national-id"}
                value={"national-id"}
                onChange={props.handleChange}
                className="tw-mr-2"
              />{" "}
              National ID
            </div>
          </label>
          <label htmlFor="national-passport" className="tw-mb-2">
            <div>
              <input
                type="radio"
                id="national-passport"
                name="validID"
                checked={props.state.validID === "national-passport"}
                value={"national-passport"}
                onChange={props.handleChange}
                className="tw-mr-2"
              />{" "}
              National Passport
            </div>
          </label>
          <label
            htmlFor="id-upload"
            className="tw-border-2 tw-border-gray-kwek100 tw-rounded-md tw-p-3 tw-mt-8 tw-relative"
          >
            <DragnDrop handleFileDrop={handleFileDrop}>
              <div className="tw-border-2  tw-border-gray-kwek100 tw-border-dotted tw-rounded-md tw-py-7 tw-cursor-pointer">
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
                  <p className="tw-text-gray-kwek100 tw-text-sm">
                    Drop image here
                  </p>
                  <p className="tw-border tw-border-red-kwek100 tw-text-red-kwek100 tw-rounded-sm tw-p-2 tw-my-4 tw-font-medium tw-text-md">
                    <i className="" /> choose file{" "}
                    <i className="fas fa-caret-down" />
                  </p>
                  <p className="tw-text-gray-kwek100 tw-text-center tw-text-sm">
                    Supported formats: JPG, PNG, JPEG. File size limit is 1MB{" "}
                    <br />
                    Recommended dimension : 1920 X 1080 px
                  </p>
                </div>
              </div>
              <input
                type="file"
                id="id-upload"
                name="id-upload"
                onChange={(e) => checkSetFile(e)}
                className="tw-absolute tw-overflow-hidden tw-w-1 tw-opacity-0 tw-h-1 tw-z-[-1]"
              />
            </DragnDrop>
          </label>
        </form>
        <div className="tw-flex tw-justify-end tw-mt-6">
          <Button
            buttonStyle={
              "tw-rounded-sm tw-py-3 tw-px-5 tw-bg-green-success tw-text-white-100 tw-text-xs"
            }
            text={"Proceed"}
            cmd={handleFileUpload}
          />
        </div>
      </div>
      <div className="tw-mt-6">
        <button
          className="tw-p-3 tw-rounded-sm tw-text-white-100 tw-bg-red-kwek100"
          onClick={props.prev}
        >
          previous
        </button>
      </div>
    </>
  );
}

export default ValidID;
