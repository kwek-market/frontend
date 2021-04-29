import React, { useEffect } from "react";
import Router from "next/router";

import { AuthLayout } from "@/layouts";
import { AuthForm } from "@/shared";

import { userFetcher } from "@/helpers";
import { CREATE_USER } from "@/store/user/user.queries";
import { setUser } from '@/store/user/user.actions'

import { connect } from "react-redux";

const Page = ({ user, setUser }) => {
  const createAccount = async (formData: any) => {
    const query = CREATE_USER;
    const variables = {
      email: formData.email,
      fullName: formData.fullName,
      password1: formData.password,
      password2: formData.password,
    };

    const data = await userFetcher(query, variables);

    if (data.createUser.status) {
      setUser({
        ...user,
        email: formData.email
      })

      Router.push("/verify-account");
    } else if (user.email) {
      Router.push("/verify-account");
    } else {
      console.log(data);
    }
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

const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: any) => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Page);
