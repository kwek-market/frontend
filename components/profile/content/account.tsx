import Button from "@/components/buttons/Button";
import TextInput from "@/components/input/textInput";
import { useRouter } from "next/router";
import React from "react";

function Account({ activeBtn }) {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<number>(0);
  const router = useRouter();
  function saveChanges() {}

  return (
    <>
      <div className="tw-border-b tw-border-gray-500 tw-border-opacity-50">
        <h4 className="tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-xl lg:tw-text-3xl">
          {activeBtn}
        </h4>
      </div>
      <div className="tw-mt-3 tw-mb-6 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5">
        <TextInput
          text={"first name"}
          type={"text"}
          value={firstName}
          setValue={setFirstName}
          hide={undefined}
        />
        <TextInput
          text={"last name"}
          type={"text"}
          value={lastName}
          setValue={setLastName}
          hide={undefined}
        />
        <TextInput
          text={"email address"}
          type={"email"}
          value={email}
          setValue={setEmail}
          hide={undefined}
        />
        <TextInput
          text={"phone number"}
          type={"tel"}
          value={phoneNumber}
          setValue={setPhoneNumber}
          hide={undefined}
        />
      </div>
      <div className="tw-flex tw-justify-between">
        <Button
          buttonStyle={
            "tw-border tw-whitespace-nowrap tw-border-gray-400 tw-p-2 tw-rounded-sm tw-text-sm md:tw-text-base tw-text-black-stock hover:tw-text-red-kwek100 tw-font-semibold tw-truncate tw-whitespace-nowrap"
          }
          text={"Change Password"}
          cmd={() => router.push("/change-password")}
        />
        <Button
          buttonStyle={
            "tw-bg-green-success tw-p-2 tw-rounded-sm tw-text-sm md:tw-text-base tw-text-white-100 hover:tw-text-black-stock tw-font-semibold tw-truncate tw-whitespace-nowrap"
          }
          text={"Save Changes"}
          cmd={() => saveChanges()}
        />
      </div>
    </>
  );
}

export default Account;
