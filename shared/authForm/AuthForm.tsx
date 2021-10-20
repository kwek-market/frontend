import React, { useState } from "react";
import styles from "./AuthForm.module.scss";

import Link from "next/link";

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
}

const AuthForm: React.FC<Type> = ({
  title,
  subtitle,
  fields,
  submit,
  extra,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any, submitData: any) => {
    e.preventDefault();
    submitData.action(formData);
  };

  return (
    <div id={styles.authForm}>
      <form className={styles.form}>
        <div className={styles.form_titleblock}>
          <h2 className={styles.form_title}>{title}</h2>
          <p className={styles.form_subtitle}>{subtitle}</p>
        </div>

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
              {submit.text}
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
