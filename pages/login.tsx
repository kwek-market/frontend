import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AuthLayout } from "@/layouts";
import { AuthForm } from "@/shared";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/user/user.actions";
import { LOGIN_USER } from "@/store/user/user.queries";

import { userFetcher } from "@/helpers";
import { RootState } from "@/store/rootReducer";
import { UserLogin } from "@/interfaces/commonTypes";

const Page = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const signIn = async (formData: UserLogin) => {
    const query = LOGIN_USER;

    const variables: UserLogin = {
      email: formData.email,
      password: formData.password,
    };

    try {
      // call login
      setIsLoading(true);
      const data = await userFetcher(query, variables);
      setIsLoading(false);

      const apis = data.loginUser;
      import("antd").then((antd) => {
        apis.status
          ? antd.message.success(apis.message)
          : antd.message.error(apis.message);
      });

      // set cookie with token from login
      const now = new Date();
      const time = now.getTime();
      now.setTime(time + 60 * 60 * 24 * 1000);

      document.cookie = `token=${
        data.loginUser.token
      };expires=${now.toUTCString()};path=/`;

      // set user state
      dispatch(
        setUser({
          id: apis.user.id,
          ...apis,
        })
      );
      setIsLoading(false);
      // redirect to home page
      apis.status && router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const form = {
    title: "Welcome Back",
    isLoading: isLoading,
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
    user.id !== null && router.push("/");
  }, []);

  return (
    <AuthLayout id="Login" withBanner={true} bannerText={bannerText}>
      <AuthForm {...form} />
    </AuthLayout>
  );
};

export default Page;
