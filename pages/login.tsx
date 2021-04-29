import React, { useEffect } from "react";
import Router from "next/router";

import { AuthLayout } from "@/layouts";
import { AuthForm } from "@/shared";

import { connect } from "react-redux";
import { setUser } from "@/store/user/user.actions";
import { GET_USER } from "@/store/user/user.queries";

import { userFetcher } from "@/helpers";

const Page = ({ user }) => {
  const signIn = async (formData: any) => {
    const query = GET_USER;
    const variables = {
      email: formData.email,
      password: formData.password,
    };

    const data = await userFetcher(query, variables);

    console.log(data.loginUser);

    const now = new Date();
    const time = now.getTime();
    now.setTime(time + 60 * 1000);
    document.cookie = `token=true;expires=${now.toUTCString()};path=/`;
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
        sub: {
          text: "Forgot Password?",
          url: "/forgot-password",
        },
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

  const bannerText = {
    lineOne: "A Fresh",
    lineTwo: "Approach to",
    lineThree: "Shopping",
  };

  useEffect(() => {
    user.id && Router.push("/");
  }, []);

  if (user.id) {
    return null;
  }

  return (
    <AuthLayout id="Login" withBanner={true} bannerText={bannerText}>
      <AuthForm {...form} />
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
