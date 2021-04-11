import React from "react";

import { AuthLayout } from '../layouts'
import { AuthForm } from '../shared'

const Page = () => {

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
      },
    ],
    submit: {
      text: "Sign In",
      action: signIn,
    },
    extra: {
      text: "Don’t have an account?",
      linkText: "Create an Account",
      linkUrl: "/create-account",
    },
  };

  return (
    <AuthLayout id='signIn' withBanner={true} >
      <AuthForm {...form} />
    </AuthLayout>
  );
}

export default Page;
