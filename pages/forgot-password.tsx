import React from "react";

import { AuthLayout } from "@/layouts";
import { AuthForm } from "@/shared";

const Page = () => {
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
      },
    ],
    submit: {
      text: "Request Reset Link",
      action: sendResetRequest,
    },
    extra: {
      text: "Do you remember your password?",
      linkText: "Try Logging In",
      linkUrl: "/login",
    },
  };

  return (
    <AuthLayout id="forgotPassword">
      <AuthForm {...form} />
    </AuthLayout>
  );
};

export default Page;
