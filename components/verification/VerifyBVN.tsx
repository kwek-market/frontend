import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";
import { StepComponentProps } from "react-step-builder";
import Header from "./Header";
import { message } from "antd";

function VerifyBVN(props: StepComponentProps) {
  const fetchFromState = (value: string, defaultValue: string = "") => {
    const checkThis = props.getState(value, defaultValue);
    if (!!checkThis && typeof checkThis === "string") {
      defaultValue = checkThis;
    }
    return defaultValue;
  };

  const bvnReqLength = 11;
  const [bvn, setBvn] = useState(fetchFromState(`bvn`));

  async function checkProceed() {
    props.setState("bvn", bvn);
    if (!bvn) return message.error("Please enter a valid BVN");

    if (bvn.length !== bvnReqLength)
      return message.error("BVN Must be 11 characters long");

    if (bvn.match(new RegExp(/^(?!\d).*/, "gim")) !== null)
      return message.error("BVN cannot contain letters");

    if (bvn && bvn.length === bvnReqLength) return props.next();
  }

  return (
    <>
      <Header title="verify bvn" num="3" />
      <div className="tw-bg-white-100 tw-border tw-border-white-300 tw-p-6">
        <h4 className="tw-text-gray-kwek200 tw-font-semibold tw-text-2xl tw-mb-3">
          Enter your 11-digit Bank Verification Number
        </h4>
        <div className="tw-my-7">
          <input
            type="text"
            placeholder="Enter BVN"
            className={`tw-bg-primary tw-rounded-sm tw-border-gray-700 tw-text-gray-kwek200 tw-mr-2 tw-w-4/5`}
            min={bvnReqLength}
            max={bvnReqLength}
            required
            value={bvn}
            onChange={(e) => setBvn(e.target.value)}
          />
        </div>
        <div className="tw-flex tw-justify-end tw-mt-6">
          <Button
            buttonStyle={
              "tw-rounded-sm tw-py-3  tw-px-10 tw-bg-green-success tw-text-white-100 tw-text-xs"
            }
            text={"Proceed"}
            cmd={checkProceed}
          />
        </div>
      </div>
      <div className="tw-mt-6">
        <button
          className="tw-p-3 tw-rounded-sm tw-text-white-100 tw-bg-red-kwek100"
          onClick={props.prev}
        >
          Previous
        </button>
      </div>
    </>
  );
}

export default VerifyBVN;
