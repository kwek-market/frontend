import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import AuthForm from "./AuthForm";

function SignUp() {

  const createAccount = (formData: any) => {
    console.log(formData);
  };

  const form = {
    title: "Create an Account",
    fields: [
      {
        name: "name",
        placeholder: "Full Name",
        type: "text",
      },
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
      text: "Create Account",
      action: createAccount,
    },
    extra: {
      text: "Already have an account?",
      linkText: "Login",
      linkUrl: "/sign-in",
    },
  };

  return (
    <div className='auth-page-main-wrapper'>
      <div className="banner">
        <h1 className="banner__text">Discover <br/> Something <br/> Different.</h1>
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

export default SignUp;
