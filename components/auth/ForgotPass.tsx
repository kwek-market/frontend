import React, { useState, useEffect } from "react";

import AuthForm from "./AuthForm";

function ForgotPass() {
  const sendResetRequest = (formData: any) => {
    console.log(formData);
  };

  const form = {
    title: "Forgot Password?",
    subtitle:
      "Don’t worry, resetting your password is easy. Just enter the email address you used to sign up to Kwek.",
    fields: [
      {
        name: "email",
        placeholder: "Email Address",
        type: "email",
      }
    ],
    submit: {
      text: "Request Reset Link",
      action: sendResetRequest,
    },
    extra: {
      text: "Do you remember your password?",
      linkText: "Try Logging In",
      linkUrl: "/sign-in",
    },
  };

  return (
    <div className="auth-page-main-wrapper">
      <div className="form-container">
        <AuthForm {...form} />
      </div>
    </div>
  );
}

export default ForgotPass;
