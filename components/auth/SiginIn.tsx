import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import AuthForm from "./AuthForm";

function SignIn() {

  const signIn = (formData: any) => {
    console.log(formData);
  };

  const form = {
    title: "Welcome Back",
    fields: [
      {
        name: "email",
        placeholder: "Email Address",
        type: "email",
      },
      {
        name: "password",
        placeholder: "Password",
        type: "password",
      }
    ],
    submit: {
      text: "Sign In",
      url: "/sign-in",
      action: signIn,
    },
    extra: {
      text: "Don’t have an account?",
      linkText: "Create an Account",
      linkUrl: "/create-account",
    },
  };

  return (
    <div id="auth-page">
      <div className="banner">
        <h1 className="banner__text">A Fresh Approach to Shopping</h1>
        <Link href="/">
          <a className="banner__link">
            <button className="btn">
              Shop with Kwek
              <Image
                className="btn__icon btn__icon--right"
                src="/svg/arrow-right-red.svg"
                width="24"
                height="11.6"
              />
            </button>
          </a>
        </Link>
      </div>

      <div className="form-container">
        <AuthForm {...form} />
      </div>
    </div>
  );
}

export default SignIn;
