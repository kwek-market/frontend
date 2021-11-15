import Button from "@/components/buttons/Button";
import TextInput from "@/components/input/textInput";
import { Topbar } from "@/shared";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Alert } from "antd";
import { sendPasswordResetEmail } from "@/store/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import Loader from "react-loader-spinner";
import { useRouter } from "next/router";

const Page = function () {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const sendResetRequest = () => {
    if (email === "") {
      return setError("Enter your email");
    }
    dispatch(sendPasswordResetEmail(email, user.token));
  };

  const onClose = () => {
    setError("");
  };

  return (
    <section>
      <Topbar withLogo={true} />
      <div className="tw-container tw-mx-auto tw-px-4 tw-text-center tw-flex tw-flex-col tw-h-screen md:tw-h-[80vh] tw-justify-center tw-items-center">
        <div>
          <p className="tw-font-bold tw-text-base md:tw-text-xl lg:tw-text-3xl tw-text-red-kwek100 tw-capitalize tw-mb-4">
            forgot password?
          </p>
          <p className="tw-text-brown-kwek200 tw-font-normal tw-text-sm lg:tw-text-base tw-mb-8">
            Don’t worry, resetting your password is easy. Just enter the email
            address you used to sign up to Kwek.
          </p>
        </div>

        <div className="tw-my-5">
          {error && (
            <Alert message={error} type="error" closable onClose={onClose} />
          )}
          <br />
          <TextInput
            text={"email address"}
            type={"email"}
            value={email}
            setValue={setEmail}
            hide={"tw-hidden"}
          />
          {!user.loading ? (
            <Button
              buttonStyle={
                "tw-bg-red-kwek100 tw-truncate tw-rounded-sm tw-p-2.5 tw-text-white-100 tw-mt-4 tw-w-full md:tw-w-[500px]"
              }
              text={"Request Reset Link"}
              cmd={sendResetRequest}
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
