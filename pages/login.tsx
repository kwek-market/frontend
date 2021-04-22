import React from "react";

import { AuthLayout } from '@/layouts'
import { AuthForm } from '@/shared'

import { connect } from 'react-redux'
import { setUser } from '@/store/user/user.actions'

import { fetcher } from '@/helpers'


const Page = ({ user }) => {

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
        sub: {
          text: "Forgot Password?",
          url: "/forgot-password"
        }
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
    lineThree: "Shopping"
  }

  return (
    <AuthLayout id='Login' withBanner={true} bannerText={bannerText} >
      <AuthForm {...form} />
    </AuthLayout>
  );
}

const mapStateToProps = (state: any) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: any) => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Page);
