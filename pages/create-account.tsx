import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AuthLayout } from "@/layouts";
import styles from "../shared/authForm/AuthForm.module.scss";

import { setUser } from "@/store/user/user.actions";

import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import Link from "next/link";
import { emailValidator } from "@/helpers";

const Page = ({ user, setUser }) => {
  const [showPassword1, setShowPassword1] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
  const [error, setError] = useState<any>({});
  const [loading, setLoading] = useState<any>(false);
  const [createUserData, setCreateUserData] = useState<any>({});

  const router = useRouter()


  const createAccount = async (e: any, formData: any) => {
    // const data = await userFetcher(query, variables);
    e.preventDefault();
    const result = await fetch(`https://kwekapi.com/v1/kwekql`, {
      headers: {
        "Content-Type": `application/json`,
      },
      method: "POST",
      body: JSON.stringify({
        query: `
      mutation{
        createUser(email: "${formData.email}", 
          fullName: "${formData.fullName}",
           password1: "${formData.password1}", 
           password2: "${formData.password2}"){
          status
          message
          emailText
        }
      }          
      `,
      }),
    });

    const { data } = await result.json();
    const apis = data.createUser;
    setCreateUserData(apis);

    console.log(apis);

    if (apis !== null &&
      apis.message !==
        "Password should contain numerical character" &&
      apis.message !==
        "Password is should not be less than 8 characters" &&
      apis.message !==
        "Password should contain numerical character" &&
      apis.message ===
        `Successfully created account for ${apis.email}`
    ) {
      setError({ status: true, message: apis.message, success: true });

      // router.push("/");
    } else if (!formData.email && !formData.password) {
      setError({ status: true, message: "Input your email and password", success: false });
      setLoading(false);
    } else if (
      formData.email &&
      formData.password &&
      !emailValidator(formData.email)
    ) {
      setError({ status: true, message: "Invalid email", success: false });
      setLoading(false);
    } else if (!formData.email && formData.password) {
      setError({ status: true, message: "type in your email", success: false });
      setLoading(false);
    } else if (!formData.password1) {
      setLoading(false);
      setError({ status: true, message: "Input your password", success: false });
    } else if (formData.password1 !== formData.password2) {
      setError({ status: true, message: "Passwords do not match", success: false });
      setLoading(false);
    } else if (apis.message === "Enter Valid E-mail") {
      setError({ status: true, message: "Enter Valid E-mail", success: false });
      setLoading(false);
    } else if (
      apis.message ===
      "Password is should not be less than 8 characters"
    ) {
      setError({
        status: true,
        message: "Password is should not be less than 8 characters", success: false
      });
      setLoading(false);
    } else if (
      apis.message === "Password should contain numerical character"
    ) {
      setError({
        status: true,
        message: "Password should contain numerical character", success: false
      });
      setLoading(false);
    } else if (apis.message === "E-mail Already in use") {
      setError({ status: true, message: "E-mail Already in use", success: false });
      setLoading(false);
    } else {
      setError({ status: true, message: `${apis.message}`, success: true });
      setLoading(true);
      // router.push("/");
    }
  };


  const handleSubmit = (e: any, submitData: any) => {
    submitData.action(formData);
    router.push("/");

    // Email validation
    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    
      if (createUserData.message === `Successfully created account for ${createUserData.email}`) {
      setError({ status: true, message: `Successfully created account for ${createUserData.email}` });
      submitData.action(formData);
      console.log(formData);
      router.push("/");

    }
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
      message: user.createUserMessage,
    },
    subtitle: "",
  };

  const bannerText = {
    lineOne: "Discover",
    lineTwo: "Something",
    lineThree: "Different",
  };

  return (
    <AuthLayout id="createAccount" withBanner={true} bannerText={bannerText}>
      <div id={styles.authForm}>
        <form className={styles.form}>
          <div className={styles.form_titleblock}>
            <h2 className={styles.form_title}>Create an Account</h2>
          </div>
          {error && (
            <span className={error.success ? `${styles.form_success}` : `${styles.form_error}`}>
              <div>{error.message}</div>
            </span>
          )}

          <div className={styles.form_inputContainer}>
            <input
              className={styles.form_input}
              type={"text"}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder={"Full Name"}
            />
          </div>
          <div className={styles.form_inputContainer}>
            <input
              className={styles.form_input}
              type={"email"}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder={"Email Address"}
            />
          </div>
          <div className={styles.form_inputContainer}>
            <input
              className={styles.form_input}
              type={
                "password" ? (showPassword1 ? "text" : "password") : "password"
              }
              onChange={(e) =>
                setFormData({ ...formData, password1: e.target.value })
              }
              placeholder={"Password"}
            />
            {"password" && (
              <i
                className={`${styles.form_inputIcon} ${
                  !showPassword1 ? "far fa-eye" : "far fa-eye-slash"
                }`}
                onClick={() => setShowPassword1(!showPassword1)}
              ></i>
            )}
          </div>
          <div className={styles.form_inputContainer}>
            <input
              className={styles.form_input}
              type={
                "password" ? (showPassword2 ? "text" : "password") : "password"
              }
              onChange={(e) =>
                setFormData({ ...formData, password2: e.target.value })
              }
              placeholder={"Confirm Password"}
            />
            {"password" && (
              <i
                className={`${styles.form_inputIcon} ${
                  !showPassword2 ? "far fa-eye" : "far fa-eye-slash"
                }`}
                onClick={() => setShowPassword2(!showPassword2)}
              ></i>
            )}
          </div>

          <div className={styles.form_btnContainer}>
            <button
              className={`btn bg-primary ${styles.btn}`}
              onClick={(e) => createAccount(e, formData)}
            >
              {loading && loading ? (
                <Loader type="Puff" color="#fff" height={30} width={30} />
              ) : (
                form.submit.text
              )}
            </button>
          </div>

          {form.extra && (
            <div className={styles.form_extra}>
              <p className={styles.form_extraText}>{form.extra.text}</p>
              <Link href={form.extra.linkUrl}>
                <a className={styles.form_extraLink}>{form.extra.linkText}</a>
              </Link>
            </div>
          )}
        </form>
      </div>
    </AuthLayout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: any) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
