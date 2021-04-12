import React from "react";

import { AuthLayout } from "../layouts";
import { AuthForm } from "../shared";

const Page = () => {
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
      },
    ],
    submit: {
      text: "Create Account",
      action: createAccount,
    },
    extra: {
      text: "Already have an account?",
      linkText: "Login",
      linkUrl: "/login",
    },
  };

  return (
    <AuthLayout id='createAccount' withBanner={true}>
      <AuthForm {...form} />
    </AuthLayout>
  );
};

export default Page;
