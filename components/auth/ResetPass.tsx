import React, { useState, useEffect } from "react";

import AuthForm from "./AuthForm";

function ResetPass() {
  const resetPass = (formData: any) => {
    console.log(formData);
  };

  const form = {
    title: "Reset your Password.",
    subtitle: "Reset your password to continue.",
    fields: [
      {
        name: "password",
        placeholder: "New Password",
        type: "password",
      },
      {
        name: "newPassword",
        placeholder: "Confirm New Password",
        type: "password",
      }
    ],
    submit: {
      text: "Reset Password",
      action: resetPass,
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

export default ResetPass;
