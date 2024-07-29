import Button from "@/components/buttons/Button";
import TextInput from "@/components/input/textInput";
import { emailValidator } from "@/helpers";
import { RootState } from "@/store/rootReducer";
import { updateUser } from "@/store/user/user.actions";
import { message } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Account = function ({ activeBtn }) {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state.user);
  const [firstName, setFirstName] = React.useState<string>(selector.user.fullName?.split(" ")[0]);
  const [lastName, setLastName] = React.useState<string>(selector.user.fullName?.split(" ")[1]);
  const [email, setEmail] = React.useState<string>(selector.user.username);
  const [phoneNumber, setPhoneNumber] = React.useState<number>(selector.user.phoneNumber);
  const router = useRouter();
  function saveChanges() {
    if (firstName === "" || firstName.length === 0) {
      return message.error("Invalid firstname");
    }
    if (lastName === "" && lastName.length === 0) {
      return message.error("Invalid lastname");
    }
    if (email === "" && !emailValidator(email)) {
      return message.error("Invalid email");
    }
    if (phoneNumber === 0) {
      return message.error("Invalid phoneNumber");
    }

    updateUser(
      {
        newFirstName: firstName,
        newLastName: lastName,
        newEmail: email,
        newPhoneNumber: phoneNumber,
        token: selector.token,
      },
      selector.token
    )(dispatch);
  }

  return (
    <>
      <div className='tw-border-b tw-border-gray-500 tw-border-opacity-50'>
        <h4 className='tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-xl lg:tw-text-3xl'>
          {activeBtn}
        </h4>
      </div>
      <div className='tw-mt-3 tw-mb-6 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5'>
        <TextInput text='first name' type='text' value={firstName} setValue={setFirstName} />
        <TextInput text='last name' type='text' value={lastName} setValue={setLastName} />
        <TextInput text='email address' type='email' value={email} setValue={setEmail} />
        <TextInput text='phone number' type='tel' value={phoneNumber} setValue={setPhoneNumber} />
      </div>
      <div className='tw-flex tw-justify-between'>
        <Button
          buttonStyle='tw-border tw-whitespace-nowrap tw-border-gray-400 tw-p-2 tw-rounded-sm tw-text-sm md:tw-text-base tw-text-black-stock hover:tw-text-red-kwek100 tw-font-semibold tw-truncate tw-whitespace-nowrap'
          text='Change Password'
          cmd={() => router.push("/forgot-password")}
        />
        <Button
          buttonStyle='tw-bg-green-success tw-p-2 tw-rounded-sm tw-text-sm md:tw-text-base tw-text-white-100 hover:tw-text-black-stock tw-font-semibold tw-truncate tw-whitespace-nowrap'
          text='Save Changes'
          cmd={() => saveChanges()}
        />
      </div>
    </>
  );
};

export default Account;
