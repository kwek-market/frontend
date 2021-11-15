import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { AuthLayout } from "@/layouts";
import { AuthForm } from "@/shared";

import { loginUser } from "@/store/user/user.actions";
import { RootState } from "@/store/rootReducer";
import { UserLogin } from "@/interfaces/commonTypes";

const Page = function () {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const signIn = (formData: UserLogin) => {
    const variables: UserLogin = {
      email: formData.email,
      password: formData.password,
    };
    dispatch(loginUser(variables));
  };

  const form = {
    title: "Welcome Back",
    isLoading,
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
    userId: {
      id: user.id,
      message: user.message,
    },
  };

  const bannerText = {
    lineOne: "A Fresh",
    lineTwo: "Approach to",
    lineThree: "Shopping",
  };

  useEffect(() => {
    // check if user is a seller or not and redirect to appropriate page
    user.id !== null && router.push("/");
  }, [user.id]);

  return (
    <AuthLayout id="Login" withBanner bannerText={bannerText}>
      <AuthForm {...form} />
    </AuthLayout>
  );
};

export default Page;
