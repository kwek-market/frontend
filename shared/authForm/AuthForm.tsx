import React, { useState } from 'react';

import Link from 'next/link';
import Loader from 'react-loader-spinner';
import styles from './AuthForm.module.scss';
import { emailValidator } from '@/helpers';
import { Type, UserLogin, UserError } from '@/interfaces/commonTypes';

const AuthForm: React.FC<Type> = function ({ title, isLoading, subtitle, fields, submit, extra, userId }) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserLogin>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<UserError>({
    status: false,
    message: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, submitData: any) => {
    e.preventDefault();
    // console.log(userId);
    console.log(formData);
    submitData.action(formData);
    setLoading(true);
    // console.log(user);

    // Email validation
    // console.log(validateEmail.test(formData.email))

    if (userId.message === 'E-mail Already in use') {
      setError({ status: true, message: 'E-mail Already in use' });
      setLoading(false);
    }

    if (!formData.email && !formData.password) {
      // console.log("enter your email and password in");
      setError({ status: true, message: 'Input your email and password' });
      setLoading(false);
      // console.log(formData);
    } else if (formData.email && formData.password && !emailValidator(formData.email)) {
      setError({ status: true, message: 'Invalid email' });
      setLoading(false);
    } else if (!formData.email && formData.password) {
      setError({ status: true, message: 'type in your email' });
      setLoading(false);
      // console.log(formData);
      // console.log("Input your email");
    } else if (!formData.password) {
      // console.log("type in your password");
      setLoading(false);
      setError({ status: true, message: 'Input your password' });
    } else {
      setError({ status: false, message: '' });
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
        {error.status && (
          <div className="tw-mb-2 tw-p-2 tw-rounded-sm tw-flex tw-justify-between tw-bg-red-100 tw-text-error">
            <span>{error.message}</span>
            <i className="fas fa-times" onClick={() => setError({ ...error, status: false })} />
          </div>
        )}

        {fields.map(({ type, sub, ...fieldProps }, index) => (
          <React.Fragment key={index}>
            <div className={styles.form_inputContainer}>
              <input
                {...fieldProps}
                className={styles.form_input}
                type={type === 'password' ? (showPassword ? 'text' : type) : type}
                onChange={(e) => handleChange(e)}
              />
              {type === 'password' && (
                <i
                  className={`${styles.form_inputIcon} ${!showPassword ? 'far fa-eye' : 'far fa-eye-slash'}`}
                  onClick={() => setShowPassword(!showPassword)}
                />
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
            <button className={`btn bg-primary ${styles.btn}`} onClick={(e) => handleSubmit(e, submit)}>
              {isLoading ? (
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
