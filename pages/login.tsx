import React, { useEffect } from "react";
import Router from "next/router";

import { AuthLayout } from "@/layouts";
import { AuthForm } from "@/shared";

import { connect } from "react-redux";
import { setUser } from "@/store/user/user.actions";
import { LOGIN_USER } from "@/store/user/user.queries";
import { message } from "antd";

// import { userFetcher } from "@/helpers";

const Page = ({ user, setUser }) => {
  const signIn = async (formData: any) => {
    const query = LOGIN_USER;

    const variables = {
      email: formData.email,
      password: formData.password,
    };

    try {
      // call login
      // const data = await userFetcher(query, variables);

      const result = await fetch(`https://kwekapi.com/v1/kwekql`, {
        headers: {
          "Content-Type": `application/json`,
        },
        method: "POST",
        body: JSON.stringify({
          query: `
      mutation{
        loginUser(email:"${variables.email}",password:"${variables.password}"){
        user{
        id
        fullName
        username
        lastName
        }
        status
        message
        token
        }
      }          
      `,
        }),
      });

      // console.log(result);

      const { data } = await result.json();
      const apis = data.loginUser;

      // log login data
      // console.log(apis);

      // set cookie with token from login
      const now = new Date();
      const time = now.getTime();
      now.setTime(time + 60 * 60 * 24 * 1000);

      document.cookie = `token=${
        data.loginUser.token
      };expires=${now.toUTCString()};path=/`;

      // set user state
      setUser({
        // ...user,
        ...apis,
        ...apis.user,
      });

      // redirect to home page
      // Router.push("/");
    } catch (error) {
      console.log(error);
    }
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
    userId : {
      id: user.id,
      message: user.message
    }
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
      Router.push("/");
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
