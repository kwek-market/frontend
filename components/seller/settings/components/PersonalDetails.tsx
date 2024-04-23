import TextInput from "@/components/input/textInput";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import { emailValidator, passwordValidator } from "@/helpers";
import usePasswordUpdate, { UpdatePassword } from "@/hooks/usePasswordUpdate";
import { RootState } from "@/store/rootReducer";
import { changePassword, updateUser } from "@/store/user/user.actions";
import { Input, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../../../../store";

export type UserDataType = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
};

export type UserPasswordType = {
  currentPassword: string;
  newPassword: string;
};

export default function PersonalDetails({}) {
  const {
    user,
    seller: { seller },
  } = useSelector((state: RootState) => state);

  const dispatch = useAppDispatch();
  const { mutate, isLoading } = usePasswordUpdate(user.token);
  const [personalDetails, setPersonalDetails] = useState<UserDataType>({
    firstname: seller.firstname ?? "",
    lastname: seller.lastname ?? "",
    phoneNumber: seller.phoneNumber ?? "",
    email: user.user.email ?? "",
  });
  const [password, setPassword] = useState<UserPasswordType>({
    currentPassword: "",
    newPassword: "",
  });
  const [error, setError] = useState({ status: false, message: "" });

  function saveChanges() {
    const { firstname, lastname, phoneNumber, email } = personalDetails;
    if (firstname === "" || firstname.length === 0) {
      return message.error("Invalid firstname");
    }
    if (lastname === "" || lastname.length === 0) {
      return message.error("Invalid lastname");
    }
    if (email === "" || !emailValidator(email)) {
      return message.error("Invalid email");
    }
    if (phoneNumber === "" || phoneNumber.length === 0) {
      return message.error("Invalid phoneNumber");
    }
    dispatch(
      updateUser(
        {
          newFirstName: firstname,
          newLastName: lastname,
          newEmail: email,
          newPhoneNumber: Number(phoneNumber),
          token: user.token,
        },
        user.token
      )
    );
  }

  const resetPassword = () => {
    const { currentPassword, newPassword } = password;
    if (!passwordValidator(newPassword)) {
      return setError({
        status: true,
        message:
          "Password must contain a capital letter, a number, a symbol, must be atleast 8 characters long",
      });
    }
    if (newPassword !== currentPassword) {
      return setError({ status: true, message: "Passwords do not match" });
    }
    setError({ status: false, message: "" });
    const payload: UpdatePassword = {
      ...password,
      token: user.token,
    };
    mutate(payload, {
      onSuccess: () => {
        message.success("Password updated successfully");
        setPassword({ currentPassword: "", newPassword: "" });
      },
      onError: (error: any) => {
        message.error(error.message);
      },
    });
  };

  return (
    <section className="tw-mb-7">
      <div className="">
        <section className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-justify-between tw-gap-2 tw-mb-7">
          <div className="tw-flex tw-flex-col tw-relative">
            <label
              htmlFor="firstname"
              className="tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 
            "
            >
              firstname
            </label>
            <Input
              id="firstname"
              type="text"
              placeholder="firstname"
              className="tw-rounded-sm tw-w-full tw-mt-2"
              size="large"
              value={personalDetails.firstname}
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  firstname: e.target.value,
                })
              }
            />
          </div>
          <div className="tw-flex tw-flex-col tw-relative">
            <label
              htmlFor="lastname"
              className="tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 
            "
            >
              lastname
            </label>
            <Input
              id="lastname"
              type="text"
              placeholder="lastname"
              className="tw-rounded-sm tw-w-full tw-mt-2"
              size="large"
              value={personalDetails.lastname}
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  lastname: e.target.value,
                })
              }
            />
          </div>
          <div className="tw-flex tw-flex-col tw-relative">
            <label
              htmlFor="phoneNumber"
              className="tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 
            "
            >
              Phone Number
            </label>
            <Input
              id="phoneNumber"
              type="text"
              addonBefore="+234"
              placeholder="Phone Number"
              className="tw-rounded-sm tw-w-full"
              size="large"
              value={personalDetails.phoneNumber}
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  phoneNumber: e.target.value,
                })
              }
            />
          </div>
          <div className="tw-flex tw-flex-col tw-relative">
            <label
              htmlFor="email"
              className="tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 
            "
            >
              email address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="email"
              className="tw-rounded-sm tw-w-full tw-mt-2"
              size="large"
              value={personalDetails.email}
              disabled
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  email: e.target.value,
                })
              }
            />
          </div>
        </section>
        {user.loading && <Load />}
        <div className="tw-flex tw-justify-end">
          <button
            className="tw-bg-red-kwek100 tw-text-white-100 tw-rounded-md tw-py-3 tw-px-10"
            onClick={() => saveChanges()}
          >
            Save Changes
          </button>
        </div>
      </div>
      <div className="">
        <div className="tw-border-b tw-border-gray-kwek900 tw-border-opacity-50">
          <p className="tw-uppercase tw-font-semibold tw-text-lg tw-text-gray-kwek900 tw-mb-1">
            Change Password
          </p>
        </div>

        <section className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-justify-between tw-gap-2 tw-mb-12 tw-mt-5">
          <div className="tw-flex tw-flex-col tw-relative">
            <label
              htmlFor="currentPassword"
              className="tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 
            "
            >
              Current Password
            </label>
            <Input
              id="currentPassword"
              type="password"
              placeholder="Current Password"
              className="tw-rounded-sm tw-w-full tw-mt-2"
              size="large"
              value={password.currentPassword}
              onChange={(e) =>
                setPassword({
                  ...password,
                  currentPassword: e.target.value,
                })
              }
            />
          </div>
          <div className="tw-flex tw-flex-col tw-relative">
            <label
              htmlFor="newPassword"
              className="tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 
            "
            >
              new Password
            </label>
            <Input
              id="newPassword"
              type="password"
              placeholder="new Password"
              className="tw-rounded-sm tw-w-full tw-mt-2"
              size="large"
              value={password.newPassword}
              onChange={(e) =>
                setPassword({
                  ...password,
                  newPassword: e.target.value,
                })
              }
            />
          </div>
        </section>
        {error.status && <ErrorInfo error={error.message} />}
        {isLoading && <Load />}
        <div className="tw-flex tw-justify-end tw-mt-6">
          <button
            className="tw-bg-red-kwek100 tw-text-white-100 tw-rounded-md tw-py-3 tw-px-8"
            onClick={() => resetPassword()}
          >
            Update Password
          </button>
        </div>
      </div>
    </section>
  );
}
