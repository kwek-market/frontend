import React, { useEffect } from "react";
import Router from "next/router";

import { AuthLayout } from "@/layouts";
import { AuthForm } from "@/shared";

import { fetcher } from "@/helpers";
import { CREATE_USER } from "@/store/user/user.queries";

import { connect } from "react-redux";

const Page = ({ user }) => {
  const createAccount = async (formData: any) => {
    console.log(formData);

    const {data, error} = await fetcher(CREATE_USER, {
      email: formData.email,
      fullName: formData.fullName,
      password1: formData.password,
      password2: formData.password,
    });

    console.log(data);
    console.log("error is:",error);
    
  };

  const form = {
    title: "Create an Account",
    fields: [
      {
        name: "fullName",
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

  const bannerText = {
    lineOne: "Discover",
    lineTwo: "Something",
    lineThree: "Different",
  };

  useEffect(() => {
    if (user.id !== null) {
      Router.push("/login");
    }
  });

  return (
    <AuthLayout id="createAccount" withBanner={true} bannerText={bannerText}>
      <AuthForm {...form} />
    </AuthLayout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Page);
