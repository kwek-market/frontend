import React, { useState } from "react";
import styles from "./AuthForm.module.scss";

import Link from "next/link";
import Loader from "react-loader-spinner";

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
  };
}

const AuthForm: React.FC<Type> = ({
  title,
  subtitle,
  fields,
  submit,
  extra,
  userId,
}) => {
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
    console.log(userId);
    console.log(formData)
    submitData.action(formData);
    setLoading(true);

    if (!formData.email && !formData.password) {
      // console.log("enter your email and password in");
      setError({ status: true, message: "Input your email and password" });
      setLoading(false);
      // console.log(formData);
    } else if (!formData.email && formData.password) {
      setError({ status: true, message: "type in your email" });
      setLoading(false);
      // console.log(formData);
      // console.log("Input your email");
    } else if (!formData.password) {
      // console.log("type in your password");
      setLoading(false);
      setError({ status: true, message: "Input your password" });
    // } 
    // else if (userId.id === null) {
    //   setError({ status: true, message: "user does not exist" });
    //   setLoading(false);
    } else {
      setError({ status: true, message: "" });
      submitData.action(formData);
      // setLoading(false);
      console.log(formData)
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
            <div style={{ paddingLeft: "0.3rem" }}>{error.message}</div>
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
                ></i>
              )}
            </div>

            {sub && (
              <div className={styles.form_inputSub}>
                <Link href={sub.url}>
                  <a className={styles.form_inputSubLink}>{sub.text}</a>
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
              {loading ? <Loader
                type="Puff"
                color="#fff"
                height={30}
                width={30}
                timeout={3000} //3 secs
              /> :
              (submit.text)}
              {/* {submit.text} */}
            </button>
          </div>
        )}

        {extra && (
          <div className={styles.form_extra}>
            <p className={styles.form_extraText}>{extra.text}</p>
            <Link href={extra.linkUrl}>
              <a className={styles.form_extraLink}>{extra.linkText}</a>
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
