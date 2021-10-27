import React, { useEffect, useState } from "react";
import Router from "next/router";

import { AuthLayout } from "@/layouts";
import AuthFormSignUp from "@/shared/authFormSignUp/AuthFormSignUp";

// import { userFetcher } from "@/helpers";
import { CREATE_USER } from "@/store/user/user.queries";
import { setUser } from "@/store/user/user.actions";

import { connect } from "react-redux";

const Page = ({ user, setUser }) => {
  const createAccount = async (formData: any) => {
    const query = CREATE_USER;

    const variables = {
      email: formData.email,
      fullName: formData.fullName,
      password1: formData.password1,
      password2: formData.password2,
    };

    // const data = await userFetcher(query, variables);
    console.log("variables", variables);
    const result = await fetch(`https://kwekapi.com/v1/kwekql`, {
      headers: {
        "Content-Type": `application/json`,
      },
      method: "POST",
      body: JSON.stringify({
        query: `
      mutation{
        createUser(email: "${variables.email}", 
          fullName: "${variables.fullName}",
           password1: "${variables.password1}", 
           password2: "${variables.password2}"){
          status
          message
        }
      }          
      `,
      }),
    });

    const { data } = await result.json();
    // console.log(data);
    // console.log(data.createUser.message)

    {
      data.createUser &&
        // Set user state
        setUser({
          ...user,
          createUserMessage: data.createUser.message,
          email: formData.email
        });
    }
    if (
      data.createUser !== null &&
      data.createUser.message !==
        "Password should contain numerical character" &&
      data.createUser.message !==
        "Password is should not be less than 8 characters" &&
      data.createUser.message !== "Password should contain numerical character"
    ) {
      setUser({
        ...user,
        createUserMessage: data.createUser.message,
        email: formData.email,
      });
      Router.push("/verify-account");
    } else if (
      data.createUser.message === `Successfully created account for ${data.createUser.email}`
    ) {
      Router.push("/verify-account");
    } else {
      setUser({
        ...user,
        createUserMessage: data.createUser.message,
        email: formData.email,
      });
    }
  };
  console.log(user);

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
        name: "password1",
        placeholder: "Password",
        type: "password",
      },
      {
        name: "password2",
        placeholder: "Confirm Password",
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
    createUserInfo: {
      message: user.createUserMessage,
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
      <AuthFormSignUp {...form} />
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
