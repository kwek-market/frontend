import React, { useState } from "react";

import Link from "next/link";
import Loader from "react-loader-spinner";
import styles from "./AuthForm.module.scss";
import { emailValidator } from "@/helpers";
import { Type, UserLogin, UserError } from "@/interfaces/commonTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import Alert from "antd/lib/alert";

const AuthForm: React.FC<Type> = function ({
  title,
  subtitle,
  fields,
  submit,
  extra,
}) {
  const user = useSelector((state: RootState) => state.user);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserLogin>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<UserError>({
    status: false,
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  function onClose() {
    setError({ ...error, status: false });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setLoading(true);

    if (!formData.email && !formData.password) {
      setError({ status: true, message: "Input your email and password" });
      setLoading(false);
    } else if (
      formData.email &&
      formData.password &&
      !emailValidator(formData.email)
    ) {
      setError({ status: true, message: "Invalid email" });
      setLoading(false);
    } else if (!formData.email && formData.password) {
      setError({ status: true, message: "type in your email" });
      setLoading(false);
    } else if (!formData.password) {
      setLoading(false);
      setError({ status: true, message: "Input your password" });
    } else {
      setError({ status: false, message: "" });
      submit.action(formData);
    }
  }

  return (
    <div id={styles.authForm}>
      <form className={styles.form}>
        <div className={styles.form_titleblock}>
          <h2 className={styles.form_title}>{title}</h2>
          <p className={styles.form_subtitle}>{subtitle}</p>
        </div>
        {error.status && (
          <Alert
            message={error.message}
            type="error"
            closable
            onClose={onClose}
          />
        )}

        {fields.map(({ type, sub, ...fieldProps }, index) => (
          <React.Fragment key={index}>
            <div className={styles.form_inputContainer}>
              <input
                {...fieldProps}
                className={`${styles.form_input} tw-w-full`}
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

        <div className={styles.form_btnContainer}>
          <button
            className={`btn bg-primary ${styles.btn}`}
            onClick={(e) => handleSubmit(e)}
          >
            {user.loading ? (
              <Loader
                type="Puff"
                color="#fff"
                height={30}
                width={30}
                // timeout={3000} //3 secs
              />
            ) : (
              submit.text
            )}
          </button>
        </div>

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

export default AuthForm;
