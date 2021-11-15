import { Topbar } from "@/shared";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import Button from "@/components/buttons/Button";
import TextInput from "@/components/input/textInput";
import { Alert } from "antd";
import Link from "next/link";
import Loader from "react-loader-spinner";
import { passwordValidator } from "@/helpers";
import { changePassword } from "@/store/user/user.actions";

export type passwordProps = {
  password1: "";
  password2: "";
};

const Page = function () {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<{ status: boolean; message: string }>({
    status: false,
    message: "",
  });

  const resetPassword = () => {
    if (!passwordValidator(newPassword)) {
      return setError({
        status: true,
        message:
          "password must contain a capital letter, a number, a symbol, must be 8 characters long",
      });
    }
    if (newPassword !== confirmPassword) {
      return setError({ status: true, message: "Passwords do not match" });
    }
    const myToken: string = router.query.token as string;
    router.query.token.length > 0 &&
      dispatch(
        changePassword(
          {
            password1: newPassword,
            password2: confirmPassword,
            token: myToken,
          },
          myToken
        )
      );
  };

  const onClose = () => {
    setError({ status: false, message: "" });
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const pwd = (
    <div
      className="tw-absolute tw-p-[5px] tw-left-[92%] tw-top-[20%]"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? (
        <i className="fas fa-eye" />
      ) : (
        <i className="fas fa-eye-slash" />
      )}
    </div>
  );

  return (
    <section>
      <Topbar withLogo={true} />
      <div className="tw-container tw-mx-auto tw-px-4 tw-text-center tw-flex tw-flex-col tw-h-screen md:tw-h-[80vh] tw-justify-center tw-items-center">
        <div>
          <p className="tw-font-bold tw-text-base md:tw-text-xl lg:tw-text-3xl tw-text-red-kwek100 tw-capitalize tw-mb-4">
            Reset Your Password
          </p>
          <p className="tw-text-brown-kwek200 tw-font-normal tw-text-sm lg:tw-text-base tw-mb-8">
            Reset your password to continue
          </p>
        </div>

        <div className="tw-my-5 tw-w-8/12">
          <div className="tw-mb-3">
            {error.status && (
              <Alert
                message={error.message}
                type="error"
                closable
                onClose={onClose}
              />
            )}
          </div>
          <TextInput
            text={"new password"}
            type={`${!showPassword ? "text" : "password"}`}
            value={newPassword}
            setValue={setNewPassword}
            hide={"tw-hidden"}
            children={pwd}
          />
          <br />
          <TextInput
            text={"confirm new password"}
            type={"password"}
            value={confirmPassword}
            setValue={setConfirmPassword}
            hide={"tw-hidden"}
          />
          {!user.loading ? (
            <Button
              buttonStyle={
                "tw-bg-red-kwek100 tw-truncate tw-rounded-sm tw-p-2.5 tw-text-white-100 tw-mt-4 tw-w-full"
              }
              text={"Reset your password"}
              cmd={resetPassword}
            />
          ) : (
            <div className="tw-bg-red-kwek100 tw-truncate tw-rounded-sm tw-p-2.5 tw-w-full tw-text-white-100 tw-mt-4  md:tw-w-[500px] tw-text-center tw-flex tw-justify-center tw-items-center">
              <Loader type="Puff" color="#fff" height={30} width={30} />
            </div>
          )}
        </div>

        <div className="tw-mt-4">
          <span className="tw-text-brown-kwek200 tw-font-normal tw-text-sm lg:tw-text-base">
            Do you remember your password?{" "}
          </span>{" "}
          <Link href="/login">
            <a className="tw-capitalize tw-font-bold tw-text-brown-kwek200 tw-opacity-100 tw-text-sm lg:tw-text-base">
              Try Loggin In
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
