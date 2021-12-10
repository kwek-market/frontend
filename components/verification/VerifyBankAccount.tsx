import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";
import TextInput from "../input/textInput";
import Header from "./Header";
import { StepComponentProps } from "react-step-builder";

function VerifyBankAccount(props: StepComponentProps) {
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (bankName !== "" && bankAccount !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [bankName, bankAccount]);

  async function confirmDetails() {
    const { message } = await import("antd");
    if (bankName === "") return message.error("Please enter your bank name");
    if (bankAccount === "") {
      return message.error("Please enter your bank account");
    }
    console.log(props.state);
    console.log({ bankName, bankAccount });
  }

  return (
    <>
      <Header title="verify bank account" num="4" />
      <div className="tw-bg-white-100 tw-border tw-border-white-300 tw-p-6">
        <h4 className="tw-text-gray-kwek200 tw-font-semibold tw-text-2xl tw-mb-3">
          Enter your account details linked to the BVN entered previously
        </h4>
        <form className="tw-w-full md:tw-w-9/12">
          <TextInput
            text={"bank name"}
            type={"text"}
            value={bankName}
            setValue={setBankName}
            style={"tw-bg-primary tw-border-gray-kwek700"}
          />
          <br />
          <TextInput
            text={"account number"}
            type={"text"}
            value={bankAccount}
            setValue={setBankAccount}
            style={"tw-bg-primary tw-border-gray-kwek700"}
          />
        </form>
        <br />
        <div className="tw-flex tw-justify-end tw-mt-5">
          <Button
            isDisabled={disabled}
            buttonStyle={`tw-rounded-sm tw-py-3 tw-px-10 ${
              disabled ? "tw-bg-gray-kwek100" : "tw-bg-green-success"
            } tw-text-white-100 tw-text-xs`}
            text={"Verify"}
            cmd={confirmDetails}
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

export default VerifyBankAccount;
