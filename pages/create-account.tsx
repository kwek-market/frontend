import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { Puff } from "react-loader-spinner";
import Link from "next/link";
import styles from "../shared/authForm/AuthForm.module.scss";
import { AuthLayout } from "@/layouts";
import {
  emailValidator,
  passwordMatch,
  PASSWORDREGEX,
  passwordValidator,
} from "@/helpers";
import { RootState } from "@/store/rootReducer";
import { createUserAccount } from "@/store/account/account.actions";
import { FormDataType, ErrorType } from "@/interfaces/commonTypes";
import Alert from "antd/lib/alert";
import { useAppDispatch } from "../store";

const Page = function () {
  const dispatch = useAppDispatch();
  const account = useSelector((state: RootState) => state.account);
  const [showPassword1, setShowPassword1] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    fullName: "",
    password1: "",
    password2: "",
  });
  const [error, setError] = useState<ErrorType>({
    status: "none",
    success: false,
    message: "",
  });

  const router = useRouter();

  function onClose() {
    setError({ ...error, status: "none" });
  }

  useEffect(() => {
    if (account.status) {
      router.push("/email-verification");
    }
  }, [account.status]);

  const createAccount = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    // do checks
    if (formData.email === "") {
      return setError({
        status: "error",
        success: false,
        message: "Email field cannot be empty",
      });
    }
    if (!emailValidator(formData.email)) {
      return setError({
        status: "error",
        success: false,
        message: "Invalid email",
      });
    }
    if (formData.fullName === "" && formData.fullName.length < 3) {
      return setError({
        status: "error",
        success: false,
        message: "fullname can't be empty or less than 3",
      });
    }
    if (
      !passwordMatch(formData.password1, formData.password2) &&
      !passwordMatch(formData.password2, formData.password1)
    ) {
      return setError({
        status: "error",
        success: false,
        message: "Passwords don't match",
      });
    }
    if (!passwordValidator(formData.password1)) {
      return setError({
        status: "error",
        success: false,
        message:
          "Password must contain a capital letter, a number, a symbol, must be atleast 8 characters long",
      });
    }
    // pass to dispatch
    dispatch(createUserAccount(formData));
  };

  const form = {
    title: "Create an Account",
    submit: {
      text: "Create Account",
      action: createAccount,
    },
    extra: {
      text: "Already have an account?",
      linkText: "Login",
      linkUrl: "/login",
    },
    createUserInfo: {
      message: "user.createUserMessage",
    },
    subtitle: "",
  };

  const bannerText = {
    lineOne: "Discover",
    lineTwo: "Something",
    lineThree: "Different",
  };

  return (
    <AuthLayout id="createAccount" withBanner bannerText={bannerText}>
      <div id={styles.authForm}>
        <form className={styles.form}>
          <div className={styles.form_titleblock}>
            <h2 className={styles.form_title}>Create an Account</h2>
          </div>
          {error.status.match("error") && (
            <Alert
              message={error.message}
              type="error"
              closable
              onClose={onClose}
            />
          )}
          <br />
          <div className={styles.form_inputContainer}>
            <input
              className={styles.form_input}
              type="text"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="Full Name"
              required
            />
          </div>
          <div className={styles.form_inputContainer}>
            <input
              className={styles.form_input}
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Email Address"
              required
            />
          </div>
          <div className={styles.form_inputContainer}>
            <input
              className={styles.form_input}
              type={showPassword1 ? "text" : "password"}
              value={formData.password1}
              onChange={(e) =>
                setFormData({ ...formData, password1: e.target.value })
              }
              pattern={String(PASSWORDREGEX)}
              placeholder="Password"
              required
            />
            {"password" && (
              <i
                className={`${styles.form_inputIcon} ${
                  !showPassword1 ? "far fa-eye" : "far fa-eye-slash"
                }`}
                onClick={() => setShowPassword1(!showPassword1)}
              />
            )}
          </div>
          <div className={styles.form_inputContainer}>
            <input
              className={styles.form_input}
              type={showPassword2 ? "text" : "password"}
              value={formData.password2}
              onChange={(e) =>
                setFormData({ ...formData, password2: e.target.value })
              }
              placeholder="Confirm Password"
              required
            />
            {"password" && (
              <i
                className={`${styles.form_inputIcon} ${
                  !showPassword2 ? "far fa-eye" : "far fa-eye-slash"
                }`}
                onClick={() => setShowPassword2(!showPassword2)}
              />
            )}
          </div>

          <div className={styles.form_btnContainer}>
            <button
              className={`btn bg-primary hover:tw-text-blue-300 ${styles.btn}`}
              onClick={(e) => createAccount(e)}
            >
              {account.loading ? (
                <Puff
                  visible={true}
                  height="30"
                  width="30"
                  color="#fff"
                  ariaLabel="puff-loading"
                />
              ) : (
                form.submit.text
              )}
            </button>
          </div>

          {form.extra && (
            <div className={styles.form_extra}>
              <p className={styles.form_extraText}>{form.extra.text}</p>
              <Link href={form.extra.linkUrl} className={styles.form_extraLink}>
                {form.extra.linkText}
              </Link>
            </div>
          )}
        </form>
      </div>
    </AuthLayout>
  );
};

export default Page;
