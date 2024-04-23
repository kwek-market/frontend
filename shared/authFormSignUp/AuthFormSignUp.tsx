import React, { useState } from "react";

import Link from "next/link";
import { Puff } from "react-loader-spinner";
import styles from "../authForm/AuthForm.module.scss";

interface Fields {
  name: string;
  placeholder: string;
  type: string;
  className?: string;
  sub?: any;
}

interface Type {
  title: string;
  subtitle?: string;
  fields: Fields[];
  submit?: {
    text: string;
    action: (data: any) => void;
  };
  extra?: {
    text: string;
    linkText: string;
    linkUrl: string;
  };
  userId?: {
    id: string;
    message: string;
  };
  createUserInfo: {
    message: string;
  };
}

const AuthFormSign: React.FC<Type> = function ({
  title,
  subtitle,
  fields,
  submit,
  extra,
  userId,
  createUserInfo,
}) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
  const [error, setError] = useState<any>({});
  const [loading, setLoading] = useState<any>(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any, submitData: any) => {
    e.preventDefault();
    // console.log(userId);
    // console.log(formData);
    // submitData.action(formData);
    // setLoading(true);
    // console.log(user);
    // console.log(loading);
    console.log(createUserInfo);
    // Email validation
    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log(validateEmail.test(formData.email))

    if (!formData.fullName) {
      setError({ status: true, message: "Input your full name" });
      setLoading(false);
    } else if (!formData.email && !formData.password) {
      // console.log("enter your email and password in");
      setError({ status: true, message: "Input your email and password" });
      setLoading(false);
      // console.log(formData);
    } else if (
      formData.email &&
      formData.password &&
      !validateEmail.test(formData.email)
    ) {
      setError({ status: true, message: "Invalid email" });
      setLoading(false);
    } else if (!formData.email && formData.password) {
      setError({ status: true, message: "type in your email" });
      setLoading(false);
      // console.log(formData);
      // console.log("Input your email");
    } else if (!formData.password1) {
      // console.log("type in your password");
      setLoading(false);
      setError({ status: true, message: "Input your password" });
    } else if (formData.password1 !== formData.password2) {
      // console.log("enter your email and password in");
      setError({ status: true, message: "Passwords do not match" });
      setLoading(false);
      // console.log(formData);
      // } else if (userId.id === null) {
      //   setError({ status: true, message: userId.message });
      //   setLoading(false);
    } else if (
      createUserInfo.message ===
      "Password is should not be less than 8 characters"
    ) {
      setError({
        status: true,
        message: "Password is should not be less than 8 characters",
      });
      setLoading(false);
    } else if (
      createUserInfo.message === "Password should contain numerical character"
    ) {
      setError({
        status: true,
        message: "Password should contain numerical character",
      });
      setLoading(false);
    } else if (createUserInfo.message === "E-mail Already in use") {
      setError({ status: true, message: "E-mail Already in use" });
      setLoading(false);
    } else {
      setError({ status: true, message: "" });
      submitData.action(formData);
      // setLoading(false);
      console.log(formData);
    }
  };

  return (
    <div id={styles.authForm}>
      <form className={styles.form}>
        <div className={styles.form_titleblock}>
          <h2 className={styles.form_title}>{title}</h2>
          <p className={styles.form_subtitle}>{subtitle}</p>
        </div>
        {error && (
          <span className={`${styles.form_error}`}>
            <div>{error.message}</div>
          </span>
        )}

        {fields.map(({ type, sub, ...fieldProps }, index) => (
          <React.Fragment key={index}>
            <div className={styles.form_inputContainer}>
              <input
                {...fieldProps}
                className={styles.form_input}
                type={
                  type === "password" ? (showPassword ? "text" : type) : type
                }
                onChange={(e) => handleChange(e)}
              />
              {type === "password" && (
                <i
                  className={`${styles.form_inputIcon} ${
                    !showPassword ? "far fa-eye" : "far fa-eye-slash"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>

            {sub && (
              <div className={styles.form_inputSub}>
                <Link href={sub.url} className={styles.form_inputSubLink}>
                  {sub.text}
                </Link>
              </div>
            )}
          </React.Fragment>
        ))}
        {submit && (
          <div className={styles.form_btnContainer}>
            <button
              className={`btn bg-primary ${styles.btn}`}
              onClick={(e) => handleSubmit(e, submit)}
            >
              {loading && loading ? (
                <Puff
                  visible={true}
                  height="30"
                  width="30"
                  color="#fff"
                  ariaLabel="puff-loading"
                />
              ) : (
                submit.text
              )}
            </button>
          </div>
        )}

        {extra && (
          <div className={styles.form_extra}>
            <p className={styles.form_extraText}>{extra.text}</p>
            <Link href={extra.linkUrl} className={styles.form_extraLink}>
              {extra.linkText}
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default AuthFormSign;
